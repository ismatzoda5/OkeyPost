import React from 'react'
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import { useTranslation } from "react-i18next";
const About3 = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
      setExpanded((prevExpanded) => !prevExpanded);
    };
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
  return (
    <>
      <div className="w-[98%] rounded-[30px] mt-[2%] m-auto p-[25px]  bg-gradient-to-r from-[#5B52A3] to-[#40B8EA]">
    <div className="w-[80%] m-auto text-[white] ">
      <div className="w-[100%]">
      <p className="text-[18px] font-[300] mt-[1%] ph:ml-[15%]">{t("sec5.h1")}</p>
        <h1 className="text-[40px] font-[900] ph:text-[25px] ph:text-center">{t("sec5.h2")}</h1>
      </div>
    </div>
  </div>
  <div className="w-[80%] m-auto shadow-xl p-[20px] rounded-[10px] mt-[5%]">
    <p className='text-[14px] font-[700]'>{t("sec5.h3")}</p>

 <input type="text" className='border rounded-[5px] h-[40px] w-[100%] mt-[2%] pl-[20px]' placeholder='Введите свой вопрос...' />
  </div>


  <div data-aos="fade-down" className='w-[80%] m-auto mt-[8%]'>
  <h1 className="text-[25px] font-[900] ph:text-[20px] ph:text-center">{t("sec5.h0")}</h1>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  <div className='w-[80%] m-auto mt-[8%]'>
  <h1 className="text-[25px] font-[900]">{t("sec5.h6")}</h1>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
  
     
    </div>
  <div className='w-[80%] m-auto mt-[8%]'>
  <h1 className="text-[25px] font-[900]">{t("sec5.h7")}</h1>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
  
     
    </div>
  <div className='w-[80%] m-auto mt-[8%]'>
  <h1 className="text-[25px] font-[900]">{t("sec5.h8")}</h1>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
   
  
     
    </div>





    <div className='w-[80%] m-auto mt-[8%]'>
  <h1 className="text-[25px] font-[900]">{t("sec5.h9")}</h1>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
  
     
    </div>
    <div className='w-[80%] m-auto mt-[8%]'>
  <h1 className="text-[25px] font-[900]">{t("sec5.h10")}</h1>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
    
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          marginTop:2,padding:1,boxShadow:1
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{t("sec5.h4")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {t("sec5.h5")}
          </Typography>
        </AccordionDetails>
      </Accordion>
  
     
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

export default About3