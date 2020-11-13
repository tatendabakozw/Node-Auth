const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        trim: true
    },
    lastname:{
        type: String,
        required: true,
        trim: true
    },
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
    },
    hashpassword:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    contactnumber:{
        type: String,
    },
    profilepicture:{
        type: String
    }
},{
    timestamps: true
})

userSchema.virtual('password')
.set(function(password){
    this.hashpassword = bcrypt.hashSync(password, 10);
})

userSchema.virtual('fullname')
.get(function(){
    return `${this.firstname} ${this.lastname }`
})

userSchema.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password, this.hashpassword)
    }
}

module.exports = mongoose.model('User', userSchema)