const  express = require('express');
const router = express.Router();
const { authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} = require('../controllers/userController');
const {protect} = require('../middleware/autthMiddleware');

// router.get('/', () => {
//     console.log('Someone is trying to connect at users')
// })
router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

module.exports = router;
