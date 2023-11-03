import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Router, Switch } from "react-router-dom";
import His from './History';
import MyP from "./Pages/MyProfile/MyProfile";
import LogIn from "./Pages/Login/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import BCard from './AddLeave/Card';

class App3 extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<LogIn />} />
                        <Route path="/SignUp" element={<SignUp />} />
                        <Route path="/MyProfile/:name" element={<MyP />} />
                        <Route exact path="/History/:id/:name" element={<His/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default App3;