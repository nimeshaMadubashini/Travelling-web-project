import {Component} from "react";
import news from '../../../images/newsLetter.png'

export class NewsLetter extends Component {
    render() {
        return (
            <div className='w-full h-[17rem] bg-[#cae5f4] flex gap-28'>
                <div className='flex-col mt-4 ml-32 w-[28rem] '>
                    <p className='text-3xl text-heading font-semibold'>
                        Subscribe now to get useful travelling information
                    </p>
                    <div className='h-10 bg-white  w-full rounded mt-3'>
                        <input type='email' placeholder='Enter Your Email'/>
                        <button className='bg-amber-400 rounded text-white w-24 h-8 ml-36 mt-1'>
                            Subscribe
                        </button>

                    </div>
                    <p className='mt-3'>A journey of thousand miles begin with a single step.</p>

                </div>
                <div className='flex'>
                    <img src={news} alt=''/>
                </div >

            </div>
        );
    }
}