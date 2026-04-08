const User = require('../models/User');

const authUser = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email.endsWith('.edu')) {
      return res.status(400).json({ message: 'Only .edu emails are allowed' });
    }
    
    let user = await User.findOne({ email });
    if (!user) {
      // Mock auto-register since there's no real password flow requested
      const mockName = email.split('@')[0];
      user = await User.create({
        name: mockName,
        email,
        college: 'Campus',
        phone: '1234567890'
      });
    }
    
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      college: user.college
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getUserDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { authUser, getUserDashboard };
