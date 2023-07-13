import React, { useRef, useState } from "react";
import { AiFillCopy, AiOutlineCaretDown } from "react-icons/ai";
// import { IoCopy } from "react-icons/io";
import "../../src/Style/PropertyDetail.css";
import AddNewJob from "./AddNewJob";
import { BsChevronDown } from "react-icons/bs";
import kitchen from "../images/kitchen.png";
import cooker from "../images/cooker.png";
import fan from "../images/fan.png";
import { MdArrowForwardIos } from "react-icons/md";
import LandLordApproval from "./LandLordApproval";
import GetQoute from "./GetQoute";

const JobDetail = () => {
  const [jobDetail, setjobDetail] = useState(true);
  const [Landlord, setLandlord] = useState(true);

  const [AddNewsJobs, setAddNewsJobs] = useState(false);

  const [getQout, setgetQout] = useState(false);

  const handleNewJobs = () => {
    setjobDetail(false);
    setAddNewsJobs(true);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // signUp Modal
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log(files); // Do something with the selected files
  };
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger click on file input when button is clicked
  };

  const handleLandlord = () => {
    setjobDetail(false);
    setLandlord(true);
  };
  const handleGetQoute = () => {
    setjobDetail(false);
    setgetQout(true);
    setLandlord(false);
  };

  return (
    <div>
      {jobDetail && (
        <div className="px-14 py-3">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold text-[#737475]">Job Details</h1>
            <div className="flex gap-x-3">
              <button
                onClick={handleLandlord}
                className="bg-green-100 text-[#38bf67] font-semibold !outline-none  text-xs py-2 w-28  text-center rounded-md"
              >
                Landlord Approval
              </button>
              <button
                onClick={handleGetQoute}
                className="text-[#38bf67] !outline-none font-semibold border-[2px] border-[#38bf67]  text-xs py-2 w-28  text-center rounded-md"
              >
                Get Quote
              </button>

              <button
                // onClick={handlePopOver}
                className="text-white bg-[#38bf67] !outline-none font-semibold text-xs py-2 w-28 rounded-md"
              >
                Close Job
              </button>

              <button
                className="bg-[#38bf67] text-white px-2  flex text-sm py-1 text-center items-center rounded-md"
                type="button"
              >
                <AiOutlineCaretDown className="text-xl" />
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-y-4 flex-col py-3 lg:flex-row gap-x-7">
            <div className="lg:w-1/2 p-4 flex flex-col gap-y-3 border rounded-md shadow-md">
              <div className="flex justify-end text-xs gap-x-2 text-[#b1b1b1]">
                <p>24 Sep, 2022</p>
                <p>02:44 pm</p>
              </div>
              <div className="flex gap-x-5">
                <p className="font-bold text-sm text-[#737475]">Case Number:</p>
                <p className="text-sm text-[#737475]">100070</p>
              </div>

              <div className="flex gap-x-5">
                <p className="font-bold text-sm text-[#737475]">
                  Property Address:
                </p>
                <p className="text-sm text-[#737475]">
                  124 Broad Street, Swindon, SN1 2AB
                </p>
              </div>

              <div className="flex gap-x-5">
                <p className="font-bold text-sm text-[#737475]">Reported By:</p>
                <p className="text-sm text-[#38bf67]">Andrew</p>
              </div>

              <div className="flex gap-x-5">
                <p className="font-bold text-sm text-[#737475]">Mobile No:</p>
                <p className="text-sm text-[#737475]">0212101323213</p>
              </div>

              <div className="flex gap-x-5">
                <p className="font-bold text-sm text-[#737475]">
                  Email Address:
                </p>
                <p className="text-sm text-[#737475]">andrew@gmail.com</p>
              </div>

              <div className="flex gap-x-5">
                <p className="font-bold text-sm text-[#737475]">
                  Job reported through:
                </p>
                <p className="text-sm text-[#737475]">Mobile</p>
              </div>
            </div>
            <div className="lg:w-1/2 p-4 flex flex-col gap-y-5 shadow-md border rounded-md">
              <div className="flex items-center justify-between ">
                <label className="font-bold text-sm text-[#737475] mt-1">
                  Severity:
                </label>
                <div className="input-field h-8 w-[70%]">
                  <input type="search" placeholder="None-Emergency" />
                  <BsChevronDown />
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <label className="font-bold text-sm text-[#737475] mt-1">
                  Status:
                </label>
                <div className="input-field h-8 w-[70%]">
                  <input type="search" placeholder="New" />
                  <BsChevronDown />
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <label className="font-bold text-sm text-[#737475] mt-1">
                  Assignment:
                </label>
                <div className="flex items-center  w-[70%] relative py-[2px] ">
                  <input
                    className=" rounded-sm w-  px-2 focus:outline-none py-[4px] border"
                    type="text"
                    placeholder="1000001"
                  />
                  <button className="bg-[#38bf67] text-xs absolute left-[66.2%] hover:bg-blue-700 t text-white font-semibold py-1 px-1 rounded-sm">
                    Assign Engineer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border   shadow-md flex flex-col gap-y-6  p-4 rounded-lg">
              <div>
                <h1 className="text-lg font-bold text-[#737475]">
                  Issue Report:
                </h1>
                <div className="flex gap-x-2 py-3">
                  <div className="w-20 h-20">
                    <img
                      src={kitchen}
                      className="w-full h-full object-fill"
                    ></img>
                  </div>
                  <div className=" flex justify-center items-center">
                    <MdArrowForwardIos className="text-[#737475] text-xl" />
                  </div>
                  <div className="w-20 h-20">
                    <img
                      src={cooker}
                      className="w-full h-full object-fill"
                    ></img>
                  </div>
                  <div className=" flex justify-center items-center">
                    <MdArrowForwardIos className="text-[#737475] text-xl" />
                  </div>
                  <div className="w-20 h-20">
                    <img src={fan} className="w-full h-full object-fill"></img>
                  </div>
                </div>
              </div>
              <div>
                <h1 className=" font-bold text-[#737475]">Description:</h1>
                <p className="text-[#737475] text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et.
                </p>
              </div>
              <div>
                <h1 className=" font-bold text-[#737475]">Reported Issue:</h1>
                <p className="text-[#737475] text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et.
                </p>
              </div>
              <div>
                <div>
                  <h1 className=" font-bold text-[#737475]">Attachment:</h1>
                </div>
                <div className="flex gap-x-3 py-2 px-3">
                  <div className="h-14 w-16 border rounded-xl"></div>
                  <div className="h-14 w-16 border rounded-xl"></div>

                  <div className="h-14 w-16 border rounded-xl"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-4 py-4 mt-8">
              <div className="w-1/2 flex gap-x-4 items-center">
                <div className=" ">
                  <button
                    type="button"
                    className="bg-[#38bf67] text-white h-8 w-24 rounded-lg text-sm font-semibold "
                  >
                    To
                  </button>
                </div>
                <div className="input-field1 flex border w-full  h-8 items-center rounded-lg px-2">
                  <input type="search" placeholder="Text" />
                  <BsChevronDown />
                </div>
              </div>
              <div className="w-1/2 flex gap-x-4 items-center">
                <div className=" ">
                  <p className="text-[#737475] font-semibold">Recipient:</p>
                </div>
                <div className="input-field1 flex border w-full  h-8 items-center rounded-lg px-2">
                  <input type="search" placeholder="Recipient Name *" />
                  {/* <BsChevronDown /> */}
                </div>
              </div>
            </div>
            <div className="border   shadow-md p-10 flex flex-col  items-center  rounded-lg">
              <textarea
                class="w-full !outline-none border rounded-lg p-2"
                placeholder="Notes *"
                rows="4"
              ></textarea>
              <div className="py-3 w-full">
                <div className="input-field1 border w-full rounded-lg px-2 py-1  flex justify-between">
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    placeholder=""
                  />
                  <p className="text- text-[#b1b1b1]"> Upload Attachment</p>

                  <button
                    onClick={handleButtonClick}
                    className="border text-[#407c1e]  px-1 rounded-sm !outline-none  text-sm font-bold "
                  >
                    Choose File
                  </button>
                </div>
              </div>
              <div className=" w-full flex justify-end">
                <button
                  type="button"
                  className="bg-[#38bf67] text-white h-6 w-24 rounded-lg text-sm font-semibold "
                >
                  Save
                </button>
              </div>
            </div>
            {/* Associate Jobs */}
            {/* Chat History */}
            <div className="py-3">
              <h1 className="text-xl font-bold text-[#737475]">Activity</h1>
            </div>
            <div className="border p-3  shadow-md  flex flex-col gap-y-4  items-center  rounded-lg">
              <div className="border-[2px] rounded-lg p-2 border-[#407c1e]">
                <div className="flex justify-between">
                  <h1 className="font-bold text-[#737475]">Contractor</h1>
                  <div className="text-[#737475] flex gap-x-4 text-xs font-semibold">
                    <p>24 Sep, 2022</p>
                    <p>02:44 pm</p>
                  </div>
                </div>

                <p className="text-sm py-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>

              <div className=" rounded-lg p-2 text-white bg-[#38bf67]">
                <div className="flex justify-between">
                  <h1 className="font-bold ">You</h1>
                  <div className=" flex gap-x-10 lg:gap-x-24 text-xs font-semibold">
                    <p>24 Sep, 2022</p>
                    <p>02:44 pm</p>
                  </div>
                </div>

                <p className="text-sm py-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
              <div className="border-[2px] rounded-lg p-2 border-[#407c1e]">
                <div className="flex justify-between">
                  <h1 className="font-bold text-[#737475]">Email</h1>
                  <div className="text-[#737475] flex gap-x-4 text-xs font-semibold">
                    <p>24 Sep, 2022</p>
                    <p>02:44 pm</p>
                  </div>
                </div>

                <p className="text-sm py-2 text-[#737475]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
              <div className="border-[2px] rounded-lg p-2 border-[#407c1e]">
                <div className="flex justify-between">
                  <h1 className="font-bold text-[#737475]">Email</h1>
                  <div className="text-[#737475] flex gap-x-4 text-xs font-semibold">
                    <p>24 Sep, 2022</p>
                    <p>02:44 pm</p>
                  </div>
                </div>

                <p className="text-sm py-2 text-[#737475]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
              <div className="border-[2px] rounded-lg p-2 border-[#407c1e]">
                <div className="flex justify-between">
                  <h1 className="font-bold text-[#737475]">Resolution Notes</h1>
                  <div className="text-[#737475] flex gap-x-4 text-xs font-semibold">
                    <p>24 Sep, 2022</p>
                    <p>02:44 pm</p>
                  </div>
                </div>

                <p className="text-sm py-2 text-[#737475]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>

                <div className="flex items-center  gap-x-3">
                  <p className="w-20 h-8 flex items-center text-sm text-[#737475] font-semibold">
                    Attachment:
                  </p>
                  <div className="w-20 h-8 border rounded-lg"></div>
                  <div className="w-20 h-8 border rounded-lg"></div>
                  <div className="w-20 h-8 border rounded-lg"></div>
                  <div className="w-20 h-8 border rounded-lg"></div>
                </div>
              </div>
              <div className="border-[2px] rounded-lg w-full p-2 border-[#407c1e]">
                <div className="flex justify-between">
                  <h1 className="font-bold text-[#737475]">Job Status</h1>
                  <div className="text-[#737475] flex gap-x-4 text-xs font-semibold">
                    <p>24 Sep, 2022</p>
                    <p>02:44 pm</p>
                  </div>
                </div>
                <div className="py-1">
                  <button
                    type="button"
                    className="w-full bg-[#fc5461] text-white rounded-lg py-1"
                  >
                    Pending
                  </button>
                </div>
              </div>
            </div>
            <div className="px-6 m-8">
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="text-[#407c1e] border-[2px] w-32 rounded-sm py-1 border-[#407c1e] text-sm font-bold"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-[#407c1e] text-white border-[2px] w-32 rounded-sm py-1 border-[#407c1e] text-sm font-bold"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {AddNewsJobs && (
        <div>
          <AddNewJob />
        </div>
      )}
      {Landlord && <LandLordApproval />}
      {getQout && <GetQoute />}
    </div>
  );
};

export default JobDetail;
