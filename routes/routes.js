const express = require("express")
const router = express.Router();

const createfile = require("../middleware/create");
const readfile = require("../middleware/read");
const updatefile = require("../middleware/update");
const deletefile = require("../middleware/delete");


router.post('/create',createfile.createdata);
router.get('/read',readfile.readdata);
router.put('/update/:id',updatefile.updatedata);
router.delete('/delete/:id',deletefile.deletedata);


module.exports = router;