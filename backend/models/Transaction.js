const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  transactionType: { type: String, enum: ['rent', 'sell'], required: true },
  durationHours: { type: Number }, // Only applicable if rent
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Completed' }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
