import React, { useState } from "react";
import branding from "../images/branding.png";
import group from "../images/group.png";
import access from "../images/access.png";
import time from "../images/time.png";
import opening from "../images/opening.png";
import jobs from "../images/jobs.png";
import sla from "../images/sla.png";
import ac from '../images/AC.png'

import monitring from "../images/monitring.png";

import mobile from "../images/mobile.png";
import email from "../images/email.png";

import contractorPrio from "../images/contractorPrio.png";

import contractorCom from "../images/contractorCom.png";

import pc from "../images/pc.png";
import lt from "../images/LT.png";

import finance from "../images/financeset.png";
import help from "../images/help1.png";
import Branding from "../Pages/Branding";
import Groups from "../Pages/Groups";
import TimeZone from "../Pages/TimeZone";

import Sla from "../Pages/Sla";
import Monitering from "../Pages/Monitering";
import AccessControl from "../Pages/AccessControl";
import OpeningHours from "../Pages/OPeningHours";
import JobEngin from "../Pages/JobEngin";
import MobileApp from "../Pages/MobileApp";
import AddEmail from "../Pages/AddEmail";
import ContractorPriority from "../Pages/ContractorPriority";
import ContracterCompliance from "../Pages/ContracterCompliance";
import LiecenseAndText from "../Pages/LiecenseAndText";
import SettingFinance from "../Pages/SettingFinance";



