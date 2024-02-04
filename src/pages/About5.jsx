import React from 'react'
import { useTranslation } from "react-i18next";
const About5 = () => {
    const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
    <div className="w-[98%] rounded-[30px] mt-[3%] m-auto p-[20px]  bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]">
    <div className="w-[80%] m-auto text-[white] ">
      <div className="w-[100%] mt-[1%]">
      <p className="text-[18px] font-[300] mt-[2%] ph:text-center">{t("sec1.h1")}</p>
        <h1 className="text-[40px] font-[900] ph:text-[30px] ph:text-center">{t("sec1.h0")}</h1>
      
      </div>
    </div>
  </div>

  <div  data-aos="fade-down"className="w-[80%] m-auto flex justify-between flex-wrap mt-[5%] ph:flex-col">
    <div className="w-[32%]  mt-[3%] ph:w-[100%] ph:mt-[7%] shadow-xl">
        <img src="фото.svg" alt="" />
        <h1 className='text-[#1F2428] p-[10px] text-[16px]  dark:bg-gray-900 dark:text-white w-[80%] ph:w-[100%] ph:text-center ph:mt-[5%] ph:mb-[5%] font-[900]'>{t("sec3.h1")}</h1>
        <div className="flex justify-between ml-[5px] mr-[10px] p-[10px]">
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>22.10.2021</p>
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>{t("sec3.h2")}</p>
        </div>
    </div>
    <div className="w-[32%]  mt-[3%] ph:w-[100%] ph:mt-[7%] shadow-xl">
        <img src="фото (2).svg" alt="" />
        <h1 className='text-[#1F2428] p-[10px] text-[16px]  dark:bg-gray-900 dark:text-white w-[80%] ph:w-[100%] ph:text-center ph:mt-[5%] ph:mb-[5%] font-[900]'>{t("sec3.h1")}</h1>
        <div className="flex justify-between   ml-[5px] mr-[10px] p-[10px]">
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>22.10.2021</p>
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>{t("sec3.h2")}</p>
        </div>
    </div>
    <div className="w-[32%]  mt-[3%] ph:w-[100%] ph:mt-[7%] shadow-xl">
        <img src="фото (1).svg" alt="" />
        <h1 className='text-[#1F2428] p-[10px] text-[16px]  dark:bg-gray-900 dark:text-white w-[80%] ph:w-[100%] ph:text-center ph:mt-[5%] ph:mb-[5%] font-[900]'>{t("sec3.h1")}</h1>
        <div className="flex justify-between ml-[5px] mr-[10px] p-[10px]">
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>22.10.2021</p>
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>{t("sec3.h2")}</p>
        </div>
    </div>
    <div className="w-[32%]  mt-[3%] ph:w-[100%] ph:mt-[7%] shadow-xl">
        <img src="фото (1).svg" alt="" />
        <h1 className='text-[#1F2428] p-[10px] text-[16px]  dark:bg-gray-900 dark:text-white w-[80%] ph:w-[100%] ph:text-center ph:mt-[5%] ph:mb-[5%] font-[900]'>{t("sec3.h1")}</h1>
        <div className="flex justify-between ml-[5px] mr-[10px] p-[10px]">
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>22.10.2021</p>
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>{t("sec3.h2")}</p>
        </div>
    </div>
    <div className="w-[32%]  mt-[3%] ph:w-[100%] ph:mt-[7%] shadow-xl">
        <img src="фото (3).svg" alt="" />
        <h1 className='text-[#1F2428] p-[10px] text-[16px]  dark:bg-gray-900 dark:text-white w-[80%] ph:w-[100%] ph:text-center ph:mt-[5%] ph:mb-[5%] font-[900]'>{t("sec3.h1")}</h1>
        <div className="flex justify-between ml-[5px] mr-[10px] p-[10px]">
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>22.10.2021</p>
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>{t("sec3.h2")}</p>
        </div>
    </div>
    <div className="w-[32%]  mt-[3%] ph:w-[100%] ph:mt-[7%] shadow-xl">
        <img src="фото (7).svg" alt="" />
        <h1 className='text-[#1F2428] p-[10px] text-[16px]  dark:bg-gray-900 dark:text-white w-[80%] ph:w-[100%] ph:text-center ph:mt-[5%] ph:mb-[5%] font-[900]'>{t("sec3.h1")}</h1>
        <div className="flex justify-between ml-[5px] mr-[10px] p-[10px]">
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>22.10.2021</p>
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>{t("sec3.h2")}</p>
        </div>
    </div>
    <div className="w-[32%]  mt-[3%] ph:w-[100%] ph:mt-[7%] shadow-xl">
        <img src="фото (6).svg" alt="" />
        <h1 className='text-[#1F2428] p-[10px] text-[16px]  dark:bg-gray-900 dark:text-white w-[80%] ph:w-[100%] ph:text-center ph:mt-[5%] ph:mb-[5%] font-[900]'>{t("sec3.h1")}</h1>
        <div className="flex justify-between ml-[5px] mr-[10px] p-[10px]">
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>22.10.2021</p>
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>{t("sec3.h2")}</p>
        </div>
    </div>
    <div className="w-[32%]  mt-[3%] ph:w-[100%] ph:mt-[7%] shadow-xl">
        <img src="фото (5).svg" alt="" />
        <h1 className='text-[#1F2428] p-[10px] text-[16px]  dark:bg-gray-900 dark:text-white w-[80%] ph:w-[100%] ph:text-center ph:mt-[5%] ph:mb-[5%] font-[900]'>{t("sec3.h1")}</h1>
        <div className="flex justify-between ml-[5px] mr-[10px] p-[10px]">
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>22.10.2021</p>
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>{t("sec3.h2")}</p>
        </div>
    </div>
    <div className="w-[32%]  mt-[3%] ph:w-[100%] ph:mt-[7%] shadow-xl">
        <img src="фото (7).svg" alt="" />
        <h1 className='text-[#1F2428] p-[10px] text-[16px]  dark:bg-gray-900 dark:text-white w-[80%] ph:w-[100%] ph:text-center ph:mt-[5%] ph:mb-[5%] font-[900]'>{t("sec3.h1")}</h1>
        <div className="flex justify-between ml-[5px] mr-[10px] p-[10px]">
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>22.10.2021</p>
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>{t("sec3.h2")}</p>
        </div>
    </div>
    <div className="w-[32%]  mt-[3%] ph:w-[100%] ph:mt-[7%] shadow-xl">
        <img src="фото (3).svg" alt="" />
        <h1 className='text-[#1F2428] p-[10px] text-[16px]  dark:bg-gray-900 dark:text-white w-[80%] ph:w-[100%] ph:text-center ph:mt-[5%] ph:mb-[5%] font-[900]'>{t("sec3.h1")}</h1>
        <div className="flex justify-between ml-[5px] mr-[10px] p-[10px]">
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>22.10.2021</p>
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>{t("sec3.h2")}</p>
        </div>
    </div>
    <div className="w-[32%]  mt-[3%] ph:w-[100%] ph:mt-[7%] shadow-xl">
        <img src="фото (2).svg" alt="" />
        <h1 className='text-[#1F2428] p-[10px] text-[16px]  dark:bg-gray-900 dark:text-white w-[80%] ph:w-[100%] ph:text-center ph:mt-[5%] ph:mb-[5%] font-[900]'>{t("sec3.h1")}</h1>
        <div className="flex justify-between ml-[5px] mr-[10px] p-[10px]">
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>22.10.2021</p>
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>{t("sec3.h2")}</p>
        </div>
    </div>
    <div className="w-[32%]  mt-[3%] ph:w-[100%] ph:mt-[7%] shadow-xl">
        <img src="фото (1).svg" alt="" />
        <h1 className='text-[#1F2428] p-[10px] text-[16px]  dark:bg-gray-900 dark:text-white w-[80%] ph:w-[100%] ph:text-center ph:mt-[5%] ph:mb-[5%] font-[900]'>{t("sec3.h1")}</h1>
        <div className="flex justify-between ml-[5px] mr-[10px] p-[10px]">
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>22.10.2021</p>
            <p className='text-[#6c6c6c] font-[12px] dark:bg-gray-900 dark:text-white'>{t("sec3.h2")}</p>
        </div>
    </div>
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

export default About5