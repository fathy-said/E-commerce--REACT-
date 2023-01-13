import React, { useState } from "react";
import { LogoHeader } from "../../index.js";
import "./PaymentBox.css";
import Form from "react-bootstrap/Form";

import { ImArrowRight } from "react-icons/im";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Svgpaypal } from "../../../assets/Icons/paypal.svg";
import { ReactComponent as Svgmada } from "../../../assets/Icons/mada.svg";
import { ReactComponent as SvgLink } from "../../../assets/Icons/link.svg";

const PaymentBox = () => {
    let [getPayment, setPayment] = useState("paypal");
    let navigate = useNavigate();
    let location = useLocation();

    if (location.pathname === "/paymentPage") {
        document.querySelector("body").style.overflow = "hidden";
    }
    return (
        <>
            <div className="payment-box" dir="ltr">
                <div className="content-all" dir="rtl">
                    <div className="container">
                        <LogoHeader />

                        <div className="title">
                            <span
                                onClick={() => {
                                    navigate(-1);
                                    document.querySelector(
                                        "body"
                                    ).style.overflow = "auto";
                                }}
                            >
                                <ImArrowRight />
                            </span>
                            <div>
                                <h3>تسجيل حساب جديد</h3>/<h5>الدفع</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="payment-content col-md-12 col-lg-11">
                                <div className="change-payment">
                                    <div className="all">
                                        <div className="box">
                                            <span>
                                                <Svgpaypal />
                                            </span>
                                            <div
                                                className={
                                                    getPayment === "paypal"
                                                        ? "form-check form-switch active"
                                                        : "form-check form-switch  "
                                                }
                                                onClick={(e) => {
                                                    if (
                                                        getPayment === "paypal"
                                                    ) {
                                                        setPayment("mada");
                                                    } else {
                                                        setPayment("paypal");
                                                    }
                                                }}
                                            >
                                                <input
                                                    className="form-check-input "
                                                    type="checkbox"
                                                    role="switch"
                                                    id="flexSwitchCheckChecked"
                                                />
                                            </div>
                                        </div>
                                        <div className="box">
                                            <span>
                                                <Svgmada />
                                            </span>
                                            <div
                                                className={
                                                    getPayment === "mada"
                                                        ? "form-check form-switch active"
                                                        : "form-check form-switch  "
                                                }
                                                onClick={(e) => {
                                                    if (getPayment === "mada") {
                                                        setPayment("paypal");
                                                    } else {
                                                        setPayment("mada");
                                                    }
                                                }}
                                            >
                                                <input
                                                    className="form-check-input "
                                                    type="checkbox"
                                                    role="switch"
                                                    id="flexSwitchCheckChecked"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <form
                                        action=""
                                        className={
                                            getPayment === "paypal"
                                                ? "form active"
                                                : "form"
                                        }
                                    >
                                        <div>
                                            <h6>ادخل الاسم</h6>
                                            <input type="text" />
                                        </div>
                                        <div>
                                            <h6>ايميل باي بال</h6>
                                            <input
                                                type="email"
                                                placeholder="sample@gmail.com"
                                            />
                                        </div>
                                        <button>دفع الان</button>
                                    </form>
                                    <form
                                        action=""
                                        className={
                                            getPayment === "mada"
                                                ? "form active"
                                                : "form"
                                        }
                                    >
                                        <div>
                                            <h6>اسم مالك الحساب</h6>
                                            <input type="text" />
                                        </div>

                                        <div>
                                            <h6>اختر البنك</h6>
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                            >
                                                <option selected>
                                                    اختر البنك المعتمد
                                                </option>
                                                <option value="1">
                                                    اختر البنك المعتمد
                                                </option>
                                                <option value="2">
                                                    اختر البنك المعتمد
                                                </option>
                                                <option value="3">
                                                    اختر البنك المعتمد
                                                </option>
                                            </select>
                                        </div>
                                        <div>
                                            <h6>رقم الحساب</h6>
                                            <input type="text" />
                                        </div>
                                        <div>
                                            <h6>IBAN</h6>
                                            <input type="text" />
                                        </div>
                                        <button>دفع الان</button>
                                    </form>
                                </div>

                                <ul>
                                    <li
                                        onClick={() => {
                                            navigate("/policyPayment");
                                            document.querySelector(
                                                "body"
                                            ).style.overflow = "auto";
                                        }}
                                    >
                                        سياسة الدفع
                                        <span>
                                            <SvgLink />
                                        </span>
                                    </li>
                                    <li
                                        onClick={() => {
                                            navigate("/policyUse");
                                            document.querySelector(
                                                "body"
                                            ).style.overflow = "auto";
                                        }}
                                    >
                                        سياسة الاستخدام
                                        <span>
                                            <SvgLink />
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentBox;
