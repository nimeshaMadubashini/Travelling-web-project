import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from "./view/common/navbar/Navbar";
import {MainContext} from "./view/common/mainContent/MainContext";
import {Footer} from "./view/common/footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import {Login} from "./view/pages/login/Login";
function App() {
  return (
      /*  <h1 className="text-9xl font-bold underline">
          Hello world!
        </h1>*/
      //parent element ekk thiyenna ona<></>
      <>
        {/*          <div style={{backgroundColor:"yellow",padding:10,textAlign:"center"}}>Inline CSS Box</div>
<br/>
              <div className="text-red-900">External CSS Box</div>
          <br/>
          <div className="bg-red p-10 text-center">Tailwin CSS Utility Classes</div>*/}
          <BrowserRouter>
              <Routes>
                  <Route path="/*" Component={DefaultLayout} ></Route>
                  <Route path="/login" Component={Login} ></Route>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
