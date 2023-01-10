import React, { useState } from "react";
import "./HomeBox.css";
import FeaturesVideo from "../../../assets/Videos/video.mp4";
import { SwiperBox } from "../../index";
import { MainTitle } from "../../index";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { TbHandClick } from "react-icons/tb";
import { IoCheckmarkSharp } from "react-icons/io5";
import { CiFaceSmile } from "react-icons/ci";
import { MdOutlineTagFaces } from "react-icons/md";

// ===============Data================
import { StoresInfo } from "../../../assets/Data/Data";
const HomeBox = () => {
    // const [age, setAge] = useState("");

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };
    return (
        <>
            <div className="hero">
                <div className="container">
                    <h2>أهلاً بك في منصة اطلبها</h2>
                    <h3>انضم الان الى منصة التجارة الالكترونية الشاملة</h3>
                    <button className="bt-main">التسجيل</button>
                </div>
            </div>
            {/* =========================== */}
            <div className="outstanding-products p-main">
                <div className="container">
                    <MainTitle text="المنتجات المتميزة" />
                    <div className="all">
                        <SwiperBox />
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
                            {StoresInfo.length
                                ? StoresInfo.map((el, index) => {
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
                                : null}
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
                        <button className="bt-main">التسجيل</button>
                    </div>
                </div>
            </div>

            {/* =========================== */}
            <div className="out-features p-main">
                <div className="container ">
                    <MainTitle text={"لماذا اطلبها ؟"} />
                    <div className="all flex-column-reverse flex-md-row">
                        <div className="box-right">
                            <ul>
                                <li>
                                    <TbHandClick />
                                    افتح متجرك بسهولة
                                </li>
                                <li>
                                    <TbHandClick />
                                    تجربة مجانية لتتعرف على خدماتنا
                                </li>
                                <li>
                                    <TbHandClick />
                                    خدمات إضافية مميزة لتساعدك في تسويق متجرك
                                </li>
                                <li>
                                    <TbHandClick />
                                    باقات احترافية وقوالب متعددة تناسب طبيعة
                                    نشاط متجرك
                                </li>
                            </ul>
                        </div>

                        <div className="box-left">
                            <video controls>
                                <source src={FeaturesVideo} type="video/mp4" />
                            </video>
                            {/* <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/fK3EwBLzqGc"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe> */}
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
                                    <span className="slider" />
                                </label>
                            </li>
                        </ul>
                        <div className="content-package flex-column flex-xl-row">
                            <div className="box">
                                <h3>
                                    التاجر المبتدأ
                                    <CiFaceSmile />
                                </h3>
                                <h2>
                                    <span>800</span>
                                    <span>ر.س</span>
                                    <span>سنوي</span>
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
                                    <MdOutlineTagFaces />
                                </h3>
                                <h2>
                                    <span>2500</span>
                                    <span>ر.س</span>
                                    <span>سنوي</span>
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
                                    التاجر المحترف <CiFaceSmile />
                                </h3>
                                <h2>
                                    <span>1400</span>
                                    <span>ر.س</span>
                                    <span>سنوي</span>
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
                    </div>
                </div>
            </div>
            {/* =========================== */}
        </>
    );
};

export default HomeBox;
//   <li>
//       <IoCheckmarkSharp />
//   </li>;
//  <FormControl fullWidth>
//      <InputLabel id="demo-simple-select-label">Age</InputLabel>
//      <Select
//          labelId="demo-simple-select-label"
//          id="demo-simple-select"
//          value={age}
//          label="Age"
//          onChange={handleChange}
//      >
//          <MenuItem value={10}>Ten</MenuItem>
//          <MenuItem value={20}>Twenty</MenuItem>
//          <MenuItem value={30}>Thirty</MenuItem>
//      </Select>
//  </FormControl>;
