import React, { useState } from "react";
import DashBoardCardData from "../Config/DashBoardCardData";
import "../Style/Card.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ImCross } from "react-icons/im";
import Chart from "react-apexcharts";
import suitcase from "../images/suitcase.png";
import downArrow from "../images/downArrow.png";
import ReactSpeedometer from "react-d3-speedometer";
import ModelOne from "./ModalOne";
import ModelTwo from "./ModalTwo";
import ModelThree from "./ModelThree";
import { BsExclamationCircle } from "react-icons/bs";

const style = {
  position: "absolute",
  top: "50%",
  left: "80%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const DashBoardCard = () => {
  const [openOne, setOpenOne] = useState(false);
  const handleOpenOne = () => {
    setOpenOne(true);
  };
  const handleCloseOne = () => {
    setOpenOne(false);
  };

  const [openTwo, setOpenTwo] = useState(false);
  const handleOpenTwo = () => {
    setOpenTwo(true);
  };
  const handleCloseTwo = () => {
    setOpenTwo(false);
  };

  const [openThree, setOpenThree] = useState(false);
  const handleOpenThree = () => {
    setOpenThree(true);
  };
  const handleCloseThree = () => {
    setOpenThree(false);
  };

  const chartOptionsOne = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },

      dataLabels: {
        enabled: false,
      },
    },
    xaxis: {
      categories: ["this Months", "September", "August", "July", "Jun", "May"],
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%", // Adjust the width of the bars
      },
    },
    dataLabels: {
      enabled: false, // Disable the data labels
    },
    colors: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#FF00FF"],
  };

  const chartSeriesOne = [
    {
      name: "Emergency",
      data: [47, 50, 40, 45, 48, 60],
      color: "#38bf67", // First pair color
    },
  ];

  /////Speed meter

  return (
    <div className="flex py-6 gap-x-4 ">
      {DashBoardCardData.map((items, index) => (
        <div
          key={items.id}
          onClick={() => {
            if (index === 0) {
              handleOpenOne();
            }
            if (index === 1) {
              handleOpenTwo();
            }
            if (index === 2) {
              handleOpenThree();
            }
          }}
          className="relative flex flex-col items-center justify-center w-1/4 py-10 border shadow-md cursor-pointer rounded-xl h-60"
        >
          <ModelOne open={openOne} handleClose={handleCloseOne} />
          <ModelTwo open={openTwo} handleClose={handleCloseTwo} />
          <ModelThree open={openThree} handleClose={handleCloseThree} />

          <button
            type="button"
            className="absolute text-xl outline-none custom-button right-2 top-1"
          >
            {items.btn}
          </button>
          <h1 className="text-[50px] font-extrabold">{items.number}</h1>
          <p className="text-[#737475] text-sm font-semibold">{items.time}</p>
          <div className="font-bold">
            <p className="flex gap-x-3">
              {items.comp}
              {items.colon}
              <span className="text-[#38bf67]">{items.percent}</span>
            </p>
            <p className="flex gap-x-3">
              {items.Ncom}
              {items.colon}
              <span className="text-[#737475]">{items.percent}</span>
            </p>
            <p className="flex gap-x-3">
              {items.exp}
              {items.colon}
              <span className="text-red-400">{items.percent}</span>
            </p>
          </div>
          <div className="absolute bottom-0 flex items-center justify-center w-full bg-blue-100 rounded-b-lg h-9 gap-x-3 ">
            <img src={items.icons} className="w-5 h-5" />
            <p className="font-bold text-[#737475]">{items.open}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashBoardCard;
