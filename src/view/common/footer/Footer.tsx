import { Component } from "react";
import logo from '../../../images/TRAVEL-removebg-preview.png'

export class Footer extends Component {
    render() {
        return (
            /*p-4
            bg-gradient-to-br from-blue-400 to-yellow-200*/
            <div className="p2 bg-[#444544] flex justify-center">
                <p className="text[10px] text-[#e6f0e6] pt-2 mr-3">Copyright @ 2023</p>
              <h1 className="text-2xl text-green-600 font-bold ">Organic <i className="text-white">Shop</i> </h1>
                <img className="h-10 w-10 " src={logo}/>
            </div>
        );
    }
}