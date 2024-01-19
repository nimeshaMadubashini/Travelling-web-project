var express = require('express');
var router = express.Router();
const{getAllTourCard,saveTourCard,getTour}=require('../controller/tourCardController')

/* GET users listing. */
router.get('/allTourCard',getAllTourCard)
router.post('/saveTourCard',saveTourCard)
router.get('/find/:id',getTour)
module.exports = router;
