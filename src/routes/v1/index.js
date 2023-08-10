const express = require('express');

const {InfoController, homeController} = require('../../controllers');


const router  = express.Router();

// router.get('/info', (req, res)=>{
//     return res.json({msg: "ok"});
// });
router.get('/info', InfoController.info);


module.exports = router;