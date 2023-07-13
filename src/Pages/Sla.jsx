import React, { useState } from "react";
import ResponseTimeLimit from "./ResponseTimeLimit";
import JobClosure from "./JobClosure";

function Sla() {
    const [slaa, setSlaa] = useState(true);
    const [showResponseTimeLimit, setShowResponseTimeLimit] = useState(false)
    const [jobClousre, setJobClousre] = useState(false)
    
    const handleResponseTimeLimit=(val)=>{
        setSlaa(!val);
        setShowResponseTimeLimit(val);
        setJobClousre(!val);
    }

    const handleJobClosure=(val)=>{
        setSlaa(!val);
        setShowResponseTimeLimit(!val);
        setJobClousre(val);
    }

    
  return (
    <div>
        {
            slaa && <div className="flex-row flex-wrap items-center justify-center gap-3 mt-3 md:mt-7 d-flex md:gap-4">
            <div className="p-4 border-[1px]  border-[#737475] max-w-sm rounded-md shadow-md border-opacity-20 ">
              <h5 className="opacity-100 text-[#B1B1B1] md:text-[25px] text-[20px] font-bold">
                Response time limit (max)
              </h5>
              <p className="opacity-100 text-[#DFE1E3] md:text-[20px] text-[17px] text-justify font-medium leading-6 mt-3">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet.
              </p>
              <h1 className=" text-center my-3 text-[#737475] font-bold leading-6 opacity-100 md:text-8xl text-3xl">
                02:00
                <span className="mt-3 text-[#737475] font-bold leading-6 opacity-100 md:text-2xl text-md">
                  hrs
                </span>
              </h1>
              <button
                onClick={()=>handleResponseTimeLimit(true)}
                type="button"
                className="bg-[#38BF67] w-full text-white md:text-2xl text-md font-bold rounded-md py-2 mt-3"
              >
                Edit
              </button>
            </div>
            <div className="p-4 border-[1px]  border-[#737475] max-w-sm rounded-md shadow-md border-opacity-20 ">
              <h5 className="opacity-100 text-[#B1B1B1] md:text-[25px] text-[20px] font-bold">
                Job Closure Time
              </h5>
              <p className="opacity-100 text-[#DFE1E3] md:text-[20px] text-[17px] text-justify font-medium leading-6 mt-3">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet.
              </p>
              <h1 className=" text-center my-3 text-[#737475] font-bold leading-6 opacity-100 md:text-8xl text-3xl">
                02
                <span className="mt-3 text-[#737475] font-bold leading-6 opacity-100 md:text-2xl text-md">
                  Days
                </span>
              </h1>
              <button
                type="button"
                onClick={()=>handleJobClosure(true)}
                className="bg-[#38BF67] w-full text-white md:text-2xl text-md font-bold rounded-md py-2 mt-3"
              >
                Edit
              </button>
            </div>
          </div>
        }
        {
            showResponseTimeLimit && <ResponseTimeLimit />
        }
        {
            jobClousre && <JobClosure />
        }
      
    </div>
  );
}

export default Sla;
