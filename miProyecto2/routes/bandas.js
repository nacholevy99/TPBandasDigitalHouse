let express = require('express');
let router = express.Router();
let bandasCont = require("../controllerrs/bandasControllers");

router.get('/', bandasCont.index)
router.get('/id/:id', bandasCont.porId);



module.exports = router;