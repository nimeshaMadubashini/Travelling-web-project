import {Component} from "react";
import logo from '../../../images/TRAVEL-removebg-preview.png'
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        /*p-2 bg-blue-300
            bg-gradient-to-r
            from-blue-200 to-blue-700to-red-100
            via-pink-500*/
        return (
            <div className=" p-1.4 bg-white flex justify-evenly items-center">
                {/*======logo statr=======*/}
                <div>
                    <img className="h-[52px]  " src={logo} alt=""/>

                </div>
                {/*======logo end=======*/}

                {/*=====menu start=======*/}
                <div>
                    <ul className="flex gap-10 text-black font-semibold ">
                        <li className="ilnine-block   ">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="inline-block   ">
                            <Link to="/about">About</Link>

                        </li>
                        <li className="inline-block  ">
                            <Link to="/tour">Tour</Link>
                        </li>
                    </ul>

                </div>
                {/*=====menu end=======*/}
                {/*=====menu button start=======*/}
                <div className="flex justify-end gap-5">
                    <button className="secondary__btn">

                        <Link to="/login">login</Link>

                    </button>
                    <button className="primary__btn" onClick={this.onButtonClick}>
                        <a>register</a>
                    </button>
                </div>
                {/*=====menu button end=======*/}

            </div>
        );

    }

    onButtonClick = (): void => {
        alert("Button Clicked")
    }
}