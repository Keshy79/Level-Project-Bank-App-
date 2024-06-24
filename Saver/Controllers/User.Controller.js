const { userModel, createReservedAcct } = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const nodemailer = require("nodemailer");
const secretKey = process.env.SECRET;
const cloudinary = require("cloudinary").v2;
const axios = require("axios");
const { Buffer } = require("buffer");
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
const {
  welcomeEmailTemplate,
  verifyEmailTemplate,
} = require("../Extra/email.templete");
const { log } = require("console");

const emailGen = () => {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 11; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text + "@gmail.com";
};

const createUser = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  const verificationToken = emailGen();
  const Sendemail = email;
  function generateAccountNumber() {
    const randomNumber = Math.floor(Math.random() * Math.pow(10, 10));
    const accountNumber = randomNumber.toString().padStart(10, "0");
    return accountNumber;
  }

  const accNo = generateAccountNumber();

  const user = new userModel({
    firstName,
    lastName,
    accountNumber: accNo,
    password: hashedPassword,
    emailLink: {
      email: Sendemail,
      verified: false,
      verificationToken,
    },
  });

  user
    .save()
    .then((response) => {
      sendEmail(
        email,
        "Welcome to Tender Pay",
        welcomeEmailTemplate(firstName)
      );
      sendEmail(
        email,
        "Email verification",
        verifyEmailTemplate(firstName, verificationToken)
      );
      console.log("User registered successfully");
      res.status(201).json({
        message: "User registered successfully",
        data: response,
      });
    })
    .catch((err) => {
      console.error("Error registering user:", err);
      if (err) {
        res.status(500).json({
          message: "Error registering user",
          error: err,
        });
      }
    });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await userModel.findOne({ "emailLink.email": email });

    if (!user) {
      return res.status(400).json({
        Message: "User does not exist, please sign up",
      });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({
          Message: "Invalid credentials",
        });
      } else {
        const token = jwt.sign({ id: user._id }, secretKey, {
          expiresIn: "24h",
        });
        res.status(200).json({
          Message: "Login successful",
          token: token,
        });
      }
    }
  } catch (err) {
    console.error("Error logging in user:", err);
    res.status(500).json({ Message: "Internal server error" });
  }
};

const verifyEmail = async (req, res) => {
  let token = req.query.token;
  let user = await userModel.findOne({ "emailLink.verificationToken": token });
  if (user) {
    user.emailLink.verified = true;
    user.save().then((result) => {
      res.status(200).send({ status: true, Message: "Email verified" });
    })
    .catch((err)=>{
      res.status(500).send({ status: false, Message: "Server error" });
    })
  } else {
    console.log(token);
    res.status(400).send({ status: false, Message: "Invalid token" });
  }
};

const dashboard = async (req, res) => {
  let token = req.headers.authorization.split(" ")[1];
  console.log(token);
  jwt.verify(token, secretKey, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send({ status: false, Message: "Invalid token", err });
    } else {
      console.log(result);
      userModel.findById(result.id).then((user) => {
        res.status(200).send({ status: true, Message: "welcome", user });
      });
    }
  });
};

const emailLink = async (email, res) => {
  try {
    let user = await userModel.findOne({ "emailLink.email": email });
    if (user) {
      const verify = user.emailLink.verificationToken;
      const toEmail = user.emailLink.email;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to: toEmail,
        subject: "Email Verification",
        text: "That was easy!",
        html: `<p>Click the link below to verify your email account</p> 
                       <a href="${verify}">Verify your email</a>`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).json({
            message: "Error sending email",
          });
        } else {
          console.log("Email sent:", info.response);
          return res.status(200).json({
            message: "Email sent successfully",
          });
        }
      });
    } else {
      return res.status(404).json({
        message: "User not found",
      });
    }
  } catch (err) {
    console.error("Error occurred during email verification:", err);
    return res.status(500).json({
      message: "Error occurred during email verification",
    });
  }
};

const sendEmail = async (email, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        message: "Error sending email",
      });
    } else {
      console.log("Email sent:", info.response);
      return res.status(200).json({
        message: "Email sent successfully",
      });
    }
  });
};

function generateRandomText() {
  function shuffleString(str) {
    const arr = str.split("");
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
  }

  const capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const specialChars = "!@#$%^&*()_+{}[]";
  const numbers = "0123456789";

  let randomString = "";

  // Generate 2 uppercase letters
  for (let i = 0; i < 2; i++) {
    const randomIndex = crypto.randomInt(0, capLetters.length);
    randomString += capLetters[randomIndex];
  }

  // Generate 3 lowercase letters
  for (let i = 0; i < 3; i++) {
    const randomIndex = crypto.randomInt(0, lowerLetters.length);
    randomString += lowerLetters[randomIndex];
  }

  // Generate 2 special characters
  for (let i = 0; i < 2; i++) {
    const randomIndex = crypto.randomInt(0, specialChars.length);
    randomString += specialChars[randomIndex];
  }

  // Generate 2 numbers
  for (let i = 0; i < 2; i++) {
    const randomIndex = crypto.randomInt(0, numbers.length);
    randomString += numbers[randomIndex];
  }

  // Shuffle the generated string
  randomString = shuffleString(randomString);

  return randomString;
}

