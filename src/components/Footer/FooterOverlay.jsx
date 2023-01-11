import React from "react";

import "./FooterOverlay.css";
import LogoImg from "../../assets/Img/اطلبها-لوجو@2x.png";
import { ReactComponent as Iconsnapchat } from "../../assets/Icons/snapchat.svg";
import { ReactComponent as Iconfacebook } from "../../assets/Icons/icon-24-facebook.svg";
import { ReactComponent as Icontwitter } from "../../assets/Icons/icon-24-twitter.svg";
import { ReactComponent as Iconinstagram } from "../../assets/Icons/icon-32-instagram.svg";
import { ReactComponent as Icontiktok } from "../../assets/Icons/icon-32-tiktok.svg";
const FooterOverlay = () => (
    <>
        <footer className="main-footer ">
            <div className="all">
                <div className="container flex-column flex-lg-row-reverse  align-items-center align-items-lg-start ">
                    <div className="box-left">
                        <a className="main-footer__logo" href="#0">
                            <img src={LogoImg} alt="" />
                        </a>
                        <ul>
                            <li>
                                <a href="#">
                                    <Iconfacebook />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Iconinstagram />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Icontwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Icontiktok />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <nav className="box-right">
                        <ul className="">
                            <li className=" text-center text-lg-end ">
                                <h4 className="me6-margin-bottom-sm me6-text-base@md">
                                    خدماتنا
                                </h4>
                                <ul className="text-center text-lg-end ">
                                    <li>
                                        <a
                                            href="#0"
                                            className="main-footer-link"
                                        >
                                            الاستيراد
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#0"
                                            className="main-footer-link"
                                        >
                                            الأكاديمية
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#0"
                                            className="main-footer-link"
                                        >
                                            الاستشارات
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="text-center text-lg-end ">
                                <h4 className="">معلومات</h4>
                                <ul className="text-center text-lg-end ">
                                    <li>
                                        <a
                                            href="#0"
                                            className="main-footer-link"
                                        >
                                            من نحن
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#0"
                                            className="main-footer-link"
                                        >
                                            الأسئلة الشائعة
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#0"
                                            className="main-footer-link"
                                        >
                                            سياسة الخصوصية
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="text-center text-lg-end ">
                                <h4 className="">حسابي</h4>
                                <ul className="text-center text-lg-end ">
                                    <li>
                                        <a
                                            href="#0"
                                            className="main-footer-link"
                                        >
                                            التسجيل كتاجر
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#0"
                                            className="main-footer-link"
                                        >
                                            التسجيل كمندوب
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="text-center text-lg-end ">
                                <h4 className="">خدمة العملاء</h4>
                                <ul className="text-center text-lg-end ">
                                    <li>
                                        <a
                                            href="#0"
                                            className="main-footer-link"
                                        >
                                            اتصل بنا
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    </>
);

export default FooterOverlay;
