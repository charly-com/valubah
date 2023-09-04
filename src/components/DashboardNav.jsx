import { MdNotificationsNone } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const DashboardNav = () => {
  return (
    <div className="bg-white w-full p-4 border border-solid border-[#EDEBE9]">
      <div className="flex justify-between">
        <p className="text-black font-montserrat font-semibold text-lg leading-6">
          Dashboard
        </p>
        <div className="flex gap-2 pr-5">
          <MdNotificationsNone className="w-[32px] h-[32px]" />
          <p className="w-10 h-10 flex items-center justify-center p-1 rounded-full bg-[#E0FFE0] text-center text-[#0E660E] font-montserrat font-semibold text-sm leading-6 ">
            AD
          </p>
          <RiArrowDropDownLine className="w-[30px] h-[30px]" />
        </div>
      </div>
      
    </div>
  );
};

export default DashboardNav;
