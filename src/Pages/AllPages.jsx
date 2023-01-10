import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components";
import { Home } from "./index";
const AllPages = () => {
    return (
        <>
            <div className="w-100">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};

export default AllPages;
