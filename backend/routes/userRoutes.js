const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/current', protect, async (req, res) => {
    try {
      const user = await User.findById(req.user.userId).select('-password');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
