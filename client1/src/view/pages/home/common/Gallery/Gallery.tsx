import {Component} from "react"
import gallery1 from "../../../../../images/gallery/gallery1.png"
import gallery2 from "../../../../../images/gallery/gallery2.png"
import gallery3 from "../../../../../images/gallery/gallery-07.jpg"
import gallery4 from "../../../../../images/gallery/gallery-02.jpg"
import gallery5 from "../../../../../images/gallery/gallery6.png"
import gallery6 from "../../../../../images/gallery/galley8.png"
import gallery7 from "../../../../../images/gallery/galley.jpg"
import gallery8 from "../../../../../images/gallery/gallery12.jpg"
import gallery9 from "../../../../../images/gallery/gallery13.jpg"


export class Gallery extends Component {
    render() {
        return (
            <div className='w-full grid grid-cols-4 grid-rows-2   gap-2'>
                <div className='bg-cover bg-center  '>
                    <img src={gallery9} className='rounded-2xl  h-[310px] transition duration-3 hover:scale-gallery'/>


                </div>
                <div className='bg-cover bg-center row-span-2 '>
                    <img src={gallery6} className='rounded-2xl h-[409px] transition duration-3 hover:scale-gallery'/>
                    <img src={gallery8} className='rounded-2xl h-[179px] mt-2 transition duration-3 hover:scale-gallery'/>

                </div>
                <div className='bg-cover bg-center row-span-2 '>
                    <img src={gallery8} className='rounded-2xl h-[179px]  transition duration-3 hover:scale-gallery'/>
                    <img src={gallery5} className='rounded-2xl h-[409px] mt-2 transition duration-3 hover:scale-gallery'/>

                </div>
                <div className='bg-cover bg-center row-span-2 '>
                    <img src={gallery4} className='rounded-2xl h-[230px]  transition duration-3 hover:scale-gallery'/>
                    <img src={gallery3} className='rounded-2xl h-[390px] mt-2 transition duration-3 hover:scale-gallery'/>

                </div>
                <div className='bg-cover bg-center '>
                <img src={gallery7} className='rounded-2xl  h-[280px] transition duration-3 hover:scale-gallery'/>

            </div>





            </div>
        );
    }
}