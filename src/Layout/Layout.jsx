import { Link, Outlet } from "react-router-dom";import Switcher from "../components/Swicher";
import { useState } from "react";
;
import { useTranslation } from "react-i18next";

const Layout = () => {
  let [burger,setBurger]=useState(false)

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="">
      <div className="w-[100%] dark:bg-gray-900 dark:text-white">
      <div className="w-[90%] m-auto text-[#1F2428] dark:bg-gray-900 dark:text-white flex justify-between items-center pt-[1%]">
        <img className="w-[10%] ph:w-[50%]" src="_2243895274448.svg" alt="" />
        <div className="hidden ph:block">
        <Switcher/>
        </div>
        <div className=" w-[55%] flex justify-between ph:hidden">
          <p className=" font-[700] text-[14px]">
            <Link to={"/"}>{t("navbar.h1")}</Link>
          </p>
          <p className=" font-[700] text-[14px]">
            <Link to={"/about"}>{t("navbar.h2")}</Link>
          </p>
          <p className=" font-[700] text-[14px]">
            <Link to={`/about1`}>{t("navbar.h3")}</Link>
          </p>
          <p className=" font-[700] text-[14px]">
            <Link to={"/about2"}>{t("navbar.h4")}</Link>
          </p>
          <p className=" font-[700] text-[14px]">
            <Link to={"/about3"}>{t("navbar.h5")}</Link>
          </p>
          <p className=" font-[700] text-[14px]">
            <Link to={`/about4`}>{t("navbar.h6")}</Link>
          </p>
          <p className=" font-[700] text-[14px]">
            <Link to={`/about5`}>{t("navbar.h7")}</Link>
          </p>
          <p className=" font-[700] text-[14px]">
            <Link to={`/about6`}>{t("navbar.h8")}</Link>
          </p>
        </div>
        <div className=" flex justify-between w-[30%] items-center ph:hidden">
          <p className="flex items-center"><img className="mr-[2%]" src="User (2).svg" alt="" />{t("navbar.h9")}</p>
          <button className=" bg-gradient-to-r from-[#00C97B] to-[#00D981] p-[7px] text-[16px] rounded-[50px] text-[white]">{t("navbar.h10")} </button>
          
          
         
          <Switcher/>
        </div>
       <div className="">
       <h1 onClick={()=> setBurger(true)} className="text-[35px] hidden ph:block font-[900]">=</h1>
        <h1 onClick={()=> setBurger(true)}  className="text-[35px] mt-[-190%] hidden ph:block font-[900]">=</h1>
       </div>
      </div>
      
      <Outlet />
      </div>

      {burger ? (
       <div className="w-[100%] hidden ph:block h-[100%] absolute top-1 bg-gradient-to-r from-[#5b52a3cd] to-[#40b7eacb]">
        <div className=" w-[30%] ml-[35%] flex justify-between">
          <p className="font-[900] text-[20px]" onClick={()=> changeLanguage("eng")}>Eng</p>
            <p className="font-[900] text-[20px]" onClick={()=> changeLanguage("ru")}>Ru</p>
            <p className="font-[900] text-[20px]" onClick={()=> changeLanguage("tj")}>Tj</p>
          </div>
         <div className=" w-[100%] ">
        <p onClick={()=> setBurger(false)} className=" font-[700] text-[white] mb-[2%] text-center text-[25px]">
            <Link to={"/"}>{t("navbar.h1")}</Link>
          </p>
        <p onClick={()=> setBurger(false)} className=" font-[700] text-[white] mb-[2%] text-center text-[25px]">
            <Link to={"/about"}>{t("navbar.h2")}</Link>
          </p>
        <p onClick={()=> setBurger(false)} className=" font-[700] text-[white] mb-[2%] text-center text-[25px]">
            <Link to={`/about1`}>{t("navbar.h3")}</Link>
          </p>
        <p onClick={()=> setBurger(false)} className=" font-[700] text-[white] mb-[2%] text-center text-[25px]">
            <Link to={"/about2"}>{t("navbar.h4")}</Link>
          </p>
        <p onClick={()=> setBurger(false)} className=" font-[700] text-[white] mb-[2%] text-center text-[25px]">
            <Link to={"/about3"}>{t("navbar.h5")}</Link>
          </p>
        <p onClick={()=> setBurger(false)} className=" font-[700] text-[white] mb-[2%] text-center text-[25px]">
            <Link to={`/about4`}>{t("navbar.h7")}</Link>
          </p>
        <p onClick={()=> setBurger(false)} className=" font-[700] text-[white] mb-[2%] text-center text-[25px]">
            <Link to={`/about5`}>{t("navbar.h8")}</Link>
          </p>
        <p onClick={()=> setBurger(false)} className=" font-[700] text-[white] mb-[2%] text-center text-[25px]">
            <Link to={`/about6`}>{t("navbar.h9")}</Link>
          </p>
        </div>
       </div>
      ) : null}

    </div>

    
  );
};

export default Layout;