const SettingCard = () => {
  const [setting, setSetting] = useState(true);
  const [brands, setbrands] = useState(false);
  const [groups, setGroups] = useState(false);
  const [slaa, setSlaa] = useState(false);
  const [showMonitring, setShowMonitring] = useState(false);
  const [showAccess, setshowAccess] = useState(false)
  const [showTime, setshowTime] = useState(false)
  const [showOpen, setshowOpen] = useState(false)
  const [showJob, setshowJob] = useState(false)
  const [showMbl, setshowMbl] = useState(false)
  const [showEmail, setshowEmail] = useState(false)
  const [showContractor, setshowContractor] = useState(false)
  const [showCompliance, setshowCompliance] = useState(false)
  const [showLiecense, setshowLiecense] = useState(false)
  const [showFinance, setshowFinance] = useState(false)




  


  const handleBrand=()=>{
    setSetting(false)
    setbrands(true)

  }
  const handleGroups=()=>{
    setSetting(false)
    setGroups(true)

  }

  const handleSlaa=()=>{
    setSetting(false)
    setGroups(false)
    setbrands(false);
    setSlaa(true);

  }

  const handleShowMonitring=()=>{
    setSetting(false)
    setGroups(false)
    setbrands(false);
    setSlaa(false);
    setShowMonitring(true);

  }
  const handleAccess=()=>{
    setSetting(false)
    setGroups(false)
    setbrands(false);
    setSlaa(false);
    setshowAccess(true)

  }
  const handleTimeZone=()=>{
    setSetting(false)
    setGroups(false)
    setbrands(false);
    setSlaa(false);
    setshowAccess(false)
    setshowTime(true)

  }
  const handleOpeningHour=()=>{
    setSetting(false)
    setGroups(false)
    setbrands(false);
    setSlaa(false);
    setshowAccess(false)
    setshowTime(false)
    setshowOpen(true)

  }
  const handleJobEngin=()=>{
    setSetting(false);
    setGroups(false);
    setbrands(false);
    setSlaa(false);
    setshowAccess(false);
    setshowTime(false);
    setshowOpen(false);
    setshowJob(true);

  }



  const handleMblApp=()=>{
    setSetting(false)
    setGroups(false)
    setbrands(false);
    setSlaa(false);
    setshowAccess(false)
    setshowTime(false)
    setshowOpen(false)
    setshowJob(false)
    setshowMbl(true)

  }
  const handleAddEmail=()=>{
    setSetting(false)
    setGroups(false)
    setbrands(false);
    setSlaa(false);
    setshowAccess(false)
    setshowTime(false)
    setshowOpen(false)
    setshowJob(false)
    setshowMbl(false)
    setshowEmail(true)

  }
  const handleContractorPeriority=()=>{
    setSetting(false)
    setGroups(false)
    setbrands(false);
    setSlaa(false);
    setshowAccess(false)
    setshowTime(false)
    setshowOpen(false)
    setshowJob(false)
    setshowMbl(false)
    setshowEmail(false)
    setshowContractor(true)
  }
  const handleContractorCompliance=()=>{
    setSetting(false)
    setGroups(false)
    setbrands(false);
    setSlaa(false);
    setshowAccess(false)
    setshowTime(false)
    setshowOpen(false)
    setshowJob(false)
    setshowMbl(false)
    setshowEmail(false)
    setshowContractor(false)
    setshowCompliance(true)
  }
  const handleLiecenseAndText=()=>{
    setSetting(false)
    setGroups(false)
    setbrands(false);
    setSlaa(false);
    setshowAccess(false)
    setshowTime(false)
    setshowOpen(false)
    setshowJob(false)
    setshowMbl(false)
    setshowEmail(false)
    setshowContractor(false)
    setshowCompliance(false)
    setshowLiecense(true)
  }
  const handleFinance=()=>{
    setSetting(false)
    setGroups(false)
    setbrands(false);
    setSlaa(false);
    setshowAccess(false)
    setshowTime(false)
    setshowOpen(false)
    setshowJob(false)
    setshowMbl(false)
    setshowEmail(false)
    setshowContractor(false)
    setshowCompliance(false)
    setshowLiecense(false)
    setshowFinance(true)
  }


  return (
    <div className="px-8">
     {
      setting && 
      <div className="w-100">
        <div className="flex flex-wrap justify-between">
          <img
            src={branding}
            onClick={handleBrand}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>
          <img
            src={group}
            onClick={handleGroups}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>

          <img
            onClick={handleAccess}
            src={ac}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>

          <img
          onClick={handleTimeZone}
            src={time}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>

          <img
          onClick={handleOpeningHour}
            src={opening}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>
        </div>
        <div className="flex flex-wrap justify-between">
          <img
          onClick={handleJobEngin }
            src={jobs}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>
          <img onClick={()=>handleSlaa()} src={sla} className="object-fill h-48 cursor-pointer w-52"></img>

          <img
            onClick={()=>handleShowMonitring()}
            src={monitring}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>

          <img
           onClick={handleMblApp}
            src={mobile}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>

          <img
            onClick={handleAddEmail}
         
            src={email}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>
        </div>
        <div className="flex flex-wrap justify-between">
          <img
          onClick={handleContractorPeriority}
            src={contractorPrio}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>
          <img
          onClick={handleContractorCompliance}
            src={contractorCom}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>

          <img src={pc} className="object-fill h-48 cursor-pointer w-52"></img>

          <img
          onClick={handleLiecenseAndText}
           src={lt} className="object-fill h-48 cursor-pointer w-52"></img>

          <img
          onClick={handleFinance}
            src={finance}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>
        </div>
        <div className="flex flex-wrap justify-between">
          <img
            src={help}
            className="object-fill h-48 cursor-pointer w-52"
          ></img>
        </div>
      </div>
     }
     {
      brands && <Branding/>
     }
     {
      groups && <Groups/>
     }
     {
      showAccess && <AccessControl />
     }
     {
      slaa && <Sla />
     }
     {
      showMonitring && <Monitering />
     }
     {
      showTime && <TimeZone />
     }
     {
      showOpen && <OpeningHours />
     }
     {
      showJob && <JobEngin />
     }
     {
      showMbl && <MobileApp />
     }
     {
      showEmail && <AddEmail />
     }
     {
      showContractor && <ContractorPriority />
     }
     {
      showCompliance && <ContracterCompliance />
     }
     {
      showLiecense && <LiecenseAndText />
     }
     {
      showFinance && <SettingFinance />
     }
    </div>
  );
};

export default SettingCard;
