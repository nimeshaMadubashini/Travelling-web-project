import {Component} from "react";
import {RiMapPinLine,RiStarFill} from 'react-icons/ri';
import '../TourCard/TourCard.css'
interface tourCardProps {
    data:any;
}
export class TourCard extends Component<tourCardProps> {
    render() {
        const {data}=this.props;
        const image=require('../../../../images/tourCard/'+data.photo)
        return (
            <div className="card flex-col w-[292px] h-[298px] ml-32 mt-8">
                <div>
                    <img src={image} alt=" "/>
                </div>
<div className="w-full mt-4">
    <span className="float-left flex">
        <RiMapPinLine className='text-secondary'/>
    <h5 className='text-[13px] text-black'>{data.city}</h5>
    </span>
    <span className=" mr-4 float-right flex ">

        <RiStarFill className='text-secondary'  /><h5 className="text-black text-[13px]">{data.avgRating}</h5>
    </span>

</div>
            </div>
        );
    }
}