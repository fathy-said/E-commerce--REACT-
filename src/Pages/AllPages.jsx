import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FooterOverlay, Header, NotFoundPage } from "../components";
import { Home } from "./index";
const AllPages = () => {
    return (
        <>
            <div className="w-100">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    <FooterOverlay />
                </BrowserRouter>
            </div>
        </>
    );
};

export default AllPages;
