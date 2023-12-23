import {Component} from "react";
import {RiMapPinLine, RiMapPinTimeLine, RiUser2Line } from 'react-icons/ri';

import { AiOutlineSearch } from 'react-icons/ai';

import "../SearchBar/SearchBar.css"

export class SearchBar extends Component {
    render() {
        return (
            <div className='search_ber mt-20 justify-center ml-20  w-max h-1/2 rounded-5xl '>
                <form className="flex items-center gap-4">
                    <div className='flex gap-3'>
               <span>
                   <RiMapPinLine className="text-secondary mt-2 size-6"/>
                   </span>
                        <div>
                            <h6 className='text-heading text-[15px] font-semibold'>
                                Location
                            </h6>
                            <input className=' text-[14px]' type="text" placeholder="Where are you going"/>
                        </div>

                    </div>
                    <div className='flex gap-3'>
               <span>
                   <RiMapPinTimeLine className="text-secondary mt-2 size-6"/>

              </span>
                        <div>
                            <h6 className='text-heading text-[15px] font-semibold'>                                Distance
                            </h6>
                            <input className=' text-[14px]' type="number" placeholder="Distance K/M"/>
                        </div>

                    </div>
                    <div className=' flex gap-3'>
               <span>
 <RiUser2Line className="text-secondary mt-2 size-6"/>
              </span>
                        <div>
                            <h6  className='text-heading text-[15px] font-semibold'>                                Max People
                            </h6>
                            <input className=' text-[14px]'  type="number"
                                   placeholder="0"/>
                        </div>

                    </div>
                    <div className='w-10 h-10  '>
                        <button className='w-10 h-10 bg-amber-500 rounded-[10px]  text-white'>
                            <AiOutlineSearch className="mt-1 ml-2 size-6" />
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}