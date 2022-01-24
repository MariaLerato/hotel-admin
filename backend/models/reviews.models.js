const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
    date:{type:Date, required:true},
    user_id:{type:String,required:true},
    text:{type:String,required:true}
},{
    timestamps:true
})
const Review = mongoose.model('Review',userSchema)

module.exports = Review