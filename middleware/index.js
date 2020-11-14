const jwt = require('jsonwebtoken')
//middleware function
exports.requireSignIn = (req,res,next)=>{

    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1]
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
    }else{
        return res.status(500).json({message: 'Authorisation Required'})
    }
    next()
}

exports.userMiddleware = (req,res,next)=>{
    console.log(req.user)
    if(req.user.role !== 'user'){
        return res.status(400).json({message: 'User Access Denied'})
    }
    next()
}
exports.adminMiddleware = (req,res,next)=>{
    console.log(req.user)
    if(req.user.role !== 'admin'){
        return res.status(400).json({message: 'Admin Access Denied'})
    }
    next()
}