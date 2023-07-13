import React, { useState } from "react";
import { AiFillCopy, AiOutlineCaretDown } from "react-icons/ai";
// import { IoCopy } from "react-icons/io";
import copy from "../images/copy.png";
import "../../src/Style/PropertyDetail.css";
import mbl from "../images/mbl.png";
import AddNewJob from "./AddNewJob";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import QR from "../images/logo.png";
import EditProperty from "./EditPropertyDetail";
import EditPropertyDetail from "./EditPropertyDetail";
import AddCertificate from "./AddCertificate";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 340,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const styleSignUp = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const PropertyDetail = () => {
  const [PropertyDetail, setPropertyDetail] = useState(true);
  const [AddNewsJobs, setAddNewsJobs] = useState(false);
  const [EditProperty, setEditProperty] = useState(false);
  const [addCertificate, setaddCertificate] = useState(false);
  const [lanlord, setlanlord] = useState(false);




  const handleNewJobs = () => {
    setPropertyDetail(false);
    setAddNewsJobs(true);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // signUp Modal
  const [openSignUp, setopenSignUp] = React.useState(false);
  const handlePopOver = () => setopenSignUp(true);
  const handleCloseSignUp = () => setopenSignUp(false);
  


  const handleEditProperty=()=>{
    setPropertyDetail(false);
    setEditProperty(true);

  }

  const handleAddCertificate=()=>{
    setPropertyDetail(false);
    setaddCertificate(true)

  }
 

  return (
    <div>
      {PropertyDetail && (
        <div className="px-14 py-3">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold text-[#737475]">
              Property Details
            </h1>
            <div className="flex gap-x-3">
              <button
                className="bg-[#38bf67] font-semibold !outline-none text-white px-2 text-sm py-1 flex text-center items-center rounded-md"
                onClick={handleNewJobs}
              >
                Add New Job
              </button>
              <button
                onClick={handleOpen}
                className="text-[#38bf67] !outline-none font-semibold bg-green-100 px-2 text-sm py-1  flex text-center items-center rounded-md"
              >
                Get Link
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <h2 className="text-center text-xl text-[#333333] font-bold">
                      {" "}
                      Get Link
                    </h2>
                  </Typography>
                  <div>
                    <div className="py-2 flex justify-center items-start  w-auto flex-col">
                      <div className="m-auto">
                        <p className="flex gap-x-7">
                          <span className="font-semibold text-sm">Name:</span>{" "}
                          <span className="text-sm text-[#737475]">
                            Hazrat Zahid
                          </span>
                        </p>
                        <p className="flex gap-x-4">
                          <span className="font-semibold text-sm">
                            Contact:
                          </span>
                          <span className="text-sm text-[#737475]">
                            03369454688
                          </span>{" "}
                        </p>
                        <p className="flex gap-x-8">
                          <span className="font-semibold text-sm">Email:</span>
                          <span className="text-sm text-[#737475]">
                            zahid11@gmail.com
                          </span>{" "}
                        </p>
                        <p className="flex gap-x-7">
                          <span className="font-semibold text-sm">
                            Tenancy Expiry Date:{" "}
                          </span>
                          <span className="text-sm text-[#737475]">
                            22 December 2022
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="w-44  h-44  m-auto">
                      <img src={QR} className="w-full h-full object-fill" />
                    </div>
                    <div className="flex justify-between py-2">
                      <button
                        type="button"
                        className="border-[2px] border-[#407c1e] px-4 rounded-sm font-semibold text-[#407c1e] py-[1px]"
                      >
                        Cancel
                      </button>
                      <button className=" bg-[#407c1e] px-3  font-semibold text-white rounded-sm py-[1px]">
                        Download
                      </button>
                    </div>
                  </div>
                </Box>
              </Modal>

              <button
                onClick={handlePopOver}
                className="bg-white text-[#38bf67] !outline-none font-semibold border-[2px] text-sm py-1 border-[#38bf67] px-2  flex text-center items-center rounded-md"
              >
                Sign Up Info
              </button>
              <Modal
                open={openSignUp}
                onClose={handleCloseSignUp}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={styleSignUp}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <h1 className="text-2xl text-center font-bold">
                      Sign Up Info
                    </h1>
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 5 }}>
                    <div className="py-2 flex justify-between items-start   w-full ">
                      <div className="text-[#737475] flex flex-col gap-y-2 ">
                        <p className="font-semibold text-sm">Name:</p>
                        <p className="font-semibold text-sm">Contact:</p>
                        <p className="font-semibold text-sm">Email:</p>
                        <p className="font-semibold text-sm">
                          Tenancy Expiry Date:{" "}
                        </p>
                      </div>
                      <div className=" flex flex-col justify-end  gap-y-2  ">
                        <p className="text-sm text-[#737475] ">Hazrat Zahid</p>
                        <p className="text-sm text-[#737475]">03369454688</p>
                        <p className="text-sm text-[#737475]">
                          zahid11@gmail.com
                        </p>
                        <p className="text-sm text-[#737475]">
                          22 December 2022
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-3 mt-3">
                      <div>
                      <h4 className="text-sm font-semibold text-[#737475] ">Sent Info as:</h4>
                      <div className="px-2 flex gap-x-6 ">
                        <div className=" gap-x-3">
                          <input type="checkbox" />
                          <label className="text-sm ml-3 font-bold text-[#737475]  ">Email</label>
                        </div>
                        <div>
                          <input type="checkbox" />
                          <label className="text-sm ml-3 font-bold text-[#737475] ">Message</label>
                        </div>
                      </div>
                      </div>
                      <div className="flex justify-between py-2">
                      <button
                        type="button"
                        className="border-[2px] w-28 border-[#407c1e] px-4 rounded-sm font-semibold text-[#407c1e] py-[1px]"
                      >
                        Cancel
                      </button>
                      <button className=" bg-[#407c1e] px-4 w-28  font-semibold text-white rounded-sm py-[1px]">
                        Send
                      </button>
                    </div>
                    </div>
                  </Typography>
                </Box>
              </Modal>
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
              <div>
                <h2 className="font-bold text-[#737475]">Address</h2>
                <p className="text-sm text-[#737475]">
                  Peshawar KP Pakistan Mardan
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-bold text-[#737475]">Unique Code</h2>
                  <p className="text-sm text-[#737475]">102020</p>
                </div>
                <div>
                  <button
                    type="button"
                    className="flex items-center justify-center border-[1px] rounded-sm px-2 gap-x-2 border-[#38bf67] text-sm font-semibold text-[#38bf67] py-[1px] mt-1"
                  >
                    <img src={copy} className="w-4 h-4" /> Copy
                  </button>
                </div>
              </div>
              <div>
                <h2 className="font-bold text-[#737475]">Managed By</h2>
                <p className="text-sm text-[#737475]">Saqib Hussain</p>
              </div>
              <div className="">
                <div>
                  <h2 className="font-bold text-[#737475]">Notes</h2>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-[#737475]">
                      lorem ipsum ojsodjsnsnovs
                    </p>
                    <div className="flex justify-end">
                      <button
                      onClick={handleEditProperty}
                        type="button"
                        className="flex items-center !outline-none justify-center  rounded-sm px-2 gap-x-2 bg-[#38bf67] text-sm font-semibold text-white py-[6px] "
                      >
                        Edit Property
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-4 shadow-md border rounded-md">
              <h2 className="font-bold text-[#737475]">Compliance Reports</h2>
              <div className="ml-2  flex flex-col gap-y-0">
                <div className="">
                  <input type="checkbox" />
                  <label for="vehicle1" className="text-sm m-2 ">
                    Electrical Safety Check
                  </label>
                </div>
                <div className="mt-0">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1" className="text-sm m-2 ">
                    Electrical Safety Check
                  </label>
                </div>
                <div className="flex justify-between">
                  <div>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1" className="text-sm m-2 ">
                      Fire Safety Check
                    </label>
                  </div>
                  <p className="text-[#fc5461] text-sm font-semibold">
                    Not Compliance
                  </p>
                </div>
              </div>
              <h2 className="font-bold text-[#737475]">Additional Reports</h2>
              <div className="ml-2  flex flex-col gap-y-0">
                <div className="">
                  <input type="checkbox" />
                  <label for="vehicle1" className="text-sm m-2 ">
                    Energy Performance Check
                  </label>
                </div>
                <div className="mt-0">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1" className="text-sm m-2 ">
                    Inspection Report
                  </label>
                </div>
                <div className="flex justify-end">
                  <button onClick={handleAddCertificate} className="text-[#38bf67] !outline-none font-semibold bg-green-100 px-3 text-sm py-1  flex text-center items-center rounded-md">
                    Add Certificates
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-3">
              <h1 className="text-xl font-bold text-[#737475]">
                Landlord Info. *
              </h1>
            </div>
            <div className="border bg-red-500]  shadow-md  flex flex-col  items-center  rounded-lg">
              <div className="flex text-xs sm:text-base w-full  ">
                <div className=" w-[30%] ">
                  <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                    Name
                  </p>
                </div>
                <div className="w-[30%] ">
                  <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                    Contact
                  </p>
                </div>
                <div className="w-[30%] ">
                  <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                    Email
                  </p>
                </div>
                <div className="w-[10%] ">
                  <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                    Action
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className=" border-r w-[30%]">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Muneer Ahmad
                  </p>
                </div>
                <div className="w-[30%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    09009009009
                  </p>
                </div>
                <div className="w-[30%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    muneer100@gamil.com
                  </p>
                </div>
                <div className="w-[10%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    4
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className=" border-r w-[30%]">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[30%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[30%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[10%] ">
                  <div className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    <button className="bg-white text-[#38bf67] font-semibold border-[1px] text-xs py-[2px]  border-[#38bf67] px-2  flex text-center items-center rounded-md">
                      Add Landlord
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3">
              <h1 className="text-xl font-bold text-[#737475]">
                Tenant Info. *
              </h1>
            </div>{" "}
            <div className="border   shadow-md  flex flex-col  items-center  rounded-lg">
              <div className="flex text-xs sm:text-base w-full  ">
                <div className=" w-[5%] ">
                  <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                    Name
                  </p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                    Contact
                  </p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-base sm:py-2 font-bold  flex items-center justify-center text-center px-4 h-full">
                    <span>Email</span>
                    {/* <span>Tenancy Expiry Date</span> */}
                  </p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-base sm:py-2 font-bold  flex items-center justify-center text-center px-4 h-full">
                    <span>Tenancy Expiry Date</span>
                    {/* <span>Tenancy Expiry Date</span> */}
                  </p>
                </div>
                <div className="w-[15%] ">
                  <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                    Action
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className=" border-r w-[5%] flex items-center justify-center">
                  <img src={mbl} className="h-6 w-4"></img>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Muneer Ahmad{" "}
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    09009009009{" "}
                  </p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    muneer100@gamil.com
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    02/07/2022
                  </p>
                </div>
                <div className="w-[15%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    4
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className=" border-r w-[5%] flex items-center justify-center">
                  <img src={mbl} className="h-6 w-4"></img>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Hazrat Zahid
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    099887887
                  </p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    zahid11@gmail.com
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    02/07/2022
                  </p>
                </div>
                <div className="w-[15%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    4
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className=" border-r w-[5%] flex items-center justify-center"></div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full"></p>
                </div>
                <div className="w-[15%]">
                  <div className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    <button className="bg-white text-[#38bf67] font-semibold border-[1px] text-xs py-[2px]  border-[#38bf67] px-2  flex text-center items-center rounded-md">
                      Add Tenant
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3">
              <h1 className="text-xl font-bold text-[#737475]">
                Additional Tenant Info. *
              </h1>
            </div>{" "}
            <div className="border bg-red-500]  shadow-md  flex flex-col  items-center  rounded-lg">
              <div className="flex text-xs sm:text-base w-full  ">
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                    Name
                  </p>
                </div>
                <div className="w-[40%] ">
                  <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                    Contact
                  </p>
                </div>
                <div className="w-[40%] ">
                  <p className="text-xs sm:text-base sm:py-2 font-bold  flex items-center justify-center text-center px-4 h-full">
                    <span>Action</span>
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Muneer Ahmad{" "}
                  </p>
                </div>
                <div className="w-[40%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    09009009009{" "}
                  </p>
                </div>
                <div className="w-[40%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    muneer100@gamil.com
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Muneer Ahmad{" "}
                  </p>
                </div>
                <div className="w-[40%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    09009009009{" "}
                  </p>
                </div>
                <div className="w-[40%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    muneer100@gamil.com
                  </p>
                </div>
              </div>
            </div>
            {/* Associate Jobs */}
            <div className="py-3">
              <h1 className="text-xl font-bold text-[#737475]">
                Associated jobs *
              </h1>
            </div>{" "}
            <div className="border  shadow-md  flex flex-col  items-center  rounded-lg">
              <div className="flex text-xs sm:text-base w-full  ">
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                    Case No.
                  </p>
                </div>
                <div className="w-[20%] ">
                  <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                    Subject
                  </p>
                </div>
                <div className="w-[30%] ">
                  <p className="text-xs sm:text-base sm:py-2 font-bold  flex items-center justify-center text-center px-4 h-full">
                    <span>Description</span>
                  </p>
                </div>
                <div className="w-[30%] ">
                  <p className="text-xs sm:text-base sm:py-2 font-bold  flex items-center justify-center text-center px-4 h-full">
                    <span>Status</span>
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    09009009009{" "}
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Hazrat Zahid
                  </p>
                </div>
                <div className="w-[30%] border-r ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Lorem ipsum{" "}
                  </p>
                </div>
                <div className="w-[30%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center font-bold text-[#38bf67]  flex items-center justify-center h-full">
                    Open Jobs
                  </p>
                </div>
              </div>
              <div className="flex w-full border-t  ">
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    09009009009
                  </p>
                </div>
                <div className="w-[20%] border-r">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Basir khan{" "}
                  </p>
                </div>
                <div className="w-[30%] border-r ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                    Lorem ipsum{" "}
                  </p>
                </div>
                <div className="w-[30%] ">
                  <p className="text-xs sm:text-sm sm:py-2 text-center font-bold text-[#fc5461]  flex items-center justify-center h-full">
                    Close Jobs
                  </p>
                </div>
              </div>
            </div>
            {/* Chat History */}
            <div className="py-3">
              <h1 className="text-xl font-bold text-[#737475]">Chat History</h1>
            </div>{" "}
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
              <div className=" rounded-lg p-2 text-white bg-[#407c1e]">
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
            </div>
          </div>
        </div>
      )}
      {AddNewsJobs && (
        <div>
          <AddNewJob />
        </div>
      )}

      {
        EditProperty && 
      
        <EditPropertyDetail/>
      

        
      }
      {
        addCertificate && 
       <AddCertificate/>
        
      }
    </div>
  );
};

export default PropertyDetail;
