const tourCard = require('../model/tourCard');
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
    }
}
module.exports=tourCardController