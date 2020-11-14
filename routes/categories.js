const express = require('express')
const router = express.Router()
const { addCategory, getCategories } = require('../controller/category')
const { requireSignIn, adminMiddleware } = require('../middleware')

router.post('/category/create',requireSignIn,addCategory)
router.get('/category/getcategory', getCategories)

module.exports = router