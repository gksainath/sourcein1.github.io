const Transaction = require('../models/Transaction');
const Item = require('../models/Item');

const createTransaction = async (req, res) => {
  try {
    const { item, buyer, seller, transactionType, durationHours, totalAmount, paymentMethod } = req.body;
    
    // Ensure the item is available
    const itemData = await Item.findById(item);
    if (!itemData || itemData.status !== 'Available') {
      return res.status(400).json({ message: 'Item is no longer available' });
    }

    const transaction = new Transaction({
      item,
      buyer,
      seller,
      transactionType,
      durationHours,
      totalAmount,
      paymentMethod,
      status: 'Completed' // Mock immediate completion
    });

    const createdTransaction = await transaction.save();
    
    // Mark the item as rented or sold
    itemData.status = transactionType === 'sell' ? 'Sold' : 'Rented';
    itemData.availability = 'Unavailable temporarily'; // Simple string update
    await itemData.save();

    res.status(201).json(createdTransaction);
  } catch (error) {
    res.status(400).json({ message: 'Error processing transaction' });
  }
};

module.exports = { createTransaction };
