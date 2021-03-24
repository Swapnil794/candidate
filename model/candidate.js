var mongoose = require("mongoose");

var candidateScehma = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxlength:32,
        },
        email:{
            type:String,
            trim:true,
            required:true,
            unique:true
        },
        rollNumber:{
            type:Number,
            required:true,
            unique:[true,'roll number is all ready assigned to another']
        }
    },{timestamps:true}
)

module.exports = mongoose.model("Candidate",candidateScehma);