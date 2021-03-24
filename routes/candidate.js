var express = require("express");
var router = express.Router();
const {check} = require('express-validator');
const {insertCandidate,getCandidate} = require('../controllers/candidate') 

// insert candidate
router.post('/insertcandidate',[
    check("name","name atlest 3 char").isLength({min:3}),
    check("email","must be an email type").isEmail(),
    check("rollNumber","roll must be a unique number").isNumeric()
],insertCandidate);

// get 
router.get('/getcandidate',[
    check("email","must be an email type").isEmail()
],getCandidate);

module.exports = router;