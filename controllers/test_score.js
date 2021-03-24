const  Test_score = require("../model/test_score");


exports.assignMarks = (req,res) =>{
    const Marks = new Test_score(req.body)
    Marks['totalMarks']=Marks['firstRoundNumber']+Marks['secondRoundNumber']+Marks['thirdRoundNumber'];
    Marks['candidate'] = req.params.candidateId;
    console.log("9002",Marks);
    Marks.save((err,marks)=>{
        console.log("9003",marks);
        if(err){
            return res.status(400).json({
                err :"not able to assign marks"
            })
        }
        res.json({message:"marks assign sucessfully",marks});
    })
}

exports.getMarks = (req,res) =>{
    Test_score.findOne({
    candidate:req.params.candidateId}).populate({path:'candidate',select:'name'})
    .exec((err,marks)=>{
        if(err){
            return res.status(400).json({
                err :"marsk detail not found"
            })
        }
        res.json(marks);
    })
}