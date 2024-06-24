const welcomeEmailTemplate = (firstName) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to [Your Company Name]!</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
      <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #dddddd; border-radius: 10px; background-color: #f9f9f9;">
        <div style="padding: 20px; background-color: #ffffff; border-radius: 10px;">
          <h1 style="color: #1E90FF;">Welcome to Kash bank!</h1>
          <p>Dear ${firstName},</p>
          <p>Welcome to Kash bank! We are excited to have you on board. Our mission is to provide you with the best possible experience, and we are committed to helping you succeed.</p>
          <p>Here are some resources to help you get started:</p>
          <ul>
            <li><a href="https://your-company-website.com/start-guide" style="color: #1E90FF;">Getting Started Guide</a></li>
          </ul>
          <p>If you have any questions, don't hesitate to <a href="mailto:support@your-company.com" style="color: #1E90FF;">reach out to our support team</a>. We are here to help!</p>
          <p>Best regards,</p>
          <p>The Kash bank Team</p>
          <a href="https://your-company-website.com" style="display: inline-block; padding: 10px 20px; margin-top: 20px; border-radius: 5px; background-color: #1E90FF; color: #ffffff; text-decoration: none;">Visit Our Website</a>
        </div>
        <div style="text-align: center; padding-top: 20px; font-size: 0.8em; color: #777777;">
          <p>&copy; 2024, Kash bank. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
    
    `
}

const verifyEmailTemplate = (firstName, verificationCode) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Verify Your Account - Kash bank</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
      <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #dddddd; border-radius: 10px; background-color: #f9f9f9;">
        <div style="padding: 20px; background-color: #ffffff; border-radius: 10px;">
          <h1 style="color: #1E90FF;">Welcome to Kash bank!</h1>
          <p>Dear ${firstName},</p>
          <p>Thank you for joining Kash bank! To complete your registration and activate your account, please verify your email address by clicking the button below:</p>
          <a href="http://localhost:5173/verify?token=${verificationCode}" style="display: inline-block; padding: 10px 20px; margin-top: 20px; border-radius: 5px; background-color: #1E90FF; color: #ffffff; text-decoration: none;">Verify Your Account</a>
          <p>If the button above does not work, you can also verify your account by clicking the following link:</p>
          <p><a href="http://localhost:5173/verify?token=${verificationCode}" style="color: #1E90FF;">http://localhost:5173/verify?token=${verificationCode}</a></p>
          <p>If you did not sign up for an account, please ignore this email.</p>
          <p>Best regards,</p>
          <p>The Kash bank Team</p>
        </div>
        <div style="text-align: center; padding-top: 20px; font-size: 0.8em; color: #777777;">
          <p>&copy; 2024 Kash bank. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
    
    `
}

module.exports = {
    welcomeEmailTemplate,
    verifyEmailTemplate
}