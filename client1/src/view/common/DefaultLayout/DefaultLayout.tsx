import {Component} from "react";
import {Footer} from "../footer/Footer";
import {MainContext} from "../mainContent/MainContext";
import {Navbar} from "../navbar/Navbar";

export class DefaultLayout extends Component{
    render() {
        return(
            <>
                <Navbar/>
                <MainContext/>
                <Footer/>
            </>
        )
    }
}