// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import rimon from "../assets/images/bots/rimon.png";
import giwon from "../assets/images/bots/giwon.png";
import zillion from "../assets/images/bots/zillion.png";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

function Bot() {
  return (
    <>
      <div className="py-3 px-4">
        
      <span className="text-lg font-bold text-white  pb-3">Start Your Bot</span>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          grabCursor={true} // Enables draggable cursor effect
          pagination={{
            clickable: true
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={rimon} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={giwon} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={zillion} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Bot;
