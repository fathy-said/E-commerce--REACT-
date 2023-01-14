import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LogoHeader } from "../../index";
import { ReactComponent as SvgComponent } from "../../../assets/Icons/Component 59 – 11.svg";
import { ReactComponent as SvgRepeat } from "../../../assets/Icons/Repeat.svg";
import "./VerificationBox.css";
const VerificationBox = () => {
    let navigate = useNavigate();
    let location = useLocation();
    if (location.pathname === "/verificationPage") {
        document.querySelector("body").style.overflow = "hidden";
    }
    return (
        <>
            <div className="verificationBox-box" dir="ltr">
                <div className="all-content" dir="rtl">
                    <div className="box-container-form">
                        <LogoHeader />
                        <div className="all">
                            <h2>قمنا بإرسال كود التحقق لرقم جوالك</h2>
                            <div className="box">
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                                <input type="text" name="" id="" />
                            </div>
                            <button className="bt-main">تسجيل الدخول</button>
                            <h4>
                                <span>
                                    <SvgRepeat />
                                </span>
                                اعد ارسال الكود
                            </h4>
                        </div>
                    </div>

                    <div className="box-form-banner">
                        <div className="info-svg">
                            <h4>كود التحقق</h4>

                            <span>
                                <SvgComponent />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerificationBox;