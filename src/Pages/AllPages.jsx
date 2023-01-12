import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FooterOverlay, Header, NotFoundPage } from "../components";
import { Blog, BlogDetail, Home, Start } from "./index";
const AllPages = () => {
    return (
        <>
            <div className="w-100">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/start" element={<Start />} />
                        <Route
                            path="/detail/:type/:id"
                            element={<BlogDetail />}
                        />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    <FooterOverlay />
                </BrowserRouter>
            </div>
        </>
    );
};

export default AllPages;
