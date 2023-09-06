import icon from "../assets/icon.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import { BiUpArrowAlt } from "react-icons/bi";
import Charts from "./Charts";
// import PieCharts from "./PieCharts";
import pie from "../assets/pie.png";
import man from "../assets/man.png";
import woman from "../assets/woman.png";

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
      <div className="flex ">
        <div className="pt-5  border border-r-amber-50 w-[75%] rounded-lg">
          <div className="flex items-center gap-2 pb-20 px-7 ">
            <p className="font-montserrat font-semibold text-base text-[#272833] leading-[27px]">
              Subscription Trend
            </p>
            <input
              type="text"
              placeholder="4th August, 2023"
              className="w-[161px] h-[35px] border rounded font-montserrat font-medium text-base text-[#6C6C6C] leading-[21px] p-2"
            />
          </div>
          <Charts />

          <div className="flex gap-2 pb-2 px-7 items-center">
            <div className="bg-[#146614] w-4 h-4  rounded-3"></div>
            <p className="text-[#727E8F] font-montserrat font-medium text-base leading-6">
              Personal Subscribers{" "}
            </p>
            <div className="bg-[#F4AFA7] w-4 h-4  rounded-3"></div>
            <p className="text-[#727E8F] font-montserrat font-medium  text-base leading-6">
              Business Subscribers
            </p>
          </div>
        </div>
        <div className="pl-4  ">
          <div className="w-[264px] h-[35%] border border-r-dark-50 rounded-lg mb-5 ">
            <p className="text-[#6C6C6C] font-montserrat font-medium text-base leading-6 px-3 pt-3">
              {" "}
              Gender Distribution
            </p>
            <div className="flex justify-center items-center py-5 ">
              <img src={pie} width={170} height={600} />
            </div>
            <div className="flex justify-center items-center  ">
              <img src={man} />
              <p className="text-[#3B3B3B] font-montserrat font-medium text-base leading-6">
                Male
              </p>
              <img src={woman} />
              <p className="text-[#3B3B3B] font-montserrat font-medium text-base leading-6">
                Female
              </p>
            </div>
          </div>
          <div className="w-[264px] h-[60%] border border-r-dark-50 rounded-lg pl-4">
            <p className="text-[#6C6C6C] font-montserrat font-medium text-base leading-6">
              Top Customers This Week
            </p>
            <ol className="list-decimal pl-4 space-y-4 font-montserrat py-5" >
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
              <li>Fourth item</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
