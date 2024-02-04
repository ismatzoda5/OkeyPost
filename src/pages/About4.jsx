import React from 'react'
import { useTranslation } from "react-i18next";
const About4 = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
    <div className="w-[98%] rounded-[30px] mt-[3%] m-auto p-[20px]  bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]">
    <div className="w-[80%] m-auto text-[white] ">
      <div className="w-[100%] mt-[1%]">
      <p className="text-[18px] font-[300] mt-[2%] ph:text-center ">{t("sec4.h1")}</p>
        <h1 className="text-[40px] font-[900] ph:text-[35px] ph:text-center">{t("sec4.h2")}</h1>
        <p className="text-[18px] font-[700] mt-[2%] ph:text-center ph:text-[16px]">{t("sec4.h3")}</p>
<button className=" bg-gradient-to-r from-[#00C97B] ph:mt-[7%] ph:ml-[19%] to-[#00D981] p-[10px] mt-[3%] text-[16px] rounded-[50px] ">{t("sec4.h4")}</button>
      </div>
    </div>
  </div>



  <div className="w-[40%] mt-[5%] ml-[10%] ph:w-[80%]">
      <h1 className="text-[25px] font-[900] ph:text-[20px] ph:text-center">{t("sec4.h5")}</h1>
      </div>

      <div data-aos="fade-down" className="w-[80%] m-auto mt-[5%] flex gap-5 flex-wrap ph:flex-col">
        <div className="w-[32%] p-[25px] shadow-xl rounded-[5px] ph:w-[100%]">
        <img className="mb-[5%]" src="Иконка (9).svg" alt="" />
        <h1 className="text-[18px]  font-[900]">{t("sec4.h6")}</h1>
      <p className="text-[14px] font-[300] mt-[3%]">{t("sec4.h7")}</p>
     </div>
        <div className="w-[32%] p-[25px] shadow-xl rounded-[5px] ph:w-[100%]">
        <img className="mb-[5%]" src="Иконка (8).svg" alt="" />
        <h1 className="text-[18px]  font-[900]">{t("sec4.h6")}</h1>
      <p className="text-[14px] font-[300] mt-[3%]">{t("sec4.h7")}</p>
     </div>
        <div className="w-[32%] p-[25px] shadow-xl rounded-[5px] ph:w-[100%]">
        <img className="mb-[5%]" src="Иконка (7).svg" alt="" />
        <h1 className="text-[18px]  font-[900]">{t("sec4.h6")}</h1>
      <p className="text-[14px] font-[300] mt-[3%]">{t("sec4.h7")}</p>
     </div>
        <div className="w-[32%] p-[25px] shadow-xl rounded-[5px] ph:w-[100%]">
        <img className="mb-[5%]" src="Иконка (8).svg" alt="" />
        <h1 className="text-[18px]  font-[900]">{t("sec4.h6")}</h1>
      <p className="text-[14px] font-[300] mt-[3%]">{t("sec4.h7")}</p>
     </div>
        <div className="w-[32%] p-[25px] shadow-xl rounded-[5px] ph:w-[100%]">
        <img className="mb-[5%]" src="Иконка (7).svg" alt="" />
        <h1 className="text-[18px]  font-[900]">{t("sec4.h6")}</h1>
      <p className="text-[14px] font-[300] mt-[3%]">{t("sec4.h7")}</p>
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

export default About4