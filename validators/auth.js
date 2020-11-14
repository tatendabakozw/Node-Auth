const { check, validationResult } = require("express-validator");

exports.validateInput =[
    check('firstname').notEmpty().withMessage('First Name is required'),
    check('lastname').notEmpty().withMessage('Last Name is required'),
    check('email').isEmail().withMessage('Write A Valid Email'),
    check('password').isLength({min: 6}).withMessage('Password Should Be greater than 6')
]

exports.isRequestValidated =(req,res,next) =>{
    const errors = validationResult(req)
    if(errors.array.length>0){
        return res.status(400).json({error: errors.array()[0].msg})
    }
    next()
}