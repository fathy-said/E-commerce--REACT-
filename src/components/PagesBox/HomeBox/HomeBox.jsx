import React, { useEffect, useRef, useState } from "react";
import "./HomeBox.css";
// import FeaturesVideo from "../../../assets/Videos/video.mp4";
import {
    ProductSwiper,
    ReviewSwiper,
    PartnerSwiper,
    LoadingBox,
} from "../../index";
import { MainTitle } from "../../index";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
// import { Svghand } from "react-icons/tb";
import { IoCheckmarkSharp } from "react-icons/io5";

// ===============Data================
// ===============Icon================
import { ReactComponent as Svghand } from "../../../assets/Icons/icon-touch hand-36.svg";
import { ReactComponent as SvgVideo } from "../../../assets/Icons/ico - 24 - audiovisual - play_circle_outlined.svg";
import { ReactComponent as Svghappy } from "../../../assets/Icons/icon-38-happy emojy.svg";
import { ReactComponent as Svgemojy2 } from "../../../assets/Icons/icon-38-emojy2.svg";
import { ReactComponent as Svgemojy } from "../../../assets/Icons/icon-38-emojy.svg";
// ===============Img================
import featuresIMG from "../../../assets/Img/IMG_3541-removebg-preview.png";
import GroupIMG from "../../../assets/Img/Group 1432.png";
// ===============redux================
import { useDispatch, useSelector } from "react-redux";
import { productThunk } from "../../../RTK/Thunk/ProductThunk";
import { StoresThunk } from "../../../RTK/Thunk/StoresThunk";
import { VideoThunk } from "../../../RTK/Thunk/VideoThunk";
import { PackageThunk } from "../../../RTK/Thunk/PackageThunk";
import { ReviewThunk } from "../../../RTK/Thunk/ReviewThunk";
import { PartnersThunk } from "../../../RTK/Thunk/PartnersThunk";
import { useNavigate } from "react-router-dom";
const HomeBox = () => {
    let dispatch = useDispatch();
    const shouldData = useRef(true);
    let navigate = useNavigate();

    useEffect(() => {
        if (shouldData.current) {
            dispatch(productThunk());
            dispatch(StoresThunk());
            dispatch(VideoThunk());
            dispatch(PackageThunk());
            dispatch(ReviewThunk());
            dispatch(PartnersThunk());
            // ===========
            shouldData.current = false;
        }
    }, []);
    let [getTypePackage, setTypePackage] = useState(true);
    let { productData, productLoading } = useSelector(
        (state) => state.ProductReducer
    );
    let { storesData, storesLoading } = useSelector(
        (state) => state.StoresReducer
    );
    let { packageDataMonthly, packageDataYearly } = useSelector(
        (state) => state.PackageReducer
    );
    let { reviewData, reviewLoading } = useSelector(
        (state) => state.ReviewReducer
    );
    let { partnersData, partnersLoading } = useSelector(
        (state) => state.PartnersReducer
    );

    let { videoData } = useSelector((state) => state.VideoReducer);

    return (
        <>
            <div className="hero">
                <div className="container">
                    <h2>أهلاً بك في منصة اطلبها</h2>
                    <h3>انضم الان الى منصة التجارة الالكترونية الشاملة</h3>
                    <button
                        className="bt-main"
                        onClick={() => {
                            navigate("/registerMerchant");
                        }}
                    >
                        التسجيل
                    </button>
                </div>
            </div>
            {/* =========================== */}
            <div className="outstanding-products p-main">
                <div className="container">
                    <MainTitle text="المنتجات المتميزة" />
                    <div className="all">
                        {productLoading ? (
                            <LoadingBox />
                        ) : productData.length ? (
                            <ProductSwiper productSwiperData={productData} />
                        ) : (
                            <h2>لم يتم العثور على البيانات</h2>
                        )}
                    </div>
                </div>
            </div>
            {/* =========================== */}
            <div className="box-information p-main flex-column flex-md-row">
                <div className="box-right">
                    <div className="container">
                        <h4>باقات اشتراك متعددة</h4>
                    </div>
                </div>
                <div className="box-left">
                    <div className="container">
                        <h4> شركات شحن متعددة</h4>
                    </div>
                </div>
            </div>

            {/* =========================== */}
            <div className="stores-info p-main">
                <div className="container">
                    <div className="header flex-column flex-md-row gap-4 gap-md-3 ">
                        <MainTitle text={"المتاجر المتميزة"} />
                        <form action="">
                            <span>
                                <AiOutlineSearch />
                            </span>
                            <div className="all-select">
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                >
                                    <option selected>نوع النشاط</option>
                                    <option value="1">نوع</option>
                                    <option value="2">نوع</option>
                                    <option value="3">نوع</option>
                                </select>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                >
                                    <option selected>المدينة</option>
                                    <option value="1">نوع</option>
                                    <option value="2">نوع</option>
                                    <option value="3">نوع</option>
                                </select>
                            </div>
                            <button>تأكيد</button>
                        </form>
                    </div>
                    <div className="content-stores">
                        <div className="row">
                            {storesLoading ? (
                                <LoadingBox />
                            ) : storesData.length ? (
                                storesData.map((el, index) => {
                                    return (
                                        <div
                                            className=" container-box col-6  col-md-4 col-lg-3 col-xl-2 "
                                            key={index}
                                        >
                                            <div className="box">
                                                <img src={el.Img} alt="" />
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <h2>لم يتم العثور على البيانات</h2>
                            )}
                        </div>
                        <bdi>
                            عرض المزيد من المتاجر
                            <HiOutlineArrowNarrowLeft />
                        </bdi>
                    </div>
                </div>
            </div>
            {/* =========================== */}
            <div className="trade-info p-main">
                <div className="box">
                    <div className="container">
                        <h4>نحن بوابتك لعالم التجارة الإلكترونية</h4>
                        <h5>انشئ متجرك وتمتع بالتجربة المجانية</h5>
                        <button
                            className="bt-main"
                            onClick={() => {
                                navigate("/registerMerchant");
                            }}
                        >
                            التسجيل
                        </button>
                    </div>
                </div>
            </div>

            {/* =========================== */}
            <div className="out-features p-main">
                <div className="container ">
                    <MainTitle text={"لماذا اطلبها ؟"} />
                    <div className="all flex-column-reverse flex-lg-row">
                        <div className="box-right">
                            <ul>
                                <li>
                                    <Svghand />
                                    افتح متجرك بسهولة
                                </li>
                                <li>
                                    <Svghand />
                                    تجربة مجانية لتتعرف على خدماتنا
                                </li>
                                <li>
                                    <Svghand />
                                    خدمات إضافية مميزة لتساعدك في تسويق متجرك
                                </li>
                                <li>
                                    <Svghand />
                                    باقات احترافية وقوالب متعددة تناسب طبيعة
                                    نشاط متجرك
                                </li>
                            </ul>
                            <div className="box-img">
                                <img src={GroupIMG} alt="" />
                            </div>
                        </div>

                        <div className="box-left">
                            <video
                                controls
                                src={videoData !== null ? videoData : ""}
                                type="video/mp4"
                            >
                                {/* <source
                                    src={videoData !== null ? videoData : ""}
                                    type="video/mp4"
                                /> */}
                            </video>
                            <div className="box-img">
                                <img src={featuresIMG} alt="" />
                                <span
                                    onClick={(e) => {
                                        e.currentTarget.parentElement.classList.add(
                                            "not-active"
                                        );

                                        e.currentTarget.parentElement.parentElement
                                            .querySelector("video")
                                            .play();
                                    }}
                                >
                                    <SvgVideo />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================== */}

            <div className="our-package p-main">
                <div className="container">
                    <MainTitle text={"باقات اطلبها"} />
                    <div className="all">
                        <ul>
                            <li>سنوي/ 6 شهور</li>
                            <li>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span
                                        className="slider"
                                        onClick={() =>
                                            setTypePackage(!getTypePackage)
                                        }
                                    />
                                </label>
                            </li>
                        </ul>

                        {getTypePackage ? (
                            packageDataYearly !== null ? (
                                <div className="content-package ">
                                    <div className="box">
                                        <h3>
                                            التاجر المبتدأ
                                            <Svghappy />
                                        </h3>
                                        <h2>
                                            <span>
                                                {
                                                    packageDataYearly.startUp
                                                        .price
                                                }
                                            </span>
                                            <span>ر.س</span>
                                            <span>
                                                {packageDataYearly.type}
                                            </span>
                                        </h2>
                                        <ul>
                                            <li>
                                                <IoCheckmarkSharp />
                                                100منتج
                                            </li>
                                            <li>
                                                <IoCheckmarkSharp />
                                                10تصنيفات
                                            </li>
                                            <li>
                                                <IoCheckmarkSharp />
                                                دعم فني 24
                                            </li>
                                            <li className="not-active">
                                                <IoCheckmarkSharp />
                                                تجربة مجانية
                                            </li>
                                            <li className="not-active">
                                                <IoCheckmarkSharp />
                                                تجربة مجانية
                                            </li>
                                            <li className="not-active">
                                                <IoCheckmarkSharp />
                                                تخصيص القالب
                                            </li>
                                            <li className="not-active">
                                                <IoCheckmarkSharp />
                                                خدمات الاستشارة
                                            </li>
                                        </ul>

                                        <button>ابدأ الآن</button>
                                    </div>
                                    <div className="box">
                                        <h3>
                                            العلامة التجارية
                                            <Svgemojy2 />
                                        </h3>
                                        <h2>
                                            <span>
                                                {packageDataYearly.brand.price}
                                            </span>
                                            <span>ر.س</span>
                                            <span>
                                                {packageDataYearly.type}
                                            </span>
                                        </h2>
                                        <ul>
                                            <li>
                                                <IoCheckmarkSharp />
                                                100منتج
                                            </li>
                                            <li>
                                                <IoCheckmarkSharp />
                                                10تصنيفات
                                            </li>
                                            <li>
                                                <IoCheckmarkSharp />
                                                دعم فني 24
                                            </li>
                                            <li>
                                                <IoCheckmarkSharp />
                                                تجربة مجانية
                                            </li>
                                            <li>
                                                <IoCheckmarkSharp />
                                                تجربة مجانية
                                            </li>
                                            <li>
                                                <IoCheckmarkSharp />
                                                تخصيص القالب
                                            </li>
                                            <li>
                                                <IoCheckmarkSharp />
                                                خدمات الاستشارة
                                            </li>
                                        </ul>

                                        <button>ابدأ الآن</button>
                                    </div>
                                    <div className="box">
                                        <h3>
                                            التاجر المحترف <Svgemojy />
                                        </h3>
                                        <h2>
                                            <span>
                                                {
                                                    packageDataYearly
                                                        .professional.price
                                                }
                                            </span>
                                            <span>ر.س</span>
                                            <span>
                                                {packageDataYearly.type}
                                            </span>
                                        </h2>
                                        <ul>
                                            <li>
                                                <IoCheckmarkSharp />
                                                100منتج
                                            </li>
                                            <li>
                                                <IoCheckmarkSharp />
                                                10تصنيفات
                                            </li>
                                            <li>
                                                <IoCheckmarkSharp />
                                                دعم فني 24
                                            </li>
                                            <li>
                                                <IoCheckmarkSharp />
                                                تجربة مجانية
                                            </li>
                                            <li>
                                                <IoCheckmarkSharp />
                                                تجربة مجانية
                                            </li>
                                            <li>
                                                <IoCheckmarkSharp />
                                                تخصيص القالب
                                            </li>
                                            <li className="not-active">
                                                <IoCheckmarkSharp />
                                                خدمات الاستشارة
                                            </li>
                                        </ul>

                                        <button>ابدأ الآن</button>
                                    </div>
                                </div>
                            ) : null
                        ) : packageDataMonthly !== null ? (
                            <div className="content-package">
                                <div className="box">
                                    <h3>
                                        التاجر المبتدأ
                                        <Svghappy />
                                    </h3>
                                    <h2>
                                        <span>
                                            {packageDataMonthly.startUp.price}
                                        </span>
                                        <span>ر.س</span>
                                        <span>{packageDataMonthly.type}</span>
                                    </h2>
                                    <ul>
                                        <li>
                                            <IoCheckmarkSharp />
                                            100منتج
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            10تصنيفات
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            دعم فني 24
                                        </li>
                                        <li className="not-active">
                                            <IoCheckmarkSharp />
                                            تجربة مجانية
                                        </li>
                                        <li className="not-active">
                                            <IoCheckmarkSharp />
                                            تجربة مجانية
                                        </li>
                                        <li className="not-active">
                                            <IoCheckmarkSharp />
                                            تخصيص القالب
                                        </li>
                                        <li className="not-active">
                                            <IoCheckmarkSharp />
                                            خدمات الاستشارة
                                        </li>
                                    </ul>

                                    <button>ابدأ الآن</button>
                                </div>
                                <div className="box">
                                    <h3>
                                        العلامة التجارية
                                        <Svgemojy2 />
                                    </h3>
                                    <h2>
                                        <span>
                                            {packageDataMonthly.brand.price}
                                        </span>
                                        <span>ر.س</span>
                                        <span>{packageDataMonthly.type}</span>
                                    </h2>
                                    <ul>
                                        <li>
                                            <IoCheckmarkSharp />
                                            100منتج
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            10تصنيفات
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            دعم فني 24
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            تجربة مجانية
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            تجربة مجانية
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            تخصيص القالب
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            خدمات الاستشارة
                                        </li>
                                    </ul>

                                    <button>ابدأ الآن</button>
                                </div>
                                <div className="box">
                                    <h3>
                                        التاجر المحترف <Svgemojy />
                                    </h3>
                                    <h2>
                                        <span>
                                            {
                                                packageDataMonthly.professional
                                                    .price
                                            }
                                        </span>
                                        <span>ر.س</span>
                                        <span>{packageDataMonthly.type}</span>
                                    </h2>
                                    <ul>
                                        <li>
                                            <IoCheckmarkSharp />
                                            100منتج
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            10تصنيفات
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            دعم فني 24
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            تجربة مجانية
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            تجربة مجانية
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            تخصيص القالب
                                        </li>
                                        <li className="not-active">
                                            <IoCheckmarkSharp />
                                            خدمات الاستشارة
                                        </li>
                                    </ul>

                                    <button>ابدأ الآن</button>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            {/* =========================== */}
            <div className="our-review p-main">
                <div className="container gap-2 gap-md-5 ">
                    <MainTitle text={"قالوا عنا"} />
                    <div className="all">
                        {reviewLoading ? (
                            <LoadingBox />
                        ) : reviewData.length ? (
                            <ReviewSwiper DataReviewSwiper={reviewData} />
                        ) : (
                            <h2>لم يتم العثور على البيانات</h2>
                        )}
                    </div>
                </div>
            </div>
            {/* =========================== */}
            <div className="our-partners p-main">
                <div className="container gap-2 gap-md-5 ">
                    <MainTitle text={"شركاء النجاح"} />
                    <div className="all ">
                        {partnersLoading ? (
                            <LoadingBox />
                        ) : partnersData.length ? (
                            <PartnerSwiper PartnerDataSwiper={partnersData} />
                        ) : (
                            <h2>لم يتم العثور على البيانات</h2>
                        )}
                    </div>
                </div>
            </div>
            {/* =========================== */}
        </>
    );
};

export default HomeBox;
