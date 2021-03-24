var express = require("express");
var router = express.Router();
const { averageMarks} = require("../controllers/averageHighestMark")

router.get('/candidate/averagemarksperround',averageMarks);

module.exports = router;
