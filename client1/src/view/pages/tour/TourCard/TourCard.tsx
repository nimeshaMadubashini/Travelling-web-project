import React, {Component} from "react";
import {RiMapPinLine, RiStarFill} from 'react-icons/ri';
import '../TourCard/TourCard.css'
import {Link} from "react-router-dom";

interface tourCardProps {
    data: any;
}

export class TourCard extends Component<tourCardProps> {
    render() {
        const {data} = this.props;
        const image = require('../../../../images/tourCard/' + data.photo)

        return (
            <div className="flex gap-8">
            <div className="card flex-col w-[270px] h-[320px]   mt-8">
                <div>
                    <img src={image} alt=" "/>
                </div>
                <div className="w-full mt-4">
    <span className="float-left flex">
        <RiMapPinLine className='text-secondary font-semibold'/>
    <h5 className='text-[13px] text-black'>{data.city}</h5>
    </span>
                    <span className=" mr-4 float-right flex ">

        <RiStarFill className='text-secondary font-semibold '/><h5 className="text-black text-[13px]">{data.avgRating}</h5>
    </span>

                </div>
                <div className='flex '>
                    <Link to={`/tour/${data.id}`} className='mt-8 text-[14px] text-black font-semibold'>
                        {data.title}
                    </Link>
                </div>
                <div className="flex mt-4 gap-2 ml-1">
                <h5 className="text-secondary font-semibold text-[15px]">$ {data.price}</h5>
                    <span className="text-black text-[13px] ">/per person</span>

                    <button className='bg-amber-400 ml-[32px] w-24 h-8 text-white text-[13px]  rounded-[10px] '>
                        Book Now
                    </button>
                </div>
            </div>
            </div>
        );
    }
}