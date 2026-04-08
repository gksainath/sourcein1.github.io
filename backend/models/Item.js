const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  genderTag: { type: String, default: 'All' },
  listingType: { type: String, enum: ['rent', 'sell'], required: true },
  price: { type: Number, required: true },
  availability: { type: String, required: true },
  images: [{ type: String }],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['Available', 'Rented', 'Sold'], default: 'Available' },
  rating: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  demandBadge: { type: String, default: '' } // e.g., 'High Demand', 'Special'
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
