import React, { useState } from "react";
import jobass from "../images/jobAss.png";
import message from "../images/messageJ.png";

import auto from "../images/auto.png";
import jobnot from "../images/jobnot.png";

import btntop from "../images/btntop.png";
import JobAssignment from "./JobAssignment";
import AutoRespond from "./AutoRespond";
import JobNotification from "./JobNotification";
import Message from "./Message";

const JobEngin = () => {
  const [jobAssign, setjobAssign] = useState(false);
  const [jobEngin, setjobEngin] = useState(true);
  const [autoRes, setautoRes] = useState(false);
  const [showJobNoti, setshowJobNoti] = useState(false);
  const [showMessage, setshowMessage] = useState(false);



  const handleJobAssingment = () => {
    setjobEngin(false);
    setjobAssign(true);
  };
  const handleAutoRespond = () => {
    setjobEngin(false);
    setjobAssign(false);
    setautoRes(true)
  };
const handleJobNot=()=>{
  setjobEngin(false);
  setjobAssign(false);
  setautoRes(false)
  setshowJobNoti(true)

}
const handleMessage=()=>{
  setjobEngin(false);
  setjobAssign(false);
  setautoRes(false)
  setshowJobNoti(false)
  setshowMessage(true)

}

  return (
    <>
      {jobEngin && (
        <div className="flex justify-between px-40 py-4">
          <div
            onClick={handleJobAssingment}
            className="w-44  flex p-2 flex-col rounded-md shadow-md border cursor-pointer h-48 gap-y-3"
          >
            <div className="flex justify-end  ">
              <img src={btntop} className="h-6 w-10" />
            </div>
            <div>
              <img src={jobass} className="w-24 h-24 object-fill m-auto" />
            </div>
            <div>
              <h3 className="font-bold text-[#737475] text-center">
                Job Assignment
              </h3>
            </div>
          </div>
          <div onClick={handleAutoRespond} className="w-44 object-fill flex p-2 flex-col rounded-md shadow-md border cursor-pointer h-48 gap-y-3">
            <div className="flex justify-end  ">
              <img src={btntop} className="h-6 w-10" />
            </div>
            <div>
              <img src={auto} className="w-24 h-24 object-fill m-auto" />
            </div>
            <div>
              <h3 className="font-bold text-[#737475] text-center">
              Auto Responder
              </h3>
            </div>
          </div>
          <div onClick={handleJobNot} className="w-44 object-fill flex p-2 flex-col rounded-md shadow-md border cursor-pointer h-48 gap-y-3">
            <div className="flex justify-end  ">
              <img src={btntop} className="h-6 w-10" />
            </div>
            <div>
              <img src={jobnot} className="w-24 h-24 object-fill m-auto" />
            </div>
            <div>
              <h3 className="font-bold text-[#737475] text-center">
                Job Notification
              </h3>
            </div>
          </div>
          <div onClick={handleMessage} className="w-44 object-fill flex p-2 flex-col rounded-md shadow-md border cursor-pointer h-48 gap-y-3">
            <div className="flex justify-end  ">
              <img src={btntop} className="h-6 w-10" />
            </div>
            <div>
              <img src={message} className="w-24 h-24 object-fill m-auto" />
            </div>
            <div>
              <h3 className="font-bold text-[#737475] text-center">
                Message
              </h3>
            </div>
          </div>
        </div>
      )}
      {jobAssign && <JobAssignment />}
      {
        autoRes && <AutoRespond/>
      }
      {
        showJobNoti && <JobNotification/>
      }
      {
        showMessage && <Message/>
      }
    </>
  );
};

export default JobEngin;
