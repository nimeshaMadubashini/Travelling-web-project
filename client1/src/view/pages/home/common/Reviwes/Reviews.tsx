import {Component} from "react";

interface reviewsProps {
    data:any
}

export class Reviews extends Component<reviewsProps> {
    render() {
        // @ts-ignore
        const {data} = this.props;
        const image = require('../../../../../images/Review/'+data.image)

        return (
            <div className='flex w-[320px] h-[300px] '>
                <div className='flex-col'>
                    <p className='text-[14px]'>{data.desc}</p>
                    <div className='flex'>
                        <img src={image} alt='' className="w-14 h-14 rounded"/>
                        < div className='flex-col'>
                            <h5>{data.name}</h5>
                            <h5>{data.position}</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}