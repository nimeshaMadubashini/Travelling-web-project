var express = require('express');
var router = express.Router();
const{getAllTourCard,saveTourCard,getTour,addReviews}=require('../controller/tourCardController')

/* GET users listing. */
router.get('/allTourCard',getAllTourCard)
router.post('/saveTourCard',saveTourCard)
router.get('/find/:id',getTour)
router.post('/addReviews/:id',addReviews)
module.exports = router;
