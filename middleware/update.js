const mongoConnect = require('../mongodb')
const mongodb = require("mongodb");

const updatedata = async(req,res)=>{
    let data = await mongoConnect();
    let result = await data.updateOne(
        {_id: new mongodb.ObjectId(req.params.id) },
        {$set: req.body}
    )
    res.send("Result Updated Successfully")
}

module.exports = {updatedata}