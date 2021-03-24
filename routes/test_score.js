const express = require("express");
const router = express.Router();
const {assignMarks,getMarks} = require('../controllers/test_score')

// assigned score to candidate based on test
router.post('/assignmarks/:candidateId',assignMarks);
// get your own marks detail
router.get('/candidate/getmarks/:candidateId',getMarks);
module.exports = router;