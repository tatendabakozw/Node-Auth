const express = require('express')
const { register, signin } = require('../../controller/admin/auth')
const router = express.Router()

router.post('/admin/register', register)
router.post('/admin/login',signin)


module.exports = router 