import {Component} from "react";
import  rev1 from '../../../../../images/Review/ava-3.jpg'
import  rev2 from '../../../../../images/Review/ava-2.jpg'

import  rev3 from '../../../../../images/Review/ava-1.jpg'


export class Reviews extends Component {
    render() {
        return (
            <div className='flex'>
                <div className='flex-col'>
                    <p>
                        kjadssajbjbfdjbfiduibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbckvbkjdbvjkbv
                    </p>
                    <div className='flex'>
                        <img src={rev2} alt=''/>
                        < div className='flex'>
                            <h5>Tesa Hardin</h5>
                            <h5>Customer</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}