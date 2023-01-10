// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";
import "./SwiperBox.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperProduct from "./SwiperProduct";
import { productSwiper } from "../../assets/Data/Data";
let SwiperBox = () => {
    return (
        <>
            <Swiper
                slidesPerView={6}
                spaceBetween={40}
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
                    // 1400: {
                    //     slidesPerView: 6,
                    // },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {productSwiper.length
                    ? productSwiper.map((el, index) => {
                          return (
                              <SwiperSlide key={index}>
                                  <SwiperProduct
                                      Img={el.Img}
                                      Name={el.name}
                                      Evaluate={el.evaluate}
                                      Mark={el.mark}
                                  />
                              </SwiperSlide>
                          );
                      })
                    : null}
            </Swiper>
        </>
    );
};
export default SwiperBox;
