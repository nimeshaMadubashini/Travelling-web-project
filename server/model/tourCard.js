const mongoose = require('mongoose');
const TourCardModel = mongoose.Schema({
    "id": {
        type: Number,
        required: true,
        unique:true,
        index:true

    },
    "title": {
        type: String,
        required: true
    },
    "city": {
        type: String,
        required: true
    },
    "duration": {
        type: String,
        required: true
    },
    "maxGroupSize": {
        type: Number,
        required: true
    },
   "price": {
        type: Number,
        required: true
    },
    "desc": {
        type:String,
        required:true
    },
    "reviews": [
        {
            "name": String,
            "rating": Number
        }
    ],
    "avgRating":{
        type:Number,
        required:true
    } ,
    "photo": {
        type:String,
        required:true
    }
},
{versionKey:false}
);
const TourCard=mongoose.model('TourCard',TourCardModel);
module.exports=TourCard