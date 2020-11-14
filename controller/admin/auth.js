const User = require('../../models/User')
const jwt = require('jsonwebtoken')

exports.register = (req,res)=>{
    User.findOne({email: req.body.email}).exec((err,user)=>{
        if(user) return res.status(400).json({
            message: 'Admin Already Exists'
        })
        const{firstname, lastname, email, password} = req.body
        const _user = new User({firstname, lastname, email, password, username: Math.random().toString(), role:'admin'})
        
        _user.save((err,data)=>{
            if(err){
                return  res.status(400).json({
                    message: 'Someething Went Wrong'
                })
            }
            if(data){
                return res.status(200).json({
                    message: 'Admin Account Created Succesfully'
                })
            }
        })
    }) 
}

exports.signin =(req,res)=>{
    User.findOne({email: req.body.email}).exec((err,user)=>{
        if(err) return res.status(400).json({err})
        if(user){

            if(user.authenticate(req.body.password) && user.role === 'admin'){
                const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
                const {_id, firstname, lastname, email, role, fullname} = user;
                res.status(200).json({
                    token,
                    user:{
                        _id, firstname, lastname, email, role, fullname
                    }
                })
            }else{
                return res.status(400).json({
                    message: 'Invalid Credentials'
                })
            }

        }else{
            return res.status(400).json({message: err.message})
        }
    })
}