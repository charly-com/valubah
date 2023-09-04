import {LuLayoutDashboard} from "react-icons/lu";
import settings from "../assets/settings.png";
import logout from "../assets/logout.png";

const Sidebar = () => {
  return (
    <div  >
        <div >

      <div className=" flex flex-col w-full h-screen bg-[#FFFFFF] border border-solid border-[#EDEBE9] ">
        <div className="flex flex-col w-full gap-2">
          <p className="font-montserrat font-bold text-2xl leading-[1.2] text-[#146614] py-10 px-10">
            Valubah
          </p>
          <div className="flex justify-center items-center">
            <div className="w-[80%] h-10 bg-[#E0FFE0] flex self-start rounded items-center pl-4">

            <LuLayoutDashboard className="" />
            <p className="px-2 font-montserrat font-medium text-base leading-6"> Dashboard</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 ">
          <img src={settings} />
          <img src={logout} />
        </div>
      </div>
        </div>
    </div>
  );
};

export default Sidebar;
