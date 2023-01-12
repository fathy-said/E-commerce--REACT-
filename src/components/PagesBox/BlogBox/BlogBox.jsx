import React, { useEffect, useRef, useState } from "react";
import { BlogHero, LoadingBox, OwnerBox } from "../../index";
import "./BlogBox.css";
import IMgTop from "../../../assets/Img/image blog1.png";
import ImgOwner from "../../../assets/Img/persona2.png";
// =================redux======
import { useDispatch, useSelector } from "react-redux";
import { BlogThunk } from "../../../RTK/Thunk/BlogThunk";
import { blogDatatype } from "../../../RTK/Reducer/BlogReducer";
import { useNavigate } from "react-router-dom";
// =========================================================================
const BlogBox = () => {
    let [getTypeBlog, setTypeBlog] = useState("all");
    let dispatch = useDispatch();
    let { blogData, blogAllData, blogLoading } = useSelector(
        (state) => state.BlogReducer
    );
    const shouldData = useRef(true);
    useEffect(() => {
        if (shouldData.current) {
            dispatch(BlogThunk());
            // ===========
            shouldData.current = false;
        }
    }, []);
    useEffect(() => {
        dispatch(blogDatatype({ type: getTypeBlog }));
    }, [getTypeBlog]);
    // console.log(blogData);
    // ===============
    let changeActiveMenu = (e) => {
        e.currentTarget.parentElement
            .querySelector(".active")
            .classList.remove("active");
        e.currentTarget.classList.add("active");
    };
    let navigate = useNavigate();
    return (
        <>
            <div className="blog-box">
                <BlogHero />
                <div className="container">
                    <div className="header-blog">
                        <ul className=" justify-content-end justify-content-lg-center">
                            <li
                                className="bt-main active"
                                onClick={(e) => {
                                    changeActiveMenu(e);
                                    setTypeBlog("all");
                                }}
                            >
                                الكل
                            </li>
                            <li
                                className="bt-main"
                                onClick={(e) => {
                                    changeActiveMenu(e);
                                    setTypeBlog("trade");
                                }}
                            >
                                التجارة الالكترونية
                            </li>
                            <li
                                className="bt-main"
                                onClick={(e) => {
                                    changeActiveMenu(e);
                                    setTypeBlog("shop");
                                }}
                            >
                                التسويق الرقمي
                            </li>
                            <li
                                className="bt-main"
                                onClick={(e) => {
                                    changeActiveMenu(e);
                                    setTypeBlog("stores");
                                }}
                            >
                                إدارة الأسواق
                            </li>
                        </ul>
                    </div>

                    {blogLoading ? (
                        <LoadingBox />
                    ) : blogData.length ? (
                        <div className="content-blog ">
                            <div
                                id={blogData[0].id}
                                className="box-top flex-column flex-lg-row align-items-center align-items-lg-start"
                                onClick={() =>
                                    navigate(
                                        `/detail/${blogData[0].type}/${blogData[0].id}`
                                    )
                                }
                            >
                                <div className="box-img">
                                    <img src={blogData[0].ImgBlog} alt="" />
                                </div>
                                <div className="box-left">
                                    <h5>{blogData[0].name}</h5>
                                    <h2>{blogData[0].title}</h2>
                                    <p>{blogData[0].introduction}</p>
                                    <OwnerBox
                                        NameOwner={blogData[0].OwnerName}
                                        DateOwner={blogData[0].OwnerDate}
                                        ImgOwner={blogData[0].IMgOWner}
                                    />
                                </div>
                            </div>
                            <div className="box-body">
                                {blogData.map((el) => {
                                    return (
                                        <div
                                            className="box"
                                            id={el.id}
                                            key={el.id}
                                            onClick={() =>
                                                navigate(
                                                    `/detail/${el.type}/${el.id}`
                                                )
                                            }
                                        >
                                            <div className="order">
                                                <div className="box-img">
                                                    <img
                                                        src={el.ImgBlog}
                                                        alt=""
                                                    />
                                                </div>
                                                <h6>{el.name}</h6>
                                                <h4>{el.title}</h4>
                                                <p>{el.introduction}</p>
                                                <OwnerBox
                                                    NameOwner={el.OwnerName}
                                                    DateOwner={el.OwnerDate}
                                                    ImgOwner={el.IMgOWner}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <button className="bt-main">عرض المزيد</button>
                        </div>
                    ) : (
                        "لم يتم العثور على البيانات"
                    )}
                </div>
            </div>
        </>
    );
};

export default BlogBox;
