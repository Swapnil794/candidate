const Candidate = require("../model/candidate");
const test_score = require("../model/test_score");
exports.highestScore= (req,res) =>{
    test_score.find()
    .sort({totalMarks:-1}).limit(1).populate('candidate')
    .exec((err,marks)=>{
        if(err){
            return res.status(400).json({
                error : "not able to get highest marks"
            })
        }
        return res.json(marks)
    })
}
