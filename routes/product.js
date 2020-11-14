const express = require('express')
const { addProduct } = require('../controller/product')
const router = express.Router()
const multer = require('multer')
// const { addCategory, getCategories } = require('../controller/category')
const { requireSignIn, adminMiddleware } = require('../middleware')
const Product = require('../models/Product')

const upload = multer({dest: 'uplaods/'})

router.post('/product/create',
    requireSignIn,
    upload.single('productpicture'),
     addProduct
     )
// router.get('/category/getcategory', getCategories)

module.exports = router