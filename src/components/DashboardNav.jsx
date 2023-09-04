import {MdNotificationsNone} from 'react-icons/md'
const DashboardNav = () => {
    return (
      <div className="bg-white w-full p-4 border border-solid border-[#EDEBE9]">
        <div className="flex justify-between">
          <p className="text-black font-montserrat font-semibold text-lg leading-6">Dashboard</p>
          <MdNotificationsNone className='w-[25px] h-[25px]'/>
        </div>
       
      </div>
    );
  };
  
  export default DashboardNav;