// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";
import "./SwiperBox.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperProduct from "./SwiperProduct";
let SwiperBox = () => {
    return (
        <>
            <Swiper
                slidesPerView={6}
                spaceBetween={20}
                slidesPerGroup={1}
                // loop={true}
                loopFillGroupWithBlank={true}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },

                    992: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                    1400: {
                        slidesPerView: 6,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SwiperProduct />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperProduct />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperProduct />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperProduct />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperProduct />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperProduct />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperProduct />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperProduct />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperProduct />
                </SwiperSlide>
            </Swiper>
        </>
    );
};
export default SwiperBox;
