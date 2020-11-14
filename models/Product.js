//using recursive appraoch to implement categories
const mongoose = require('mongoose')

const productSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type:String,
        required:true,
        unique: true
    },
    price:{
        type: Number,
        required: true
    },
    desription:{
        type:String,
        required: true,
        trim: true,

    },
    category:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Category'
    },
    offers:{
        type: Number,
    },
    productpictures:[
        {img: {type: String}}
    ],
    reviews:[
        {
            userId:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
            review: String
        }
    ],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    updatedAt:{
        type: Date
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)