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

let Header = () => (
    <>
        <div className="header">
            <div className="container">
                <Navbar expand="lg">
                    <Navbar.Brand href="#">اطلبها</Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll">
                        <FiMenu />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex">
                            <button>
                                <AiOutlineSearch />
                            </button>
                            <Form.Control
                                type="search"
                                placeholder="ادخل كلمه البحث"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            <Nav.Link href="#action1">الرئيسية</Nav.Link>
                            <Nav.Link href="#action2">السوق</Nav.Link>
                            <Nav.Link href="#action3">المدونة</Nav.Link>
                            <Nav.Link href="#action4">كيف أبدأ ؟</Nav.Link>
                            <Nav.Link href="#action5">التسجيل</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    </>
);

export default Header;
