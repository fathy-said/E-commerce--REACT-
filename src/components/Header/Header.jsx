import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
// import Logo from "../../assets/Img/Logo-1.png";
import { ReactComponent as Logo } from "../../assets/Icons/Logo.svg";

// ============Icon================
import { ReactComponent as SearchIcon } from "../../assets/Icons/icon_24_search.svg";
import { Link, useLocation, } from "react-router-dom";

const Header = () => {
    let location = useLocation();
    let [activeLink, setActiveLink] = useState(`التسجيل`);
    let [showForm, setShowForm] = useState(true);

    if (
        location.pathname === "/register/merchant" ||
        location.pathname === "/register/represented" ||
        location.pathname === "/sendPasswordPage" ||
        // location.pathname === "/registerRepresentative" ||
        location.pathname === "/paymentPage" ||
        location.pathname === "/signInPage" ||
        location.pathname === "/createYourStore" ||
        location.pathname === "/verificationPage" ||
        location.pathname === "/openControlPanel" ||
        location.pathname === "/createYourStorePayment" ||
        location.pathname === "/packagePage" ||
        location.pathname === "/passwordBackPage"
    ) {
        document.querySelector("body").style.overflow = "hidden";
    } else {
        document.querySelector("body").style.overflow = "auto";
    }

    useEffect(() => {
        if (location.pathname === "/") {
            setActiveLink("التسجيل");
        }
        if (
            document
                .querySelector(".header .navbar .navbar-collapse")
                .classList.contains("show")
        ) {
            document
                .querySelector(".header .navbar .show")
                .classList.remove("show");
            document
                .querySelector(".header .navbar button")
                .classList.add("collapsed");
        }



    }, [location.pathname]);
    useEffect(() => {

        if (location.pathname === "/" ||
            location.pathname === "/start" ||
            location.pathname === "/policyPayment" ||
            location.pathname === "/policyUse"
        ) {
            setShowForm(true)

        }

        else {
            setShowForm(false)
        }

    }, [location.pathname]);
    return (
        <>
            <div className="header">
                <div className="container">
                    <Navbar expand="lg">
                        <Navbar.Brand>
                            <Logo />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="navbarScroll">
                            <FiMenu />
                        </Navbar.Toggle>
                        <Navbar.Collapse id="navbarScroll">
                            <Form className={showForm === true ? "show" : ''}>
                                <button>
                                    {/* <AiOutlineSearch /> */}
                                    <SearchIcon />
                                </button>
                                <Form.Control
                                    type="search"
                                    placeholder="ادخل كلمه البحث"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>
                            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                                <Link
                                    to={"/"}
                                    onClick={() => setActiveLink(`التسجيل`)}
                                >
                                    الرئيسية
                                </Link>
                                <Link
                                    to={"hhh"}
                                    className={
                                        activeLink === "السوق" ? "active" : ""
                                    }
                                    onClick={() => setActiveLink(`السوق`)}
                                >
                                    السوق
                                </Link>
                                <Link
                                    to={"/blog"}
                                    className={
                                        activeLink === "المدونة" ? "active" : ""
                                    }
                                    onClick={() => setActiveLink(`المدونة`)}
                                >
                                    المدونة
                                </Link>
                                <Link
                                    to={"/start"}
                                    className={
                                        activeLink === "كيف أبدأ"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => setActiveLink(`كيف أبدأ`)}
                                >
                                    كيف أبدأ
                                </Link>
                                <Link
                                    to={"/register/merchant"}
                                    className={
                                        location.pathname === "/" ||
                                            activeLink === "التسجيل"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => setActiveLink(`التسجيل`)}
                                >
                                    التسجيل
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </>
    );
};

export default Header;
