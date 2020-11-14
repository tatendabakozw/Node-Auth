// const multer =require('multer')
const shortid = require('shortid')

exports.addProduct = (req,res) =>{
    res.status(200).json({file: req.file, body: req.body})
}