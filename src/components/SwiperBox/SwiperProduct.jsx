import React from "react";
import "./SwiperProduct.css";
import { AiFillStar } from "react-icons/ai";

const SwiperProduct = () => {
    return (
        <>
            <div className="swiper-product">
                <div className="box">
                    <img
                        src="https://www.luluhypermarket.com/medias/1880769-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjI0OTB8aW1hZ2UvanBlZ3xoN2UvaDg5LzEyMDk5ODI3NzI4NDE0LzE4ODA3NjktMDEuanBnXzEyMDBXeDEyMDBIfDk2ZWZmMzkyN2RhYzEyNmVmNDViNDVhOTRiZGUxMjE0NjgwZDIxNWJkMWQ5MDVmNTQ3NzZiNjI1ZmYxNjEyODA"
                        alt=""
                    />
                    <hr />
                    <div className="content">
                        <h6>ايفون 13 برو ازرق</h6>
                        <div className="info">
                            <span>
                                4.5
                                <AiFillStar />
                            </span>
                            <bdi>40 ر.س</bdi>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SwiperProduct;
