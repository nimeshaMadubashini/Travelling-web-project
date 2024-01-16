import {Component} from "react";
import weather from "../../../../../images/service/weather.png"
import '../../common/Service/Service.css'
interface ServiceProps{
    data:any
}
export class Service extends Component<ServiceProps> {
    render() {
        const {data}=this.props;
        const image=require('../../../../../images/service/'+data.img)

        return (
            <div className="service-box flex-col w-[273px] h-[189px] ml-5">
                <div className="mt-2 ml-4 bg-amber-500 w-10 h-10 rounded-3xl">
                    <img src={image} className='size-6  mx-auto mt-7' alt=""/>
                </div>

                <h5 className='mt-2 ml-4 font-semibold text-heading '>
                    {data.topic}
                </h5>
                <p className='ml-4 text-[15px]'>
                    {data.desc}
                </p>
            </div>)
    }
}