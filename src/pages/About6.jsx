import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../index.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Card from '../components/Card';
import { useTranslation } from "react-i18next";
const About6 = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
    <div className="w-[98%] rounded-[30px] mt-[3%] m-auto p-[20px]  bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]">
    <div className="w-[80%] m-auto text-[white] ph:text-center">
      <div className="w-[100%] mt-[1%]">
      <p className="text-[18px] font-[300] mt-[2%]">{t("sec1.h1")}</p>
        <h1 className="text-[40px] font-[900]">{t("sec3.h3")}</h1>
      
      </div>
    </div>
  </div>

<div className="w-[80%] m-auto">
<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card img="1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="6.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="7.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="8.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="9.png" />
        </SwiperSlide>
      </Swiper>
</div>
<div className="w-[80%] m-auto mt-[6%]">
<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card img="10.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="11.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="12.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="13.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="14.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="15.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Card img="3.png" />
        </SwiperSlide>
      </Swiper>
</div>

<div className="w-[98%] rounded-[30px] mt-[3%] m-auto p-[60px]  bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]">
<div className="w-[80%] m-auto flex justify-between ph:flex-col">
  
<h1 className="text-[35px]  ph:text-[30px] ph:text-center ph:ml-[-10%] font-[900] text-[white]">{t("sec1.h10")}</h1>
        <img className="ph:mt-[5%] mt-[-4%]" src="Соцсети.svg" alt="" />
</div>
    </div>
  
    <div className="w-[80%] m-auto flex justify-between mt-[8%] ph:flex-col ph:text-center">
        <div className="w-[23%] ph:w-[100%] ph:mt-[10%]">
        <img className="ph:ml-[20%] mb-[8%]" src="_2243895274448.svg" alt="" />
          <img className='ph:ml-[27%] ' src="Соцсети.svg" alt="" />
        </div>
        <div className="w-[23%] ph:w-[100%] ph:mt-[10%]">
        <h1 className="text-[14px] font-[700]">{t("sect9.h1")}</h1>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h2")}</p>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h3")}
</p>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h4")}
</p>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h5")}</p>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h6")}</p>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h7")}</p>
        </div>
        <div className="w-[23%] ph:w-[100%] ph:mt-[10%]">
        <h1 className="text-[14px] font-[700]">{t("sect9.h8")}</h1>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h5")}
</p>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h6")}
</p>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h7")}
</p>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h2")}</p>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h1")}</p>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h4")}</p>
        </div>
        <div className="w-[23%] ph:w-[100%] ph:mt-[10%]">
        <h1 className="text-[14px] font-[700]">{t("sect9.h9")}</h1>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h7")}</p>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h6")}
</p>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h5")}
</p>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h4")}</p>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h3")}</p>
      <p className="text-[12] font-[300] mt-[3%]">{t("sect9.h2")}</p>
        </div>
      </div>
    </>
  )
}

export default About6