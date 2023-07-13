import { Box, Modal } from "@mui/material";
import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { BsExclamationCircle } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import suitcase from "../images/suitcase.png";
import downArrow from "../images/downArrow.png";
import Chart from "react-apexcharts";

const style = {
  position: "absolute",
  top: "50%",
  left: "80%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: "100%",
  overflowY: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  // p: 4,
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

const ModalThree = ({ open, handleClose }) => {
    const percentage = 77;
  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="flex items-center justify-between w-full p-4 text-2xl font-semibold text-white bg-green-500 rounded-sm ">
          <div className="flex items-center gap-x-2">
            <img src={suitcase} className="object-cover w-5 h-5 text-white" />
            <h1>Job Close</h1>
          </div>
          <div
            onClick={() => handleClose()}
            className="w-6 h-6 p-1 bg-black rounded-sm"
          >
            <ImCross className="text-base font-normal" />
          </div>
        </div>
        <div className="px-10 ">
          <div className="flex justify-between mt-3 gap-x-3 ">
            <div className="w-1/2 border rounded-md shadow-sm ">
              <div className=" h-44">
                <ReactSpeedometer
                  fluidWidth={true}
                  ringWidth={20}
                  value={percentage}
                  minValue={0}
                  maxValue={100}
                  height={130}
                  needleHeightRatio={0.3}
                  needleColor="black"
                  segments={1}
                  startColor={`rgba(33, 197, 219, ${percentage / 100})`}
                  endColor="#DFE1E3"
                  customSegmentLabels={[]}
                />
              </div>
              <hr />
              <h3 className="py-1 font-semibold text-center">
                Current Response Time
              </h3>
            </div>
          </div>
          <div className="py-2 mt-3 border rounded-md shadow-sm">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold px-3 text-[#737475]">
                Total Jobs & Time Comparison
              </h1>
              <div className="flex justify-end px-2 m-2">
                {" "}
                <BsExclamationCircle className="text-2xl text-gray-500" />
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between px-4 py-1">
              <p className="font-semibold gap-y-3 flex flex-col text-[#737475]">
                <span>Total Jobs</span>

                <span className="text-sm text-center">10</span>
              </p>
              <p className="font-semibold flex gap-y-3 flex-col  text-[#737475]">
                <span>Jobs responded width in time</span>

                <span className="text-sm text-center">10</span>
              </p>
              <p className="font-semibold flex flex-col gap-y-3 text-[#737475]">
                <span>Late responded Jobs</span>

                <span className="text-sm text-center">10</span>
              </p>
            </div>
          </div>
          <div className="mt-3 border rounded-md shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold px-3 text-[#737475]">
                  Previous Month Comparison
                </h1>
                <div className="object-fill w-5">
                  <img src={downArrow} />
                </div>
              </div>
              <div className="flex justify-end px-2 m-2">
                {" "}
                <BsExclamationCircle className="text-2xl text-gray-500" />
              </div>
            </div>
            <hr />
            <Chart
              options={chartOptionsOne}
              series={chartSeriesOne}
              type="bar"
              height="250"
            />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalThree;
