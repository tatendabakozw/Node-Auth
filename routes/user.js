const express = require('express')
const { register, signin, requireSignIn } = require('../controller/auth')
const router = express.Router()

router.post('/register', register)
router.post('/login',signin)

module.exports = router 