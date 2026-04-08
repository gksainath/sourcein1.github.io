const Item = require('../models/Item');

const getItems = async (req, res) => {
  try {
    const { category, genderTag } = req.query;
    let filter = { status: 'Available' };
    
    if (category && category !== 'All') {
      filter.category = category;
    }
    if (genderTag && genderTag !== 'All') {
      filter.genderTag = genderTag;
    }

    const items = await Item.find(filter).populate('owner', 'name');
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('owner', 'name college phone email year branch');
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createItem = async (req, res) => {
  try {
    const { name, description, category, genderTag, listingType, price, availability, images, owner, demandBadge } = req.body;
    
    const item = new Item({
      name,
      description,
      category,
      genderTag,
      listingType,
      price,
      availability,
      images,
      owner,
      demandBadge
    });

    const createdItem = await item.save();
    res.status(201).json(createdItem);
  } catch (error) {
    res.status(400).json({ message: 'Invalid item data' });
  }
};

module.exports = { getItems, getItemById, createItem };
