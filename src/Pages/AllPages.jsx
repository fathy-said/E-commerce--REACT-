import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FooterOverlay, Header, NotFoundPage } from "../components";
import {
    Blog,
    BlogDetail,
    Home,
    PaymentPage,
    PolicyPayment,
    PolicyUse,
    Register,
    Start,
    VerificationPage,
    PasswordBackPage,
    SendPasswordPage,
    SignInPage,
    CreateYourStore,
    OpenControlPanel,
    PackagePage,
    CreateYourStorePayment,
} from "./index";
const AllPages = () => {
    return (
        <>
            <div className="w-100">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route
                            path="/detail/:id"
                            element={<BlogDetail />}
                        />
                        <Route path="/start" element={<Start />} />
                        <Route
                            path="/register/:user"
                            element={<Register />}
                        />
                        <Route path="/packagePage" element={<PackagePage />} />
                        <Route
                            path="/createYourStore"
                            element={<CreateYourStore />}
                        />
                        <Route
                            path="/openControlPanel"
                            element={<OpenControlPanel />}
                        />
                        <Route
                            path="/createYourStorePayment"
                            element={<CreateYourStorePayment />}
                        />
                        <Route path="/paymentPage" element={<PaymentPage />} />
                        <Route path="/policyUse" element={<PolicyUse />} />
                        <Route
                            path="/policyPayment"
                            element={<PolicyPayment />}
                        />

                        <Route path="/signInPage" element={<SignInPage />} />

                        <Route
                            path="/passwordBackPage"
                            element={<PasswordBackPage />}
                        />
                        <Route
                            path="/sendPasswordPage"
                            element={<SendPasswordPage />}
                        />

                        <Route
                            path="/verificationPage"
                            element={<VerificationPage />}
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
