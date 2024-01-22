const tourCard = require('../model/tourCard');
const mongoose = require('mongoose');


const tourCardController={
    getAllTourCard:async function(req,res,next){
        try {
            const TourCardList = await tourCard.find();
            res.status(200).json(TourCardList)
        }catch (error) {
            console.log(error)
            res.status(500).json({error :'Something went wrong !'})
        }
    },
    saveTourCard:async function (req, res, next) {
        try {
            const TourCardDetail = req.body;
            const promise = await tourCard.create(TourCardDetail)
            res.status(200).json(promise)

        }catch (error) {
            console.log(error)
            res.status(500).json({error :'Something went wrong !'})
        }
    },
    getTour:async function (req, res, next) {
        try {
            const tourID = req.params.id;
            const tours = await tourCard.find({id: tourID});
            res.status(200).json(tours);
        } catch (error) {
            console.log(error)
            res.status(500).json({error: 'Something went wrong !'})
        }
    },
    addReviews:async function(req,res,next){
        const tourId=req.params.id;
        console.log(typeof tourId, tourId);


        const {name,rating}=req.body;
        try {
            const tour = await tourCard.findOne({ id: tourId });
            if(!tour){
                return res.status(404).json({error : 'Tour Not found'})
            }
            tour.reviews.push({name,rating});
            const totalRating = tour.reviews.reduce((sum, review) => sum + review.rating, 0);
            tour.avgRating = Number((totalRating / tour.reviews.length).toFixed(2));



            await tour.save();
            res.json(tour);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
module.exports=tourCardController