const resetPassword = async (req, res) => {
  const { email } = req.body;
  let user = await userModel.findOne({ "emailLink.email": email });
  if (user) {
    const newPassword = generateRandomText();
    const hashedPassword = bcrypt.hashSync(newPassword, 10);
    user.password = hashedPassword;
    user
      .save()
      .then((result) => {
        const text = `<h1> Your new password is: ${newPassword}</h1>`;
        sendEmail(user.emailLink.email, text);
        res.status(200).json({ msg: "Password reset successful", result });
      })
      .catch((err) => {
        res.status(500).json({ msg: "Password reset failed" });
      });
  } else {
    res.status(500).json({ mgs: "User not found" });
  }
};

const upload = (req, res) => {
  let file = req.body.file;
  let email = req.body.email;

  cloudinary.uploader.upload(file, (error, result) => {
    if (result) {
      console.log(result);
      userModel.findOne({ "emailLink.email": email }).then((user) => {
        user.profile_url = result.url;
        user.save().then((data) => {
          console.log(data);
          res
            .status(200)
            .json({
              msg: "Profile picture uploaded successfully",
              result,
              data,
            });
        });
      });
    } else {
      console.log(error);
      res.status(400).json({ msg: "Profile picture upload failed", result });
    }
  });
};

const mfiToken = () => {
  return new Promise((resolve, reject) => {
    const API = "https://sandbox.monnify.com/api/v1/auth/login";
    const requestOptions = {};
    const apiKey = process.env.MONNIFY_API_KEY;
    const apiSecret = process.env.MONNIFY_API_SECRET;
    const authString = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");
    const authHeader = `Basic ${authString}`;

    axios
      .post(API, requestOptions, {
        headers: {
          "content-type": "application/json",
          Authorization: authHeader,
        },
      })
      .then((response) => {
        const authKey = response.data.responseBody.accessToken;
        resolve(authKey);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

const reservedAccount = async (req, res) => {
  const { accountReference, accountName, customerEmail, bvn, customerName } =
    req.body;
  const authKey = await mfiToken();
  const url =
    "https://sandbox.monnify.com/api/v2/bank-transfer/reserved-accounts";
  const requestOptions = {
    accountReference,
    accountName,
    currencyCode: "NGN",
    contractCode: "5664265857",
    customerEmail,
    customerName,
    bvn,
    getAllAvailableBanks: true,
  };
  const checked = await createReservedAcct.findOne({
    clientEmail: customerEmail,
  });
  if (checked) {
    res.status(400).json({
      msg: "Account already exist",
      data: checked,
    });
  } else {
    axios
      .post(url, requestOptions, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${authKey}`,
        },
      })
      .then((response) => {
        console.log(response.data.responseBody.accounts);
        const acct = response.data.responseBody.accounts;
        let account = new createReservedAcct({
          clientEmail: customerEmail,
          accountReference,
          accounts: acct,
        });
        account
          .save()
          .then((result) => {
            console.log(result);
            res
              .status(200)
              .json({
                status: "success",
                msg: "Account created successfully",
                data: result,
              });
          })
          .catch((error) => {
            console.log(error);
            res.status(500).json({ status: "error", msg: "An error occurred" });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const getReservedAccount = async (req, res) => {
  const { clientEmail } = req.body;
  const userAccount = await createReservedAcct.findOne({ clientEmail });
  console.log(req.body);
  if (userAccount) {
    res.status(200).json({
      msg: "Account found",
      data: userAccount,
    });
    console.log(userAccount);
  } else {
    res.status(404).json({
      status: false,
      msg: "Account not found",
    });
  }
};

const monnifyPayment = async (req, res) => {
  const customerEmail = req.body.eventData.customer.email;
  const amountPaid = req.body.eventData.amountPaid;
  const paymentStatus = req.body.eventData.paymentStatus;
  const eventType = req.body.eventType;
  if (eventType === "PAYMENT_SUCCESSFUL" && paymentStatus === "PAID") {
    console.log(customerEmail, eventType, amountPaid, paymentStatus);
    const amountToCredit = Number(amountPaid) - 50;
    console.log(amountToCredit);
    let user = await userModel.findOne({ "emailLink:email": customerEmail });
    if (user) {
      let accountBalance = Number(user.accountBalance);
      let newBalance = accountBalance + amountToCredit;
      user.accountBalance = newBalance;
      user
        .save()
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
    }
  }
};

module.exports = {
  createUser,
  loginUser,
  verifyEmail,
  dashboard,
  emailLink,
  resetPassword,
  upload,
  getReservedAccount,
  reservedAccount,
  monnifyPayment,
};
