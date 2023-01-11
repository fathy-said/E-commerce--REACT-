import React from "react";
import { BlogHero, OwnerBox } from "../../index";
import "./BlogBox.css";
import IMgTop from "../../../assets/Img/image blog1.png";
import ImgOwner from "../../../assets/Img/persona2.png";

const BlogBox = () => {
    let changeActiveMenu = (e) => {
        e.currentTarget.parentElement
            .querySelector(".active")
            .classList.remove("active");
        e.currentTarget.classList.add("active");
    };
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
                                }}
                            >
                                الكل
                            </li>
                            <li
                                className="bt-main"
                                onClick={(e) => {
                                    changeActiveMenu(e);
                                }}
                            >
                                التجارة الالكترونية
                            </li>
                            <li
                                className="bt-main"
                                onClick={(e) => {
                                    changeActiveMenu(e);
                                }}
                            >
                                التسويق الرقمي
                            </li>
                            <li
                                className="bt-main"
                                onClick={(e) => {
                                    changeActiveMenu(e);
                                }}
                            >
                                إدارة الأسواق
                            </li>
                        </ul>
                    </div>
                    <div className="content-blog">
                        <div className="box-top flex-column flex-lg-row align-items-center align-items-lg-start">
                            <div className="box-img">
                                <img src={IMgTop} alt="" />
                            </div>
                            <div className="box-left">
                                <h5>التجارة الإلكترونية</h5>
                                <h2>
                                    كيف تقوم بإنشاء متجرك الإلكتروني وإدارة
                                    المنتجات باحترافية عالية
                                </h2>
                                <p>
                                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                                    المساحة، لقد تم توليد هذا النص من مولد النص
                                    العربى، حيث يمكنك أن تولد مثل هذا النص أو
                                    العديد من النصوص الأخرى إضافة إلى زيادة عدد
                                    الحروف التى يولدها هذا النص هو مثال لنص يمكن
                                    أن يستبدل في نفس المساحة، لقد تم توليد هذا
                                    النص من مولد النص العربى، حيث يمكنك أن تولد
                                    مثل هذا النص
                                </p>
                                <OwnerBox
                                    NameOwner={"منال محمد"}
                                    DateOwner={"Nov 11, 2022"}
                                    ImgOwner={ImgOwner}
                                />
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="box">
                                <div className="order">
                                    <div className="box-img">
                                        <img src={IMgTop} alt="" />
                                    </div>
                                    <h6>sssssss</h6>
                                    <h4>
                                        استهداف العملاء من خلال منصات التواصل
                                        الاجتماعي
                                    </h4>
                                    <p>
                                        هذا النص هو مثال لنص يمكن أن يستبدل في
                                        نفس المساحة، لقد تم توليد هذا النص من
                                        مولد النص العربى، حيث يمكنك أن تولد مثل
                                        هذا النص أو العديد من النصوص الأخرى
                                    </p>
                                    <OwnerBox
                                        NameOwner={"منال محمد"}
                                        DateOwner={"Nov 11, 2022"}
                                        ImgOwner={ImgOwner}
                                    />
                                </div>
                            </div>
                            <div className="box">
                                <div className="order">
                                    <div className="box-img">
                                        <img src={IMgTop} alt="" />
                                    </div>
                                    <h6>sssssss</h6>
                                    <h4>
                                        استهداف العملاء من خلال منصات التواصل
                                        الاجتماعي
                                    </h4>
                                    <p>
                                        هذا النص هو مثال لنص يمكن أن يستبدل في
                                        نفس المساحة، لقد تم توليد هذا النص من
                                        مولد النص العربى، حيث يمكنك أن تولد مثل
                                        هذا النص أو العديد من النصوص الأخرى
                                    </p>
                                    <OwnerBox
                                        NameOwner={"منال محمد"}
                                        DateOwner={"Nov 11, 2022"}
                                        ImgOwner={ImgOwner}
                                    />
                                </div>
                            </div>
                            <div className="box">
                                <div className="order">
                                    <div className="box-img">
                                        <img src={IMgTop} alt="" />
                                    </div>
                                    <h6>sssssss</h6>
                                    <h4>
                                        استهداف العملاء من خلال منصات التواصل
                                        الاجتماعي
                                    </h4>
                                    <p>
                                        هذا النص هو مثال لنص يمكن أن يستبدل في
                                        نفس المساحة، لقد تم توليد هذا النص من
                                        مولد النص العربى، حيث يمكنك أن تولد مثل
                                        هذا النص أو العديد من النصوص الأخرى
                                    </p>
                                    <OwnerBox
                                        NameOwner={"منال محمد"}
                                        DateOwner={"Nov 11, 2022"}
                                        ImgOwner={ImgOwner}
                                    />
                                </div>
                            </div>
                            <div className="box">
                                <div className="order">
                                    <div className="box-img">
                                        <img src={IMgTop} alt="" />
                                    </div>
                                    <h6>sssssss</h6>
                                    <h4>
                                        استهداف العملاء من خلال منصات التواصل
                                        الاجتماعي
                                    </h4>
                                    <p>
                                        هذا النص هو مثال لنص يمكن أن يستبدل في
                                        نفس المساحة، لقد تم توليد هذا النص من
                                        مولد النص العربى، حيث يمكنك أن تولد مثل
                                        هذا النص أو العديد من النصوص الأخرى
                                    </p>
                                    <OwnerBox
                                        NameOwner={"منال محمد"}
                                        DateOwner={"Nov 11, 2022"}
                                        ImgOwner={ImgOwner}
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="bt-main">عرض المزيد</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogBox;
