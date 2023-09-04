import icon from "../assets/icon.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

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
      <div className="flex justify-between pt-5">
        <div className="border border-r-amber-50 w-[24%] h-[180px] rounded-md">
          <div className="p-3">
            <img src={icon} />
            <p className="text-[#3B3B3B] font-montserrat font-medium text-base leading-[21px] py-2">
              Registered Customers
            </p>
            <div>
              <p>720.2k</p>
              <p>2.9%</p>
            </div>
            <p>Compared to 699k last week</p>
          </div>
        </div>
        <div className="border border-r-amber-50 w-[24%] h-[180px] rounded-md">
          <div className="p-3">
            <img src={icon2} />
            <p className="text-[#3B3B3B] font-montserrat font-medium text-base leading-[21px] py-2">
              Active Customers
            </p>
            <div>
              <p>720.2k</p>
              <p>2.9%</p>
            </div>
            <p>Compared to 699k last week</p>
          </div>
        </div>
        <div className="border border-r-amber-50 w-[24%] h-[180px] rounded-md">
          <div className="p-3">
            <img src={icon3} />
            <p className="text-[#3B3B3B] font-montserrat font-medium text-base leading-[21px] py-2">
              Active Customers
            </p>
            <div>
              <p>720.2k</p>
              <p>2.9%</p>
            </div>
            <p>Compared to 699k last week</p>
          </div>
        </div>
        <div className="border border-r-amber-50 w-[24%] h-[180px] rounded-md">
          <div className="p-3">
            <img src={icon} />
            <p className="text-[#3B3B3B] font-montserrat font-medium text-base leading-[21px] py-2">
              Active Customers
            </p>
            <div>
              <p>720.2k</p>
              <p>2.9%</p>
            </div>
            <p>Compared to 699k last week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
