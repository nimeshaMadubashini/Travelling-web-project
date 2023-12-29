import {Component} from "react"
import gallery1 from "../../../../../images/gallery/gallery1.png"
import gallery2 from "../../../../../images/gallery/gallery2.png"
import gallery3 from "../../../../../images/gallery/gallery3.png"
import gallery4 from "../../../../../images/gallery/gallery4.png"
import gallery5 from "../../../../../images/gallery/gallery5.png"
import gallery6 from "../../../../../images/gallery/gallery6.png"
import gallery7 from "../../../../../images/gallery/galley.jpg"
import gallery8 from "../../../../../images/gallery/gallery12.jpg"
import gallery9 from "../../../../../images/gallery/gallery13.jpg"



export class Gallery extends Component {
    render() {
        return (
            <div className='w-full grid grid-cols-4 grid-rows-2   gap-2'>
                <div className='bg-cover bg-center row-span-2 mt-20'>
                    <img src={gallery6} className='rounded-2xl'/>
                    <img src={gallery8} className='rounded-2xl mt-2 h-[300px]'/>


                </div>
                <div className='bg-cover col-span-2 mt-10'>
                    <img src={gallery7} className='rounded-2xl'/>
                </div>
                <div className='bg-cover'>
                    <img src={gallery5} className='rounded-2xl'/>
                </div>
                <div className='bg-cover'>
                    <img src={gallery1} className='rounded-2xl '/>
                </div>
                <div className='bg-cover col-span-2 '>
                    <img src={gallery9} className='rounded-2xl h-[395px]'/>

                </div>




            </div>
        );
    }
}