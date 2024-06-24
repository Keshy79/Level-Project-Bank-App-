const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    accountNumber: {type:Number, unique: true},
    password: { type: String, required: true },
    emailLink: {
        email: { type: String, required: true, unique: true },
        verified: { type: Boolean, default: false },
        verificationToken: { type: String }
    },
    accountBalance: { type: Number, default: 0 },
    profile_url: {type: String, default: "unset"}
},
{
    strict: false,
});

createReservedAcct = new mongoose.Schema({
    clientEmail: { type: String, required: true},
    accountReference: { type: String, required: true, unique: true },
    accounts: [
        {
            bankCode: String,
            bankName: String,
            accountNumber: String,
            accountName: String,
        },
        {
            bankCode: String,
            bankName: String,
            accountNumber: String,
            accountName: String,
        }
    ]
})



module.exports = {
    userModel: mongoose.model('User', userSchema),
    createReservedAcct: mongoose.model('createReservedAcct', createReservedAcct)
};