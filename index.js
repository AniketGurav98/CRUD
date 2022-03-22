const express = require("express");
const app = express();





require('dotenv').config();

// put post
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const port = process.env.PORT;


// router
app.use('/', require("./routes/routes"))



app.listen(port,()=>{
    console.log("connected");
})