import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Switcher from '../components/Swicher';
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
import { useTranslation } from "react-i18next";
const Home = () => {
  
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div  className="w-[100%] dark:bg-gray-900 dark:text-white">
       <div className="w-[98%]  rounded-[30px] mt-[3%] m-auto  bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]">
        <div className="w-[80%] m-auto text-[white] flex justify-between ph:flex-col">
          <div className="w-[50%] mt-[5%] ph:w-[100%]">
            <h1 className="text-[40px] font-[900] ph:text-[25px] ph:text-center ph:mb-[5%] ">{t("sect1.h1")}</h1>
            <p className="text-[18px] font-[300] mt-[2%] ph:text-[16px] ph:text-center ph:mb-[5%]">{t("sect1.h2")}
</p>

<button className=" bg-gradient-to-r from-[#00C97B] to-[#00D981] p-[10px] ph:w-[100%] mt-[5%] text-[16px] rounded-[50px] ">{t("sect1.h3")}</button>
          </div>
          <img className="w-[40%] pt-[5%] ph:w-[100%] ph:mt-[5%]" src="Иллюстрация.svg" alt="" />
        </div>
      </div>
      <div data-aos="fade-up-right" className="w-[80%] m-auto mt-[5%] text-[#1F2428] dark:bg-gray-900 dark:text-white ">
     <h1 className="text-[25px] font-[900] ph:w-[100%] ph:text-center w-[30%]">{t("sect2.h1")}</h1>
     <div className="w-[100%] dark:bg-gray-900 dark:text-white flex justify-between ph:flex-col items-center shadow-2xl p-[20px] mt-[5%] rounded-[10px]">
      <img className='ph:hidden' src="Vector 5.svg" alt="" />
      <img className="w-[5%] ph:w-[20%] ph:mb-[4%]" src="Иконка (1).svg" alt="" />
      <p className="text-[12px] ph:text-[16px] font-[800]">{t("sect2.h2")}</p>
      <img className="w-[5%] ph:w-[20%] ph:mb-[4%]" src="Иконка (2).svg" alt="" />
      <p className="text-[12px] ph:text-[16px] font-[800]">{t("sect2.h3")}</p>
      <img className="w-[5%] ph:w-[20%] ph:mb-[4%]" src="Иконка (3).svg" alt="" />
      <p className="text-[12px] ph:text-[16px] font-[800]">{t("sect3.h4")}</p>
      <img className="w-[5%] ph:w-[20%] ph:mb-[4%]" src="Иконка (4).svg" alt="" />
      <p className="text-[12px] ph:text-[16px] font-[800]">{t("sect2.h5")}</p>
      <img className="w-[5%] ph:w-[20%] ph:mb-[4%]" src="Иконка (5).svg" alt="" />
      <p className="text-[12px] ph:text-[16px] font-[800]">{t("sect2.h6")}</p>
      <img className="w-[5%] ph:w-[20%] ph:mb-[4%]" src="Иконка.svg" alt="" />
      <p className="text-[12px] ph:text-[16px] font-[800]">{t("sect1.h7")}</p>
      <img className='ph:hidden' src="Vector 6.svg" alt="" />
     </div>
     <div data-aos="fade-down-right" className="w-[100%] flex mt-[10%] justify-between ph:flex-col">
      <div className="w-[30%] ph:w-[100%]">
        <h1 className="text-[20px] font-[900] ph:text-center mb-[15%]">{t("sect2.h8")}</h1>
        <div className="flex items-center bg-[#F2F6FC] p-[5px] rounded-[10px]">
          <img src="фон.svg" alt="" />
          <div className="ml-[5%]  dark:text-gray-900  ">
            <p className="text-[16px]">{t("sect2.h9")}</p>
            <h1 className="font-[900]">7891,46₽</h1>
          </div>
          
        </div>
        <div className="flex  items-center">
        <img className="mt-[35%] ph:ml-[30%] ph:mt-[10%]" src="Футболка.svg" alt="" />
        <img className="mt-[35%] ml-[5%]" src="Vector 5.svg" alt="" />
        </div>
      </div>
      <div className="w-[33%] text-center ph:w-[100%] ph:mt-[5%]">
        <img src="Куртка.svg" alt="" />
        <p className="text-[18px] mt-[4%]">{t("sect2.h10")}</p>
        <h1 className="text-[16px] font-[900] ">Вы экономите до <span className="text-[#01CD7D]">$119.56</span></h1>
      </div>
      <div className="w-[30%] ph:w-[100%] ph:mt-[10%]">
        <h1 className="text-[20px] font-[900] ph:text-center mb-[15%]">{t("sect2.h11")}</h1>
        <div className="flex items-center bg-[#F2F6FC] p-[5px] rounded-[10px]">
          <img src="фон (1).svg" alt="" />
          <div className="ml-[5%]  dark:text-gray-900 ">
            <p className="text-[16px]">{t("sect2.h12")}</p>
            <h1 className="font-[900] text-[#01CD7D]">£80.62 </h1>
          </div>
          
        </div>
        <div className="flex items-center ph:mt-[-15%]">
          <img className="mt-[35%] ml-[35%] ph:hidden" src="Vector 6.svg" alt="" />
        <img className="mt-[35%] ml-[5%] ph:ml-[30%]" src="Джинсы1.svg" alt="" />
        
        </div>
      </div>
     </div>
      <div className="w-[100%] flex ph:flex-col  justify-between items-center  shadow-2xl p-[20px] mt-[10%] rounded-[10px]">
 
     <div className="flex items-center border-r-2 pr-[20px] ph:flex-col ph:border-none ph:mb-[5%] ">
     <img className="" src="Иконка (6).svg" alt="" />
      <p className="text-[12px] ph:text-[16px] ml-[5%] font-[800]">{t("sect2.h6")}</p>
     </div>
     <div className="flex items-center border-r-2 pr-[20px] ph:flex-col ph:border-none ph:mb-[5%]">
     <img className="" src="Иконка (7).svg" alt="" />
      <p className="text-[12px] ph:text-[16px] ml-[5%] font-[800]">{t("sect2.h7")}</p>
     </div>
     <div className="flex items-center border-r-2 pr-[20px] ph:flex-col ph:border-none ph:mb-[5%]">
     <img className="" src="Иконка (8).svg" alt="" />
      <p className="text-[12px] ph:text-[16px] ml-[5%] font-[800]">{t("sect2.h4")}</p>
     </div>
     <div className="flex items-center border-r-2 pr-[20px] ph:flex-col ph:border-none ph:mb-[5%]">
     <img className="" src="Иконка (9).svg" alt="" />
      <p className="text-[12px] ph:text-[16px] ml-[5%] font-[800]">{t("sect2.h3")}</p>
     </div>
     
     </div>
      </div>

      <div className="w-[98%] rounded-[30px] mt-[10%] ph:pb-[30px] m-auto  bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]">
        <div className="w-[80%] m-auto text-[white] ph:flex-col flex justify-between"> 
         <img className="w-[35%] pt-[3%] ph:w-[100%]" src="Иллюстрация (1).svg" alt="" />
          <div className="w-[60%] mt-[8%] ph:w-[100%] ">
            <h1 className="text-[25px] font-[900] ph:text-[20px] ph:text-center ph:mb-[5%]">{t("sect3.h1")}</h1>
            <p className="text-[18px] font-[300] mt-[2%] ph:text-center">{t("sect3.h2")}
</p>
<button className=" bg-gradient-to-r from-[#00C97B] to-[#00D981] ph:w-[70%] ph:ml-[15%]  p-[10px] mt-[5%] text-[16px] rounded-[50px] ">{t("sect3.h3")}</button>
          </div>
        
        </div>
      </div>

      <div className="w-[80%] m-auto">
      <div className="w-[60%] ph:w-[100%] mt-[5%]">
      <h1 className="text-[25px] ph:text-[20px] ph:text-center ph:mb-[5%] font-[900]">{t("sect4.h1")}</h1>
      <p className="text-[12] font-[300] mt-[3%] ph:text-center ph:mt-[5%]">{t("sect4.h2")}</p>
      </div>

      <div className="w-[100%] shadow-2xl rounded-[20px] p-[20px] mt-[8%] ">
     
      <div className="w-[100%] flex justify-between ph:flex-col">
          
      <TextField sx={{width:220}}
          id="standard-select-currency-native"
          select
          label="Страна:"
          defaultValue="Россия"
          SelectProps={{
            native: true,
          }}
          helperText=""
          variant="standard"
          
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      <TextField sx={{width:220}}
          id="standard-select-currency-native"
          select
          label="Страна:"
          defaultValue="Россия"
          SelectProps={{
            native: true,
          }}
          
          variant="standard"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      <TextField sx={{width:220}}
          id="standard-select-currency-native"
          select
          label="Страна:"
          defaultValue="Россия"
          SelectProps={{
            native: true,
          }}
          
          variant="standard"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      <TextField sx={{width:220}}
          id="standard-select-currency-native"
          select
          label="Страна:"
          defaultValue="Россия"
          SelectProps={{
            native: true,
          }}
          
          variant="standard"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
        
      <button className=" bg-gradient-to-r from-[#00C97B] ph:w-[60%] ph:ml-[20%] ph:mt-[10%] to-[#00D981] p-[10px] w-[20%] mt-[2%] text-[white] text-[20px] rounded-[50px] ">{t("sect4.h3")}</button>
        
      </div>

      <h1 className="text-[25px] font-[900] mt-[8%]">{t("sect4.h4")}</h1>

      <div className="w-[100%] flex p-[20px] ph:text-center ph:pl-[0] shadow-2xl mt-[3%] ph:flex-col">
<div className="flex w-[50%] items-center ph:w-[100%] ph:flex-col ">
<img className="ph:ml-[8%]" src="Иконка (7).svg" alt="" />
<p className="text-[18px] ml-[5% ph:text-center ph:mt-[5%]] font-[800]">{t("sect4.h5")}</p>
</div>
            <div className="pl-[20px]  border-l-2 ph:border-none ">
              <p className="text-[12px] dark:bg-gray-900 dark:text-white text-[#222222]">{t("sect4.h6")}</p>
              <h1 className="font-[900] text-[16px]">10-14 дней</h1>
            </div>
            <div className="pl-[20px] ml-[5%] border-l-2 ph:border-none ">
              <p className="text-[12px] dark:bg-gray-900 dark:text-white text-[#222222]">{t("sect4.h7")}</p>
              <h1 className="font-[900] text-[16px]">от £57.00</h1>
            </div>
            <div className="pl-[20px] ml-[5%] border-l-2 ph:border-none ">
              <p className="text-[12px] dark:bg-gray-900 dark:text-white text-[#222222]">{t("sect4.h8")}</p>
              <h1 className="font-[900] text-[16px]">£91.99</h1>
            </div>
            <img className="pl-[20px] ml-[2%] border-l-2 ph:border-none ph:hidden " src="Vector 12.svg" alt="" />
      </div>
      <div className="w-[100%] flex ph:text-center ph:pl-[0] ph:flex-col p-[20px] shadow-2xl mt-[3%]">
<div className="flex ph:flex-col w-[50%] items-center ph:w-[100%]">
<img className="ph:ml-[8%]" src="Иконка (8).svg" alt="" />
<p className="text-[18px] ml-[5%] font-[800] ph:text-center ph:mt-[5%]">{t("sect4.h9")}</p>
</div>
            <div className="pl-[20px] border-l-2 ph:border-none ">
              <p className="text-[12px] text-[#222222] dark:bg-gray-900 dark:text-white ">{t("sect4.h6")}</p>
              <h1 className="font-[900] text-[16px]">10-14 дней</h1>
            </div>
            <div className="pl-[20px] ml-[5%] border-l-2 ph:border-none ">
              <p className="text-[12px] text-[#222222] dark:bg-gray-900 dark:text-white ">{t("sect4.h7")}</p>
              <h1 className="font-[900] text-[16px]">от £27.00</h1>
            </div>
            <div className="pl-[20px] ml-[5%] border-l-2 ph:border-none ">
              <p className="text-[12px] text-[#222222] dark:bg-gray-900 dark:text-white ">{t("sect4.h8")}</p>
              <h1 className="font-[900] text-[16px]">£41.99</h1>
            </div>
            <img className="pl-[20px] ml-[2%] border-l-2 ph:border-none ph:hidden " src="Vector 12.svg" alt="" />
      </div>
      <div className="w-[100%] ph:text-center ph:pl-[0] flex ph:flex-col p-[20px] shadow-2xl mt-[3%]">
<div className="flex ph:flex-col w-[50%] items-center ph:w-[100%]">
<img className="ph:ml-[8%]" src="Иконка (9).svg" alt="" />
<p className="text-[18px] ml-[5%] font-[800] ph:text-center ph:mt-[5%]">{t("sect4.h10")}</p>
</div>
            <div className="pl-[20px] border-l-2 ph:border-none ">
              <p className="text-[12px] text-[#222222] dark:bg-gray-900 dark:text-white ">{t("sect4.h6")}</p>
              <h1 className="font-[900] text-[16px]">10-14 дней</h1>
            </div>
            <div className="pl-[20px] ml-[5%] border-l-2 ph:border-none ">
              <p className="text-[12px] text-[#222222] dark:bg-gray-900 dark:text-white ">{t("sect4.h7")}</p>
              <h1 className="font-[900] text-[16px]">от £37.00</h1>
            </div>
            <div className="pl-[20px] ml-[5%] border-l-2 ph:border-none ">
              <p className="text-[12px] text-[#222222] dark:bg-gray-900 dark:text-white ">{t("sect4.h8")}</p>
              <h1 className="font-[900] text-[16px]">£88.99</h1>
            </div>
            <img className="pl-[20px] ml-[2%] border-l-2 ph:border-none ph:hidden " src="Vector 12.svg" alt="" />
      </div>

      <h1 className="text-[25px] font-[900] mt-[8%] w-[40%] ph:w-[100%] ph:text-[20px] ph:text-center">{t("sect4.h11")}</h1>

      <div data-aos="zoom-in-down" className="w-[100%] flex justify-between mt-[5%] ph:flex-col">
     <div className="w-[24%] ph:w-[100%] ph:text-center ">
      <img className='ml-[-15%] ph:ml-[0%]' src="Иллюстрация (2).svg" alt="" />
      <h1 className="text-[16px] w-[150px] ph:w-[100%]  font-[900]">{t("sect4.h12")}</h1>
      <p className="text-[14px] font-[300] mt-[3%]">{t("sect4.h13")}</p>
     </div>
     <div className="w-[24%] ph:w-[100%] ph:text-center ">
      <img className='ml-[-15%] ph:ml-[0%]' src="Иллюстрация (6).svg" alt="" />
      <h1 className="text-[16px] w-[150px] ph:w-[100%]  font-[900]">{t("sect4.h12")}</h1>
      <p className="text-[14px] font-[300] mt-[3%]">{t("sect4.h13")}</p>
     </div>
     <div className="w-[24%] ph:w-[100%] ph:text-center ">
      <img className='ml-[-15%] ph:ml-[0%]' src="Иллюстрация (4).svg" alt="" />
      <h1 className="text-[16px] w-[150px] ph:w-[100%]  font-[900]">{t("sect4.h12")}</h1>
      <p className="text-[14px] font-[300] mt-[3%]">{t("sect4.h13")}</p>
     </div>
     <div className="w-[24%] ph:w-[100%] ph:text-center ">
      <img className='ml-[-15%] ph:ml-[0%]' src="Иллюстрация (5).svg" alt="" />
      <h1 className="text-[16px] w-[150px] ph:w-[100%]  font-[900]">{t("sect4.h12")}</h1>
      <p className="text-[14px] font-[300] mt-[3%]">{t("sect4.h13")}</p>
     </div>
      </div>
      <p className="text-[14px] w-[40%] ph:w-[100%] ph:text-center ph:mb-[5%] ph:mt-[7%] font-[300] mt-[3%]">{t("sect4.h15")}</p>
      </div>
      <button className=" ml-[10%] bg-gradient-to-r ph:w-[50%] ph:ml-[23%] from-[#00C97B] to-[#00D981] p-[10px] w-[15%] mt-[2%] text-[white] text-[20px] rounded-[50px] ">{t("sect4.h16")}</button>

      <div data-aos="flip-left" className="w-[98%] rounded-[30px] mt-[8%] m-auto ph:pb-[40px] bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]">
        <div className="w-[80%] m-auto text-[white] flex ph:flex-col justify-between"> 
         <img className="w-[35%] ph:w-[100%] pt-[3%]" src="Иллюстрация (71).svg" alt="" />
          <div className="w-[60%] ph:w-[100%] mt-[12%]">
            <h1 className="text-[25px] ph:text-[20px] ph:text-center  font-[900]">{t("sect5.h1")}</h1>
            <p className="text-[18px] font-[300] ph:text-center mt-[2%]">{t("sect5.h2")}
</p>
<button className=" bg-gradient-to-r from-[#00C97B] ph:w-[50%] ph:ml-[24%] to-[#00D981] p-[10px] mt-[5%] text-[16px] rounded-[50px] ">{t("sect5.h3")}</button>
          </div>
        
        </div>
      </div>


      <div data-aos="zoom-in-down" className="w-[40%] mt-[5%] ml-[10%] ph:w-[80%]">
      <h1 className="text-[25px] font-[900] ph:text-[20px] ph:text-center">{t("sect6.h1")}</h1>
      <p className="text-[12] font-[300] mt-[3%]  ph:text-center ph:mt-[8%]">{t("sect6.h2")}</p>
      </div>

      <div className="w-[80%] m-auto mt-[5%] flex justify-between ph:flex-col">
        <div className="w-[32%] ph:w-[100%] p-[25px] rounded-[5px] shadow-xl ">
        <img className="mb-[5%]" src="Иконка (9).svg" alt="" />
        <h1 className="text-[18px]  font-[900]">{t("sect6.h1")}</h1>
      <p className="text-[14px] font-[300] mt-[3%]">{t("sect6.h2")}</p>
     </div>
        <div className="w-[32%] ph:w-[100%] p-[25px] rounded-[5px] shadow-xl ">
        <img className="mb-[5%]" src="Иконка (8).svg" alt="" />
        <h1 className="text-[18px]  font-[900]">{t("sect6.h1")}</h1>
      <p className="text-[14px] font-[300] mt-[3%]">{t("sect6.h2")}</p>
     </div>
        <div className="w-[32%] ph:w-[100%] p-[25px] rounded-[5px] shadow-xl ">
        <img className="mb-[5%]" src="Иконка (7).svg" alt="" />
        <h1 className="text-[18px]  font-[900]">{t("sect6.h1")}</h1>
      <p className="text-[14px] font-[300] mt-[3%]">{t("sect6.h2")}</p>
     </div>
        </div>

        <div className="w-[80%] m-auto mt-[8%]">
        <h1 className="text-[25px] font-[900]">{t("sect7.h1")}</h1>
        <div className="w-[100%] flex justify-between flex-wrap ph:flex-col">
          <div className="w-[46%] flex justify-between ph:flex-col ph:text-center ph:w-[100%] shadow-2xl p-[10px] mt-[5%]">
            <img className="h-[180px] ph:w-[100%] ph:mb-[5%]" src="фон (2).svg" alt="" />
            <div className="ml-[5%]">
            <h1 className="text-[18px]  font-[400]">{t("sect7.h2")}</h1>
            <img className='ph:ml-[35%]' src="рейтинг.svg" alt="" />
            <p className="text-[14px] font-[300] mt-[3%]">{t("sect7.h3")}</p>
            <p className="flex text[14px] ph:ml-[20%] font-[600] mt-[15%]">{t("sect7.h4")}<span className="ml-[10%] text-[14px] font-[300]">{t("sect7.h5")}</span></p>
            <p className="flex text[14px] font-[600] ph:ml-[18%]">{t("sect7.h6")}<span className="ml-[10%] text-[14px] font-[300]">{t("sect7.h7")}</span></p>
            </div>
          </div>
          <div className="w-[46%] flex justify-between ph:flex-col ph:text-center ph:w-[100%] shadow-2xl p-[10px] mt-[5%]">
            <img className="h-[180px] ph:w-[100%] ph:mb-[5%]" src="фон (17).svg" alt="" />
            <div className="ml-[5%]">
            <h1 className="text-[18px]  font-[400]">{t("sect7.h2")}</h1>
            <img className='ph:ml-[35%]' src="рейтинг.svg" alt="" />
            <p className="text-[14px] font-[300] mt-[3%]">{t("sect7.h3")}</p>
            <p className="flex text[14px] ph:ml-[20%] font-[600] mt-[15%]">{t("sect7.h4")}<span className="ml-[10%] text-[14px] font-[300]">{t("sect7.h5")}</span></p>
            <p className="flex text[14px] font-[600] ph:ml-[18%]">{t("sect7.h6")}<span className="ml-[10%] text-[14px] font-[300]">{t("sect7.h7")}</span></p>
            </div>
          </div>
          <div className="w-[46%] flex justify-between ph:flex-col ph:text-center ph:w-[100%] shadow-2xl p-[10px] mt-[5%]">
            <img className="h-[180px] ph:w-[100%] ph:mb-[5%]" src="фон (17).svg" alt="" />
            <div className="ml-[5%]">
            <h1 className="text-[18px]  font-[400]">{t("sect7.h2")}</h1>
            <img className='ph:ml-[35%]' src="рейтинг.svg" alt="" />
            <p className="text-[14px] font-[300] mt-[3%]">{t("sect7.h3")}</p>
            <p className="flex text[14px] ph:ml-[20%] font-[600] mt-[15%]">{t("sect7.h4")}<span className="ml-[10%] text-[14px] font-[300]">{t("sect7.h5")}</span></p>
            <p className="flex text[14px] font-[600] ph:ml-[18%]">{t("sect7.h6")}<span className="ml-[10%] text-[14px] font-[300]">{t("sect7.h7")}</span></p>
            </div>
          </div>
          <div className="w-[46%] flex justify-between ph:flex-col ph:text-center ph:w-[100%] shadow-2xl p-[10px] mt-[5%]">
            <img className="h-[180px] ph:w-[100%] ph:mb-[5%]" src="фон (2).svg" alt="" />
            <div className="ml-[5%]">
            <h1 className="text-[18px]  font-[400]">{t("sect7.h2")}</h1>
            <img className='ph:ml-[35%]' src="рейтинг.svg" alt="" />
            <p className="text-[14px] font-[300] mt-[3%]">{t("sect7.h3")}</p>
            <p className="flex text[14px] ph:ml-[20%] font-[600] mt-[15%]">{t("sect7.h4")}<span className="ml-[10%] text-[14px] font-[300]">{t("sect7.h5")}</span></p>
            <p className="flex text[14px] font-[600] ph:ml-[18%]">{t("sect7.h6")}<span className="ml-[10%] text-[14px] font-[300]">{t("sect7.h7")}</span></p>
            </div>
          </div>
        </div>
        <button className=" bg-gradient-to-r from-[#00C97B] ph:w-[60%] ph:ml-[20%] to-[#00D981] p-[10px] w-[20%] mt-[5%] text-[white] text-[20px] rounded-[50px] ">{t("sect7.h7")}</button>
        </div>


        <div className="w-[80%] m-auto mt-[8%]">
        <h1 className="text-[30px] font-[900] ph:text-[20px] ph:text-center">{t("sect8.h1")}</h1>
      <p className="text-[12] font-[300] mt-[3%] ph:mt-[10%]">{t("sect8.h2")}
</p>
      <p className="text-[12] font-[300] mt-[3%] ph:mt-[10%]">{t("sect8.h3")}


</p>
      <p className="text-[12] font-[300] mt-[3%] ph:mt-[10%]">{t("sect8.h4")}


</p>
      <p className="text-[12] font-[300] mt-[3%] ph:mt-[10%]">{t("sect8.h5")}
</p>

        </div>



        <div  className="w-[98%] rounded-[30px] p-[20px] mt-[8%] m-auto  bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]">
        <div className="w-[80%] m-auto text-[white] flex ph:flex-col justify-between items-center"> 
     
            <h1 className="text-[25px] w-[40%] font-[900] ph:w-[100%] ph:text-[20px] ph:text-center">{t("sect8.h6")}</h1>
           <TextField sx={{width:350,marginBottom:5,color:"white"}}
          id="standard-select-currency-native"
          select
          label="Страна:"
          defaultValue="Введите ваш email"
          SelectProps={{
            native: true,
          }}
          
          variant="standard"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
<button className=" bg-gradient-to-r from-[#00C97B] to-[#00D981] p-[10px] text-[16px] rounded-[50px] ">{t("sect8.h7")}</button>
          
        
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
    </div>
  )
}

export default Home