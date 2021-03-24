const test_score = require("../model/test_score");
exports.averageMarks= (req,res) =>{
    test_score.find()
    .exec((err,marks)=>{
        if(err){
            return res.status(400).json({
                error : "not able to get marks"
            })
        }

        const temp=marks.length;
        const responseData={
            'averageFirstRoundNumber':0,
            'averageSecondRoundNumber':0,
            'averageThirdRoundNumber':0,
        };
        console.log(temp);
        marks.forEach(element => {
            responseData['averageFirstRoundNumber']+=element['firstRoundNumber'];
            responseData['averageSecondRoundNumber']+=element['secondRoundNumber'];
            responseData['averageThirdRoundNumber']+=element['thirdRoundNumber'];
        });
        responseData['averageFirstRoundNumber']= responseData['averageFirstRoundNumber']/temp;
        responseData['averageSecondRoundNumber']= responseData['averageSecondRoundNumber']/temp;
        responseData['averageThirdRoundNumber']= responseData['averageThirdRoundNumber']/temp;
        console.log(responseData);
        return res.json({responseData})
    })
}
