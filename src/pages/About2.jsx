import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
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
const About2 = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
    <div className="w-[98%] rounded-[30px] mt-[3%] m-auto p-[20px]  bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]">
    <div className="w-[80%] m-auto text-[white] ">
      <div className="w-[100%] mt-[1%]">
      <p className="text-[18px] font-[300] mt-[2%] ph:text-center ph:ml-[-5%]">{t("sec6.h1")}</p>
        <h1 className="text-[40px] font-[900] ph:text-[35px] ph:ml-[-8%] ph:text-center">{t("sec6.h0")}</h1>
      </div>
    </div>
  </div>

  <div data-aos="fade-down" className="w-[80%] m-auto flex justify-between mt-[5%] ph:flex-col">
     <div className="w-[24%] ph:w-[100%]">
      <img src="Иллюстрация (2).svg"className='ph:ml-[5%]' alt="" />
      <h1 className="text-[18px] w-[280px] ph:w-[100%] ph:text-center font-[900]">{t("sec6.h2")}</h1>
      <p className="text-[14px] font-[300] mt-[3%] ph:text-center">{t("sec6.h3")}</p>
      <button className='bg-[#41B7E9] text-[white] w-[50%] ph:ml-[25%] ph:mb-[8%] mt-[5%] p-[10px] rounded-[5px]'>Бесплатно</button>
     </div>
     <div className="w-[24%] ph:w-[100%]">
      <img src="Иллюстрация (6).svg"className='ph:ml-[5%]' alt="" />
      <h1 className="text-[18px] w-[280px] ph:w-[100%] ph:text-center font-[900]">{t("sec6.h2")}</h1>
      <p className="text-[14px] font-[300] mt-[3%] ph:text-center">{t("sec6.h3")}</p>
      <button className='bg-[#41B7E9] text-[white] w-[50%] ph:ml-[25%] ph:mb-[8%] mt-[5%] p-[10px] rounded-[5px]'>от £10.00</button>
     </div>
     <div className="w-[24%] ph:w-[100%]">
      <img src="Иллюстрация (4).svg"className='ph:ml-[5%]' alt="" />
      <h1 className="text-[18px] w-[280px] ph:w-[100%] ph:text-center font-[900]">{t("sec6.h2")}</h1>
      <p className="text-[14px] font-[300] mt-[3%] ph:text-center">{t("sec6.h3")}</p>
      <button className='bg-[#41B7E9] text-[white] w-[50%] ph:ml-[25%] ph:mb-[8%] mt-[5%] p-[10px] rounded-[5px]'>от £5.20</button>
     </div>
     <div className="w-[24%] ph:w-[100%]">
      <img src="Иллюстрация (5).svg"className='ph:ml-[5%]' alt="" />
      <h1 className="text-[18px] w-[280px] ph:w-[100%] ph:text-center font-[900]">{t("sec6.h2")}</h1>
      <p className="text-[14px] font-[300] mt-[3%] ph:text-center">{t("sec6.h3")}</p>
      <button className='bg-[#41B7E9] text-[white] w-[50%] ph:ml-[25%] ph:mb-[8%] mt-[5%] p-[10px] rounded-[5px]'>Бесплатно</button>
     </div>
      </div>    
    
      <div className="w-[80%] m-auto"> 
      <div className="w-[60%] mt-[5%] ph:w-[100%] ph:text-center">
      <h1 className="text-[25px] font-[900] ph:text-[20px]">{t("sec6.h4")}</h1>
      <p className="text-[12] font-[300] mt-[3%]">{t("sec6.h5")}</p>
      </div>

      <div className="w-[100%] shadow-xl rounded-[20px] p-[20px] mt-[8%] ">
     
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
        
      <button className=" bg-gradient-to-r ph:ml-[20%] ph:w-[60%] ph:mt-[5%] from-[#00C97B] to-[#00D981] p-[10px] w-[20%] mt-[2%] text-[white] text-[20px] rounded-[50px] ">Рассчитать</button>
        
      </div>

      <h1 className="text-[25px] font-[900] mt-[8%] ph:text-center">Варианты доставки:</h1>

      <div className="w-[100%] flex p-[20px] ph:text-center ph:pl-[0] shadow-2xl mt-[3%] ph:flex-col">
