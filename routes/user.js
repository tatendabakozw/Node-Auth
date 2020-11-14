const express = require('express')
const { register, signin } = require('../controller/auth')
const router = express.Router()
const { validateInput, isRequestValidated } = require('../validators/auth')

router.post('/register', register)

router.post('/login',signin)

module.exports = router 