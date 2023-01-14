import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LogoHeader } from "../../index";
import { ReactComponent as SvgComponent } from "../../../assets/Icons/Component 59 – 11.svg";
import { ReactComponent as SvgKey } from "../../../assets/Icons/key.svg";
import "./SignInBox.css";
const SignInBox = () => {
    let navigate = useNavigate();
    let location = useLocation();

    return (
        <>
            <div className="sign-in-box" dir="ltr">
                <div className="all-content" dir="rtl">
                    <div className="box-container-form">
                        <LogoHeader />
                        <div className="all">
                            <h2>قم بتسجيل الدخول الى حسابك</h2>
                            <div className="box">
                                <div>
                                    <h5>الاسم</h5>
                                    <input
                                        type="text"
                                        placeholder="ادخل اسم المستخدم او البريد الالكتروني"
                                    />
                                </div>
                                <div>
                                    <h5>كلمة المرور</h5>
                                    <input type="password" />
                                </div>
                            </div>

                            <div className="top">
                                <div className="check">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <h6>تذكرني</h6>
                                </div>
                                <h5
                                    onClick={() => {
                                        navigate("/passwordBackPage");
                                    }}
                                >
                                    نسيت كلمة المرور ؟
                                </h5>
                            </div>
                            <button
                                className="bt-main"
                                // onClick={() => {
                                //     navigate("/sendPasswordPage");
                                // }}
                            >
                                تسجيل الدخول
                            </button>
                            <ul>
                                <li> ليس لديك حساب؟</li>
                                <li
                                    onClick={() => {
                                        navigate("/registerMerchant");
                                    }}
                                >
                                    أنشئ حساب
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="box-form-banner">
                        <span className="over-info">
                            <SvgComponent />
                        </span>
                        <div className="info-svg">
                            <h4>منصة اطلبها للتجارة الإلكترونية</h4>
                            <h1> مرحباً بعودتك</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignInBox;