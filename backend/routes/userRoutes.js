const express = require('express')
const router = express.Router()
const { getUser, loginUser, registerUser } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(registerUser)
router.route('/login').post(loginUser)
router.route('/me').get(protect, getUser)

module.exports = router