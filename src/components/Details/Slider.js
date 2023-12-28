import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IMG_URL } from "../../config";

const Slider = ({ ingredients }) => {

    const renderSlides = ingredients?.map((el, index) => (
        <SwiperSlide>
            <img src={`${IMG_URL}${el}.png`} alt="" />
        </SwiperSlide>
    ))

    return (
        <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {renderSlides}
        </Swiper>
        </div>
    );
};

export default Slider;
