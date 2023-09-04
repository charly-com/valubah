import icon from "../assets/icon.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import { BiUpArrowAlt } from "react-icons/bi";
import Charts from "./Charts";

const Main = () => {
  return (
    <div className="p-4 ">
      <div className="flex flex-col w-[30%] h-[60%]  ">
        <p className="font-montserrat font-normal text-sm leading-5 ">
          Friday, August 4th
        </p>
        <p className="font-montserrat font-semibold text-base leading-7">
          Good morning, Olamide
        </p>
      </div>
      <div className="flex justify-between py-5">
        <div className="border border-r-amber-50 w-[24%] h-[180px] rounded-md">
          <div className="p-3">
            <img src={icon} />
            <p className="text-[#3B3B3B] font-montserrat font-medium text-base leading-[21px] py-2">
              Registered Customers
            </p>
            <div className="flex justify-between items-center">
              <p className="text-[#3B3B3B] font-montserrat font-semibold text-xl leading-[28.8px] pb-4">
                720.2k
              </p>
              <p className="rounded-full  py-1 px-2 bg-[#E0FFE0] font-montserrat flex font-medium text-xs leading-[18px] text-[#146614]">
                <BiUpArrowAlt /> 2.9%
              </p>
            </div>
            <p className="text-[#6C6C6C] font-montserrat font-normal text-sm leading-4 ">
              Compared to 699k last week
            </p>
          </div>
        </div>
        <div className="border border-r-amber-50 w-[24%] h-[180px] rounded-md">
          <div className="p-3">
            <img src={icon2} />
            <p className="text-[#3B3B3B] font-montserrat font-medium text-base leading-[21px] py-2">
              Active Customers
            </p>
            <div className="flex justify-between items-center">
              <p className="text-[#3B3B3B] font-montserrat font-semibold text-xl leading-[28.8px] pb-4">
                645.7k
              </p>
              <p className="rounded-full  py-1 px-2 bg-[#E0FFE0] font-montserrat flex font-medium text-xs leading-[18px] text-[#146614]">
                <BiUpArrowAlt /> 2.9%
              </p>
            </div>
            <p className="text-[#6C6C6C] font-montserrat font-normal text-sm leading-4">
              Compared to 699k last week
            </p>
          </div>
        </div>
        <div className="border border-r-amber-50 w-[24%] h-[180px] rounded-md">
          <div className="p-3">
            <img src={icon3} />
            <p className="text-[#3B3B3B] font-montserrat font-medium text-base leading-[21px] py-2">
              Active Customers
            </p>
            <div className="flex justify-between items-center">
              <p className="text-[#3B3B3B] font-montserrat font-semibold text-xl leading-[28.8px] pb-4">
                326.7k
              </p>
              <p className="rounded-full  py-1 px-2 bg-[#E0FFE0] font-montserrat flex font-medium text-xs leading-[18px] text-[#146614]">
                <BiUpArrowAlt /> 2.9%
              </p>
            </div>
            <p className="text-[#6C6C6C] font-montserrat font-normal text-sm leading-4">
              Compared to 699k last week
            </p>
          </div>
        </div>
        <div className="border border-r-amber-50 w-[24%] h-[180px] rounded-md">
          <div className="p-3">
            <img src={icon} />
            <p className="text-[#3B3B3B] font-montserrat font-medium text-base leading-[21px] py-2">
              Active Customers
            </p>
            <div className="flex justify-between items-center">
              <p className="text-[#3B3B3B] font-montserrat font-semibold text-xl leading-[28.8px] pb-4">
                319k
              </p>
              <p className="rounded-full  py-1 px-2 bg-[#FEF1F2] font-montserrat flex font-medium text-xs leading-[18px] text-[#E02D3C]">
                <BiUpArrowAlt /> 2.9%
              </p>
            </div>
            <p className="text-[#6C6C6C] font-montserrat font-normal text-sm leading-4">
              Compared to 699k last week
            </p>
          </div>
        </div>
      </div>
      <div className="pt-5 border border-r-amber-50 w-[75%] rounded-lg">
        <div className="flex gap-2 pb-20 px-7 ">
            <p className="font-montserrat font-semibold text-base text-[#272833] leading-[27px]">Subscription Trend</p>
            <input type="date" className="border rounded" />
        </div>
      <Charts />
      </div>
    </div>
  );
};

export default Main;
