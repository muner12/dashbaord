import { AiOutlineExclamationCircle } from "react-icons/ai";

const ResponseTimeLimit = () => {
  return (
    <div className="py-8">
      <div>
        <div className="flex-row flex-wrap items-center justify-center gap-3 mt-3 md:mt-5 d-flex md:gap-4">
          <div className="p-4 border-[1px]  border-[#737475] max-w-md rounded-md shadow-md border-opacity-20 ">
            <h5 className="opacity-100 text-[#B1B1B1]  text-[20px] font-bold">
              Response time limit (max)
            </h5>
            <p className="opacity-100 text-[#DFE1E3]  text-[17px] text-justify font-medium leading-6 mt-3">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet.
            </p>
            <select className="w-full border-[1px] border-[#B1B1B1] text-[16px] font-bold text-[#737475] text-opacity-50 outline-none px-3 py-2 rounded-md my-3">
              <option>Time/Day</option>
            </select>
            <div className="flex flex-col items-center justify-center w-full gap-2 md:flex-row">
              <button className="text-[20px]   font-bold rounded-lg max-h-min px-3 pt-2 leading-none pb-3 text-center text-white bg-[#737475]">
                -
              </button>
              <div className="flex items-center gap-3">
                <h1 className=" border-[1px] border-[#707070] text-[20px] font-bold text-[#737475]  outline-none px-3 py-2 rounded-lg ">
                  02
                </h1>
                <p className=" text-[#737475] text-center font-bold leading-6 opacity-100 md:text-3xl text-lg">
                  :
                </p>
                <h1 className=" border-[1px] border-[#707070] text-[20px] font-bold text-[#737475]  outline-none px-3 py-2 rounded-lg ">
                  00
                </h1>
              </div>
              <button className="text-[20px]  font-bold rounded-lg max-h-min px-2  pt-2 leading-none pb-3 text-center text-white bg-[#38BF67]">
                +
              </button>

              <span className="mt-3 text-[#737475] font-bold leading-6 opacity-100 md:text-xl text-md">
                hrs
              </span>
            </div>
            <div className="flex flex-row items-center justify-start gap-3 my-3">
              <div>
                <input
                  type="checkbox"
                  className="w-5  m-0 p-0 checked:border-[#38BF67] checked::text-[#38BF67] checked:bg-[#38BF67]"
                />
              </div>
              <p className="m-0 text-center text-[18px] font-medium text-[#737475]">
                Working hours only
              </p>
              <div>
                <AiOutlineExclamationCircle color="#737475" size={22} />
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 md:flex-row justify-normal">
              <button
                type="button"
                className="border-[1px] border-[#737475] rounded-lg text-1xl font-bold text-[#737475] w-48 py-1"
              >
                Cancel
              </button>
              <button
                type="button"
                className=" rounded-lg text-1xl font-bold text-white bg-[#38BF67] w-48 py-1"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseTimeLimit;
