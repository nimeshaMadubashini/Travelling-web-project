import {Component} from "react";
import tourimg from '../../../images/t2.jpg'
import tourimg1 from '../../../images/t1.jpg'
import {SearchBar} from "../home/common/SearchBar/SearchBar";
import {TourCard} from "./TourCard/TourCard";
import {TourDetail} from "./TourDetail";
import {NewsLetter} from "../../common/NewsLetter/NewsLetter";


export class Tour extends Component {
    render() {
        return (
            <>
                <div className='mt-3'>
                <div className='flex w-full'>
                    <div className='relative w-1/2'>
                        <img src={tourimg} alt='' className='h-[250px] w-full' />
                        <div className='absolute top-0 right-0 w-full h-full flex items-center justify-end'>
                            <h2 className='text-black text-3xl mr-1 font-semibold'>All</h2>
                        </div>
                    </div>
                    <div className='relative w-1/2'>
                        <img src={tourimg1} alt='' className='h-[250px] w-full' />
                        <div className='absolute top-0 right-0 w-full h-full flex items-center justify-start'>
                            <h2 className='text-black text-3xl ml-1 font-semibold'>Tour</h2>
                        </div>
                    </div>



                </div>
                </div>
                <section>
                    <SearchBar />
                </section>
                <section className='pt-0 pb-[50px] '>
                    <TourDetail/>
                </section>
                <section className='pb-0'>
                    <NewsLetter/>

                </section>
            </>
        );
    }
}