<div className="flex w-[50%] items-center ph:w-[100%] ph:flex-col ">
<img className="ph:ml-[8%]" src="Иконка (7).svg" alt="" />
<p className="text-[18px] ml-[5%] ph:text-center ph:mt-[5%]] font-[800]">{t("sect4.h5")}</p>
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
    
      </div>

      <div className="w-[80%] m-auto mt-[8%]">
      <h1 className="text-[25px] font-[900]">{t("sec6.h8")}</h1>
      <div className="w-[100%] mt-[5%] flex justify-between flex-wrap ph:flex-col">
      <div className="w-[48%] shadow-xl flex p-[30px] rounded-[10px] ph:w-[100%] ph:items-center ">
      <h1 className="text-[18px] font-[900] border-r-2  pr-[80px] ">{t("sec6.h2")}</h1>
      <div className=" ml-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[48%] shadow-xl flex p-[30px] rounded-[10px] ph:w-[100%] ph:items-center">
      <h1 className="text-[18px] font-[900] border-r-2  pr-[80px] ">{t("sec6.h2")}</h1>
      <div className=" ml-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[48%] shadow-xl flex p-[30px] rounded-[10px] ph:w-[100%] ph:items-center mt-[4%]">
      <h1 className="text-[18px] font-[900] border-r-2  pr-[80px] ">{t("sec6.h2")}</h1>
      <div className=" ml-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[48%] shadow-xl flex p-[30px] rounded-[10px] ph:w-[100%] ph:items-center mt-[4%]">
      <h1 className="text-[18px] font-[900] border-r-2  pr-[80px] ">{t("sec6.h2")}</h1>
      <div className=" ml-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[48%] shadow-xl flex p-[30px] rounded-[10px] ph:w-[100%] ph:items-center mt-[4%]">
      <h1 className="text-[18px] font-[900] border-r-2  pr-[80px] ">{t("sec6.h2")}</h1>
      <div className=" ml-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[48%] shadow-xl flex p-[30px] rounded-[10px] ph:w-[100%] ph:items-center mt-[4%]">
      <h1 className="text-[18px] font-[900] border-r-2  pr-[80px] ">{t("sec6.h2")}</h1>
      <div className=" ml-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[100%] shadow-xl flex p-[30px] items-center rounded-[10px] mt-[4%] ph:flex-col ">
      <div className="">
      <h1 className="text-[18px] font-[800] ph:text-[16px] ph:text-center">{t("sec6.h2")}</h1>
      <p className="text-[12px] block text-[#222222] ph:mt-[5%] ph:text-center">{t("sec6.h10")}</p>
      </div>
      <div className=" ml-[5%] border-l-2 pl-[40px] ph:border-none ph:ml-[-10%] ph:mt-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[100%] shadow-xl flex p-[30px] items-center rounded-[10px] mt-[4%] ph:flex-col ">
      <div className="">
      <h1 className="text-[18px] font-[800] ph:text-[16px] ph:text-center">{t("sec6.h2")}</h1>
      <p className="text-[12px] block text-[#222222] ph:mt-[5%] ph:text-center">{t("sec6.h10")}</p>
      </div>
      <div className=" ml-[5%] border-l-2 pl-[40px] ph:border-none ph:ml-[-10%] ph:mt-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[100%] shadow-xl flex p-[30px] items-center rounded-[10px] mt-[4%] ph:flex-col ">
      <div className="">
      <h1 className="text-[18px] font-[800] ph:text-[16px] ph:text-center">{t("sec6.h2")}</h1>
      <p className="text-[12px] block text-[#222222] ph:mt-[5%] ph:text-center">{t("sec6.h10")}</p>
      </div>
      <div className=" ml-[5%] border-l-2 pl-[40px] ph:border-none ph:ml-[-10%] ph:mt-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[100%] shadow-xl flex p-[30px] items-center rounded-[10px] mt-[4%] ph:flex-col ">
      <div className="">
      <h1 className="text-[18px] font-[800] ph:text-[16px] ph:text-center">{t("sec6.h2")}</h1>
      <p className="text-[12px] block text-[#222222] ph:mt-[5%] ph:text-center">{t("sec6.h10")}</p>
      </div>
      <div className=" ml-[5%] border-l-2 pl-[40px] ph:border-none ph:ml-[-10%] ph:mt-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[100%] shadow-xl flex p-[30px] items-center rounded-[10px] mt-[4%] ph:flex-col ">
      <div className="">
      <h1 className="text-[18px] font-[800] ph:text-[16px] ph:text-center">{t("sec6.h2")}</h1>
      <p className="text-[12px] block text-[#222222] ph:mt-[5%] ph:text-center">{t("sec6.h10")}</p>
      </div>
      <div className=" ml-[5%] border-l-2 pl-[40px] ph:border-none ph:ml-[-10%] ph:mt-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[100%] shadow-xl flex p-[30px] items-center rounded-[10px] mt-[4%] ph:flex-col ">
      <div className="">
      <h1 className="text-[18px] font-[800] ph:text-[16px] ph:text-center">{t("sec6.h2")}</h1>
      <p className="text-[12px] block text-[#222222] ph:mt-[5%] ph:text-center">{t("sec6.h10")}</p>
      </div>
      <div className=" ml-[5%] border-l-2 pl-[40px] ph:border-none ph:ml-[-10%] ph:mt-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      </div>
      </div>

      <div className="w-[80%] m-auto mt-[10%]">
      <h1 className="text-[25px] font-[900] ph:text-[20px] ph:text-center">Покупки с операторами Okeypost.com</h1>
      <div className="w-[100%] ">
      <div className="w-[100%] shadow-xl flex p-[30px] items-center rounded-[10px] mt-[4%] ph:flex-col ">
      <div className="">
      <h1 className="text-[18px] font-[800] ph:text-[16px] ph:text-center">{t("sec6.h2")}</h1>
      <p className="text-[12px] block text-[#222222] ph:mt-[5%] ph:text-center">{t("sec6.h10")}</p>
      </div>
      <div className=" ml-[5%] border-l-2 pl-[40px] ph:border-none ph:ml-[-10%] ph:mt-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[100%] shadow-xl flex p-[30px] items-center rounded-[10px] mt-[4%] ph:flex-col ">
      <div className="">
      <h1 className="text-[18px] font-[800] ph:text-[16px] ph:text-center">{t("sec6.h2")}</h1>
      <p className="text-[12px] block text-[#222222] ph:mt-[5%] ph:text-center">{t("sec6.h10")}</p>
      </div>
      <div className=" ml-[5%] border-l-2 pl-[40px] ph:border-none ph:ml-[-10%] ph:mt-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      </div>
      </div>


      <div className="w-[98%] rounded-[30px] mt-[8%] m-auto  bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]">
        <div className="w-[80%] m-auto text-[white] flex justify-between ph:flex-col"> 
         <img className="w-[35%] ph:w-[100%] ph:mt-[5%] pt-[3%]" src="Ресурс 1 6.svg" alt="" />
          <div className="w-[60%] ph:w-[100%] mt-[7%] mb-[5%]">
            <h1 className="text-[25px] ph:text-[20px] ph:text-center font-[900] ph:mb-[5%]">{t("sec6.h10")}</h1>
           <TextField sx={{width:220}}
          id="standard-select-currency-native"
          select
          label="Введите ссылку на товар"
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
<div className="flex ph:flex-col justify-between items-center text-[white]">
<button className=" bg-gradient-to-r ph:w-[50%] from-[#00C97B] to-[#00D981] p-[10px] mt-[5%] text-[16px] rounded-[50px] ">Попробовать</button>
<p className="text-[12px] ml-[5%] mt-[5%] ph:mt-[10%] ph:text-center">{t("sec6.h11")}</p>

