import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BlogHero, OwnerBox } from "../../index";
import ImgCenterBanner from "../../../assets/Img/banner main blog.png";
import ImgPerssona from "../../../assets/Img/persona.png";
import ImgBlog1 from "../../../assets/Img/image blog2.png";
import ImgBlog2 from "../../../assets/Img/image blog13.png";
import "./DetailBlogBox.css";

import { ReactComponent as SvgBack } from "../../../assets/Icons/icon-30-arrwos back.svg";
const DetailBlogBox = () => {
    // let location = useLocation();

    let param = useParams();
    let navigate = useNavigate();
    let goUpWindow = () => {
        window.scroll(0, 0)
    }

    return (
        <>
            <div className="detail-blog p-main">
                <BlogHero />

                <div className="container">
                    <div className="all">
                        <div className="row ">
                            <div className="col-md-12 col-lg-3  col-xxl-2 ">
                                <div className="box-right">
                                    <ul>
                                        <span onClick={() => {
                                            goUpWindow()

                                            navigate("/")
                                        }}>
                                            <SvgBack />
                                        </span>
                                        <h6>الكل</h6>
                                        <li
                                            className={
                                                param.type === "trade"
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            التجارة الإلكترونية
                                        </li>
                                        <li
                                            className={
                                                param.type === "shop"
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            التسويق الرقمي
                                        </li>
                                        <li
                                            className={
                                                param.type === "stores"
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            إدارة الأسواق
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 col-xxl-8">
                                <div className="box-center">
                                    <div className="box-img">
                                        <img src={ImgCenterBanner} alt="" />
                                    </div>
                                    <h1>
                                        كيف تقوم بإنشاء متجرك الإلكتروني وإدارة
                                        المنتجات باحترافية عالية
                                    </h1>
                                    <h4>
                                        هذا النص هو مثال لنص يمكن أن يستبدل في
                                        نفس المساحة
                                    </h4>
                                    <p>
                                        لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                        أو العديد من النصوص الأخرى إضافة إلى
                                        زيادة عدد الحروف التى يولدها هذا النص هو
                                        مثال لنص يمكن أن يستبدل في نفس المساحة،
                                        لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                        لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                        أو العديد من النصوص الأخرى إضافة إلى
                                        زيادة عدد الحروف التى يولدها هذا النص هو
                                        مثال لنص يمكن أن يستبدل في نفس المساحة،
                                        لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                        لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                        أو العديد من النصوص الأخرى إضافة إلى
                                        زيادة عدد الحروف التى يولدها هذا النص هو
                                        مثال لنص يمكن أن يستبدل في نفس المساحة،
                                        لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                        لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                        أو العديد من النصوص الأخرى إضافة إلى
                                        زيادة عدد الحروف التى يولدها هذا النص هو
                                        مثال لنص يمكن أن يستبدل في نفس المساحة،
                                        لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                    </p>
                                    <div className="box-1 box">
                                        <div className="info">
                                            <h4>
                                                هذا النص هو مثال لنص يمكن أن
                                                يستبدل في نفس المساحة
                                            </h4>
                                            <p>
                                                هذا النص هو مثال لنص يمكن أن
                                                يستبدل في نفس المساحة لقد تم
                                                توليد هذا النص من مولد النص
                                                العربى، حيث يمكنك أن تولد مثل
                                                هذا النص أو العديد من النصوص
                                                الأخرى إضافة إلى زيادة عدد
                                                الحروف التى يولدها هذا النص هو
                                                مثال لنص يمكن أن يستبدل في نفس
                                                المساحة، لقد تم توليد هذا النص
                                                من مولد النص العربى، حيث يمكنك
                                            </p>
                                        </div>
                                        <div className="box-img">
                                            <img src={ImgBlog1} alt="" />
                                        </div>
                                    </div>
                                    <h6>
                                        المساحة، لقد تم توليد هذا النص من مولد
                                        النص العربى، حيث يمكنك أن تولد مثل هذا
                                        النص لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                        أو العديد من النصوص الأخرى إضافة إلى
                                        زيادة عدد الحروف التى يولدها هذا النص هو
                                        مثال لنص يمكن أن يستبدل في نفس المساحة،
                                        لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                        لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                        أو العديد من النصوص الأخرى إضافة إلى
                                        زيادة عدد الحروف التى يولدها هذا النص هو
                                        مثال لنص يمكن أن يستبدل في نفس المساحة،
                                        لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                    </h6>
                                    <div className="box-2 box">
                                        <div className="info">
                                            <h4>
                                                هذا النص هو مثال لنص يمكن أن
                                                يستبدل في نفس المساحة
                                            </h4>
                                            <p>
                                                هذا النص هو مثال لنص يمكن أن
                                                يستبدل في نفس المساحة لقد تم
                                                توليد هذا النص من مولد النص
                                                العربى، حيث يمكنك أن تولد مثل
                                                هذا النص أو العديد من النصوص
                                                الأخرى إضافة إلى زيادة عدد
                                                الحروف التى يولدها هذا النص هو
                                                مثال لنص يمكن أن يستبدل في نفس
                                                المساحة، لقد تم توليد هذا النص
                                                من مولد النص العربى، حيث يمكنك
                                            </p>
                                        </div>
                                        <div className="box-img">
                                            <img src={ImgBlog2} alt="" />
                                        </div>
                                    </div>
                                    <h6>
                                        المساحة، لقد تم توليد هذا النص من مولد
                                        النص العربى، حيث يمكنك أن تولد مثل هذا
                                        النص لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                        أو العديد من النصوص الأخرى إضافة إلى
                                        زيادة عدد الحروف التى يولدها هذا النص هو
                                        مثال لنص يمكن أن يستبدل في نفس المساحة،
                                        لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                        لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                        أو العديد من النصوص الأخرى إضافة إلى
                                        زيادة عدد الحروف التى يولدها هذا النص هو
                                        مثال لنص يمكن أن يستبدل في نفس المساحة،
                                        لقد تم توليد هذا النص من مولد النص
                                        العربى، حيث يمكنك أن تولد مثل هذا النص
                                    </h6>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-3 col-xxl-2">
                                <div className="box-left">
                                    <OwnerBox
                                        NameOwner={"منال محمد"}
                                        ImgOwner={ImgPerssona}
                                        DateOwner={"Nov 11, 2022"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailBlogBox;
