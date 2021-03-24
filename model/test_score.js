var mongoose = require("mongoose");
const { ObjectId } = require("mongoose");

const test_scoreScehma = new mongoose.Schema({
    firstRoundNumber:{
        type:Number,
        required:true,
        max:10
    },
    secondRoundNumber:{
        type:Number,
        required:true,
        max:10
    },
    thirdRoundNumber:{
        type:Number,
        required:true,
        max:10
    },
    totalMarks:{
        type:Number,
        max:30
    },
    candidate:{
        type:ObjectId,
        ref:"Candidate",
        required:true,
        unique:true
    }

},{timestamps:true})


module.exports = mongoose.model("Test_score",test_scoreScehma);