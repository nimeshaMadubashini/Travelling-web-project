var express = require('express');
var router = express.Router();
const{getAllTourCard,saveTourCard}=require('../controller/tourCardController')

/* GET users listing. */
router.get('/allTourCard',getAllTourCard)
router.post('/saveTourCard',saveTourCard)
module.exports = router;
