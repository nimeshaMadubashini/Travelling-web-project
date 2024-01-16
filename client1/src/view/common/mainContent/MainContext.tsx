import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/home/Home";
import {About} from "../../pages/about/About";
import {Tour} from "../../pages/tour/Tour";

export class MainContext extends Component {
    render() {
        return (
            <div className="">

                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/tour" Component={Tour}></Route>

                </Routes>
            </div>
        );
    }
}