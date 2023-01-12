import React from "react";
import "./StartBox.css";
const StartBox = () => {
    return (
        <>
            <div className="start-box">
                <div className="all">
                    <div className="container">
                        <div className="start-hero">
                            <h2>ابدأ مع أطلبها بوابتك للتجارة الإلكترونية</h2>
                        </div>
                        <div className="start-content">
                            <div className="top flex-column flex-lg-row">
                                <div className="box-right box">
                                    <h4>
                                        <span>خدمة إدارة المتاجر</span>
                                    </h4>
                                    <p>
                                        رحلة البداية نسويلك متجرك ونضيفلك
                                        المنتجات ونبدأ نستقبل طلبات الشراء
                                        وبعدها تشوف مبيعاتك تزيد
                                    </p>
                                </div>
                                <div className="box-left box">
                                    <h4>
                                        <span> خدمة الاستشارات</span>
                                    </h4>
                                    <p>
                                        تقدر تسوي طلب استشارة مع أكبر الخبراء في
                                        مجال التجارة الإلكترونية حتى تتعرف على
                                        السوق وكيف تزيد أرباحك
                                    </p>
                                </div>
                            </div>
                            <div className="start-body">
                                <div className="info">
                                    <h4>
                                        <span>ليش تختار اطلبها</span>
                                    </h4>
                                </div>
                                <p>
                                    تقدم منصة اطلبها تجربة مجانية تستطيع من
                                    خلالها ان تبدأ بإنشاء متجرك الخاص وإدارته
                                    بكل سهولة، حيث وفرنا لك لوحة تحكم سهلة
                                    وواضحة لتستطيع التحكم بكل ما تحتاجه قمنا
                                    بإضافة قسم السوق وبإمكانك أن تجد منتجات
                                    رائعة يمكنك ان تبدأ بشرائها وبيعها للعملاء
                                </p>
                                <div className="box-video">
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/Ri7-vnrJD3k"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                                <button className="bt-main">
                                    ابدأ الآن واحجز متجرك
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StartBox;
