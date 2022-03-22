const mongoConnect = require("../mongodb")

const createdata = async(req,res)=>{
    let data = await mongoConnect();
    let result = await data.insertOne(req.body)

    res.json({
        message: result
    })

    console.log(req.body)
}

module.exports = {createdata}