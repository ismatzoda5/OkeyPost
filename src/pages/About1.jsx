import React from 'react'
import { useTranslation } from "react-i18next";
const About1 = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  return (
    <>

<div className="w-[98%] rounded-[30px] mt-[3%] m-auto p-[20px]  bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]">
    <div className="w-[80%] m-auto text-[white] ">
      <div className="w-[100%] mt-[1%]">
      <p className="text-[18px] font-[300] mt-[2%] ph:text-center">{t("sec2.h1")}</p>
        <h1 className="text-[40px] font-[900] ph:text-center">{t("sec2.h2")}</h1>
        <p className="text-[18px] font-[300] mt-[2%] ph:text-center">{t("sec2.h3")}
</p>
<button className=" bg-gradient-to-r from-[#00C97B] ph:ml-[18%] to-[#00D981] p-[10px] mt-[3%] text-[16px] rounded-[50px] ">{t("sec2.h4")}</button>
      </div>
    </div>
  </div>

  <div className="w-[80%] m-auto">
  <h1 className="text-[25px] font-[900] mt-[5%] ph:text-[20px] ph:text-center">{t("sec2.h5")}</h1>

  <div data-aos="fade-down" className="w-[100%] flex justify-between flex-wrap ph:flex-col">
    <div className="flex items-center ph:flex-col ph:w-[100%] ph:text-center ph:mb-[10%] mt-[5%] w-[45%]">
        <img className='h-[200px] ph:mb-[5%] ' src="фон (3).svg" alt="" />
        <div className="ml-[5%]">
            <h1 className='text-[16px] font-[700]'>{t("sec2.h6")}</h1>
            <p>{t("sec2.h7")}</p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h8")} 
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>
{t("sec2.h9")}
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h12")}

<span className='text-[#01CD7D] font-[800]'>{t("sec2.h13")}</span></p>
<p className='text-[#01CD7D] text-[14px] font-[800]'>{t("sec2.h1")}</p>
        </div>
    </div>
    <div className="flex items-center ph:flex-col ph:w-[100%] ph:text-center ph:mb-[10%] mt-[5%] w-[45%]">
        <img className='h-[200px] ph:mb-[5%]' src="фон (14).svg" alt="" />
        <div className="ml-[5%]">
            <h1 className='text-[16px] font-[700]'>{t("sec2.h6")}</h1>
            <p>{t("sec2.h7")}</p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h8")} 
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>
{t("sec2.h9")}
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h12")}

<span className='text-[#01CD7D] font-[800]'>{t("sec2.h13")}</span></p>
<p className='text-[#01CD7D] text-[14px] font-[800]'>{t("sec2.h1")}</p>
        </div>
    </div>
    <div className="flex items-center ph:flex-col ph:w-[100%] ph:text-center ph:mb-[10%] mt-[5%] w-[45%]">
        <img className='h-[200px] ph:mb-[5%]' src="фон (5).svg" alt="" />
        <div className="ml-[5%]">
            <h1 className='text-[16px] font-[700]'>{t("sec2.h6")}</h1>
            <p>{t("sec2.h7")}</p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h8")} 
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>
{t("sec2.h9")}
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h12")}

<span className='text-[#01CD7D] font-[800]'>{t("sec2.h13")}</span></p>
<p className='text-[#01CD7D] text-[14px] font-[800]'>{t("sec2.h1")}</p>
        </div>
    </div>
    <div className="flex items-center ph:flex-col ph:w-[100%] ph:text-center ph:mb-[10%] mt-[5%] w-[45%]">
        <img className='h-[200px] ph:mb-[5%]' src="фон (6).svg" alt="" />
        <div className="ml-[5%]">
            <h1 className='text-[16px] font-[700]'>{t("sec2.h6")}</h1>
            <p>{t("sec2.h7")}</p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h8")} 
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>
{t("sec2.h9")}
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h12")}

<span className='text-[#01CD7D] font-[800]'>{t("sec2.h13")}</span></p>
<p className='text-[#01CD7D] text-[14px] font-[800]'>{t("sec2.h1")}</p>
        </div>
    </div>
    <div className="flex items-center ph:flex-col ph:w-[100%] ph:text-center ph:mb-[10%] mt-[5%] w-[45%]">
        <img className='h-[200px] ph:mb-[5%]' src="фон (7).svg" alt="" />
        <div className="ml-[5%]">
            <h1 className='text-[16px] font-[700]'>{t("sec2.h6")}</h1>
            <p>{t("sec2.h7")}</p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h8")} 
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>
{t("sec2.h9")}
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h12")}

<span className='text-[#01CD7D] font-[800]'>{t("sec2.h13")}</span></p>
<p className='text-[#01CD7D] text-[14px] font-[800]'>{t("sec2.h1")}</p>
        </div>
    </div>
    <div className="flex items-center ph:flex-col ph:w-[100%] ph:text-center ph:mb-[10%] mt-[5%] w-[45%]">
        <img className='h-[200px] ph:mb-[5%]' src="фон (8).svg" alt="" />
        <div className="ml-[5%]">
            <h1 className='text-[16px] font-[700]'>{t("sec2.h6")}</h1>
            <p>{t("sec2.h7")}</p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h8")} 
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>
{t("sec2.h9")}
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h12")}

<span className='text-[#01CD7D] font-[800]'>{t("sec2.h13")}</span></p>
<p className='text-[#01CD7D] text-[14px] font-[800]'>{t("sec2.h1")}</p>
        </div>
    </div>
    <div className="flex items-center ph:flex-col ph:w-[100%] ph:text-center ph:mb-[10%] mt-[5%] w-[45%]">
        <img className='h-[200px] ph:mb-[5%]' src="фон (15).svg" alt="" />
        <div className="ml-[5%]">
            <h1 className='text-[16px] font-[700]'>{t("sec2.h6")}</h1>
            <p>{t("sec2.h7")}</p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h8")} 
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>
{t("sec2.h9")}
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h12")}

<span className='text-[#01CD7D] font-[800]'>{t("sec2.h13")}</span></p>
<p className='text-[#01CD7D] text-[14px] font-[800]'>{t("sec2.h1")}</p>
        </div>
    </div>
    <div className="flex items-center ph:flex-col ph:w-[100%] ph:text-center ph:mb-[10%] mt-[5%] w-[45%]">
        <img className='h-[200px] ph:mb-[5%]' src="фон (14).svg" alt="" />
        <div className="ml-[5%]">
            <h1 className='text-[16px] font-[700]'>{t("sec2.h6")}</h1>
            <p>{t("sec2.h7")}</p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h8")} 
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>
{t("sec2.h9")}
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h12")}

<span className='text-[#01CD7D] font-[800]'>{t("sec2.h13")}</span></p>
<p className='text-[#01CD7D] text-[14px] font-[800]'>{t("sec2.h1")}</p>
        </div>
    </div>
    <div className="flex items-center ph:flex-col ph:w-[100%] ph:text-center ph:mb-[10%] mt-[5%] w-[45%]">
        <img className='h-[200px] ph:mb-[5%]' src="фон (11).svg" alt="" />
        <div className="ml-[5%]">
            <h1 className='text-[16px] font-[700]'>{t("sec2.h6")}</h1>
            <p>{t("sec2.h7")}</p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h8")} 
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>
{t("sec2.h9")}
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h12")}

<span className='text-[#01CD7D] font-[800]'>{t("sec2.h13")}</span></p>
<p className='text-[#01CD7D] text-[14px] font-[800]'>{t("sec2.h1")}</p>
        </div>
    </div>
    <div className="flex items-center ph:flex-col ph:w-[100%] ph:text-center ph:mb-[10%] mt-[5%] w-[45%]">
        <img className='h-[200px] ph:mb-[5%]' src="фон (12).svg" alt="" />
        <div className="ml-[5%]">
            <h1 className='text-[16px] font-[700]'>{t("sec2.h6")}</h1>
            <p>{t("sec2.h7")}</p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h8")} 
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>
{t("sec2.h9")}
<span className='text-[#01CD7D] font-[800]'>{t("sec2.h10")}</span></p>
            <p className='text-[14px] mt-[3%] font-[400]'>{t("sec2.h12")}

<span className='text-[#01CD7D] font-[800]'>{t("sec2.h13")}</span></p>
<p className='text-[#01CD7D] text-[14px] font-[800]'>{t("sec2.h1")}</p>
        </div>
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

export default About1