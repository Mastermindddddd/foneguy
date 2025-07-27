const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  title: String,
  firstName: String,
  surname: String,
  contactNo: String,
  email: String,
  company: String,
  message: String,
  preferredCommunication: String,
  depositConfirmed: Boolean,
  paymentMethods: [String],
  preferredDebitDate: String,
  salaryDate: String,
  selfie: String, // Base64
  idPassport: String, // Base64
  communicationPreferences: String,
  joinRewards: String,
  consentGiven: String,
  paymentDeclaration: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);
