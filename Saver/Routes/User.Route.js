const express = require("express");
const router = express.Router();
const { createUser, loginUser, verifyEmail, dashboard, emailLink, resetPassword , upload, reservedAccount, getReservedAccount, monnifyPayment } = require("../Controllers/User.Controller");

router.post("/createUser", createUser);
router.post("/loginUser", loginUser);
router.get("/verify", verifyEmail);
router.get("/dashboard", dashboard);
router.post("/email", emailLink);
router.post("/reset_password", resetPassword);
router.post("/upload", upload);
router.post("/monnify", reservedAccount);
router.post("/get_account", getReservedAccount);
router.post("/monnify_payment", monnifyPayment);

module.exports = router;