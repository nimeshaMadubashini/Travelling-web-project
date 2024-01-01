import { Component } from "react";
import logo from '../../../images/TRAVEL-removebg-preview.png'
import { RiFacebookCircleLine,RiInstagramLine,RiYoutubeLine, RiWhatsappLine  } from "react-icons/ri";
import {Link} from "react-router-dom";

export class Footer extends Component {
    render() {
        return (
            /*p-4
            bg-gradient-to-br from-blue-400 to-yellow-200*/
            <div className="h-[17rem] w-full flex gap-[5rem]  ">
                <div className='flex-col ml-32 mt-10 w-[18rem]'>
                    <img className="h-[39px]" src={logo}/>
                     <p className='mt-3'>Start your journey, join with us and we will show you the right way</p>
                    <div className='flex gap-4 mt-3'>
                        <RiFacebookCircleLine />
                        <RiInstagramLine />
                        <RiYoutubeLine />
                        <RiWhatsappLine/>
                    </div>
                </div>
                <div className='flex-col mt-10 '>
                    <h5 className='font-semibold'>Discover</h5>
                    <ul className="text-[14px]  ">
                        <li className="mt-5">
                            <Link to="/">Home</Link>
                        </li>
                        <li className=" mt-5  ">
                            <Link to="/about">About</Link>

                        </li>
                        <li className=" mt-5 ">
                            <Link to="/tour">Tour</Link>

                        </li>
                    </ul>
                </div>
                <div className='flex-col mt-10 '>
                    <h5 className='font-semibold'>Quick Link</h5>
                    <ul className="text-[14px]  ">
                        <li className="mt-5">
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li className=" mt-5  ">
                            <Link to="/login">Login</Link>

                        </li>
                        <li className=" mt-5 ">
                            <Link to="/register">Register</Link>

                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}