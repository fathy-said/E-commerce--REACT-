import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LogoHeader } from "../../index";
import { ReactComponent as Svgarrwos } from "../../../assets/Icons/icon-30-arrwos back1.svg";
import { ReactComponent as SvgComponent } from "../../../assets/Icons/Component 59 – 11.svg";
import "./RegisterMerchantBox.css";
const RegisterMerchantBox = () => {
    let navigate = useNavigate();
    let location = useLocation();
    if (location.pathname === "/registerMerchant") {
        document.querySelector("body").style.overflow = "hidden";
    } else {
        document.querySelector("body").style.overflow = "auto";
    }
    return (
        <>
            <div className="registerMerchant-box" dir="ltr">
                <div className="all-content" dir="rtl">
                    <div className="box-container-form">
                        <LogoHeader />
                        <h2>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Sit porro voluptatibus dolorem iure molestias
                            cupiditate, aliquid sequi accusamus, corporis
                            aliquam voluptatum culpa dolorum, quaerat
                            consectetur facere veniam! Voluptatum, ipsam
                            consectetur!
                        </h2>
                    </div>

                    <div className="box-form-banner">
                        <h5
                            onClick={() => {
                                document.querySelector("body").style.overflow =
                                    "auto";
                                navigate("/");
                            }}
                        >
                            <span>
                                <Svgarrwos />
                            </span>
                            الرئيسية
                        </h5>
                        <div className="info-svg">
                            <SvgComponent />
                        </div>
                        <div className="text">
                            <h1>منصة اطلبها</h1>
                            <h2>معنى جديد للتجارة الإلكترونية</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterMerchantBox;
