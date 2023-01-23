import React, { useEffect, useState } from "react";
import { useScrollYPosition } from "react-use-scroll-position"
import "./FooterOverlay.css";
import LogoImg from "../../assets/Img/logo png.png";
import { ReactComponent as Iconsnapchat } from "../../assets/Icons/snapchat.svg";
import { ReactComponent as Iconfacebook } from "../../assets/Icons/icon-24-facebook.svg";
import { ReactComponent as Icontwitter } from "../../assets/Icons/icon-24-twitter.svg";
import { ReactComponent as Iconinstagram } from "../../assets/Icons/icon-32-instagram.svg";
import { ReactComponent as Icontiktok } from "../../assets/Icons/icon-32-tiktok.svg";
import { Link } from "react-router-dom";
import { HiChevronDoubleLeft } from 'react-icons/hi';

const FooterOverlay = () => {
    let scrolly = useScrollYPosition();
    const [showup, setShowup] = useState(false);
    useEffect(() => {
        if (scrolly >= 500) {
            setShowup(true)
        }
        else {
            setShowup(false)

        }
    }, [scrolly]);
    return (
        <>
            <footer className="main-footer">
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
                                            <Link to={'/policyUse'} className="main-footer-link" onClick={() => {


                                                window.scroll(0, 0)
                                            }}>
                                                سياسة الخصوصية
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="text-center text-lg-end ">
                                    <h4 className="">حسابي</h4>
                                    <ul className="text-center text-lg-end ">
                                        <li>
                                            <Link to={'/register/merchant'} className="main-footer-link">


                                                التسجيل كتاجر

                                            </Link>
                                        </li>

                                        <li >
                                            <Link to={'/register/represented'} className="main-footer-link">


                                                التسجيل كمندوب
                                            </Link>

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
                <div className={showup === true ? "go-up show " : "go-up"} onClick={() => {
                    window.scroll(0, 0)


                }}>
                    <span>
                        <HiChevronDoubleLeft />
                    </span>
                </div>
            </footer>
        </>
    )
};

export default FooterOverlay