</div>
          </div>
        
        </div>
      </div>

      <div className="w-[80%] m-auto mt-[10%]">
      <h1 className="text-[25px] font-[900] ph:text-center ph:text-[20px]">Покупки с операторами Okeypost.com</h1>
      <div className="w-[100%] ">
      <div className="w-[100%] shadow-xl flex p-[30px] items-center rounded-[10px] mt-[4%] ph:flex-col ">
      <div className="">
      <h1 className="text-[18px] font-[800] ph:text-[16px] ph:text-center">{t("sec6.h2")}</h1>
      <p className="text-[12px] block text-[#222222] ph:mt-[5%] ph:text-center">{t("sec6.h10")}</p>
      </div>
      <div className=" ml-[5%] border-l-2 pl-[40px] ph:border-none ph:ml-[-10%] ph:mt-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[100%] shadow-xl flex p-[30px] items-center rounded-[10px] mt-[4%] ph:flex-col ">
      <div className="">
      <h1 className="text-[18px] font-[800] ph:text-[16px] ph:text-center">{t("sec6.h2")}</h1>
      <p className="text-[12px] block text-[#222222] ph:mt-[5%] ph:text-center">{t("sec6.h10")}</p>
      </div>
      <div className=" ml-[5%] border-l-2 pl-[40px] ph:border-none ph:ml-[-10%] ph:mt-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[100%] shadow-xl flex p-[30px] items-center rounded-[10px] mt-[4%] ph:flex-col ">
      <div className="">
      <h1 className="text-[18px] font-[800] ph:text-[16px] ph:text-center">{t("sec6.h2")}</h1>
      <p className="text-[12px] block text-[#222222] ph:mt-[5%] ph:text-center">{t("sec6.h10")}</p>
      </div>
      <div className=" ml-[5%] border-l-2 pl-[40px] ph:border-none ph:ml-[-10%] ph:mt-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      </div>
      </div>
      <h1 className=" ml-[10%] mt-[5%] text-[25px] font-[900] ph:text-[20px] ph:text-center ph:ml-[0%]">Покупки с операторами Okeypost.com</h1>
      <div className="w-[80%] m-auto mt-[5%] flex justify-between flex-wrap">
      <div className="w-[48%] shadow-xl flex p-[30px] rounded-[10px] ph:w-[100%] ph:items-center">
      <h1 className="text-[18px] font-[900] border-r-2  pr-[80px] ">{t("sec6.h2")}</h1>
      <div className=" ml-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[48%] shadow-xl flex p-[30px] rounded-[10px] ph:w-[100%] ph:items-center">
      <h1 className="text-[18px] font-[900] border-r-2  pr-[80px] ">{t("sec6.h2")}</h1>
      <div className=" ml-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[48%] shadow-xl flex p-[30px] rounded-[10px] ph:w-[100%] ph:items-center mt-[4%]">
      <h1 className="text-[18px] font-[900] border-r-2  pr-[80px] ">{t("sec6.h2")}</h1>
      <div className=" ml-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[48%] shadow-xl flex p-[30px] rounded-[10px] ph:w-[100%] ph:items-center mt-[4%]">
      <h1 className="text-[18px] font-[900] border-r-2  pr-[80px] ">{t("sec6.h2")}</h1>
      <div className=" ml-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
            </div>
     </div>
      <div className="w-[48%] shadow-xl flex p-[30px] rounded-[10px] ph:w-[100%] ph:items-center mt-[4%]">
      <h1 className="text-[18px] font-[900] border-r-2  pr-[80px] ">{t("sec6.h2")}</h1>
      <div className=" ml-[5%]">
             
              <h1 className="font-[900] text-[16px]">£1.00/1 трек</h1>
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

export default About2