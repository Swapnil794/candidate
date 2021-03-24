require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");


const candidateRoute = require("./routes/candidate");
const test_scoreRoute = require("./routes/test_score");
const highestMarks   = require("./routes/highestScoreCandidate")
const averageMarks   = require("./routes/averageHighestMarks")



// DB Connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}).then(()=>{
    console.log(`CONNECTED TO DATABASE`);
});

// MiddleWares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Routers
app.use('/api',candidateRoute);
app.use('/api',test_scoreRoute);
app.use('/api',highestMarks);
app.use('/api',averageMarks);

// port info 
const port =  process.env.PORT ||  2000;
// starting server 
app.listen(port,()=>{
    console.log(`app is runing on ${port}`);
})