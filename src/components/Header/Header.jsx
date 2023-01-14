import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/Img/Logo-1.png";
// ============Icon================
import { ReactComponent as SearchIcon } from "../../assets/Icons/icon_24_search.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    let location = useLocation();

    if (
        location.pathname === "/registerMerchant" ||
        location.pathname === "/registerRepresentative" ||
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

    return (
        <>
            <div className="header">
                <div className="container">
                    <Navbar expand="lg">
                        <Navbar.Brand href="#">
                            <img src={Logo} alt="" srcset="" />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="navbarScroll">
                            <FiMenu />
                        </Navbar.Toggle>
                        <Navbar.Collapse id="navbarScroll">
                            <Form className="d-flex">
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
                                <Link to={"/"}>الرئيسية</Link>
                                <Link to={"/"}>السوق</Link>
                                <Link to={"/blog"}>المدونة</Link>
                                <Link to={"/start"}>كيف أبدأ</Link>
                                <Link to={"/registerMerchant"}>التسجيل</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </>
    );
};

export default Header;
