import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components";
import { Home } from "./index";
const AllPages = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AllPages;
