import Button from "../components/Button";
import ManJaw from "../assets/handjaw.png";
import Thumbs from "../assets/thumbsup.png";
import Laptop from "../assets/manlaptop.png";
import Background from "../assets/background.png";

const Hero = () => {
  return (
    <section className=" flex justify-center w-full h-[800px] bg-green">
        <div className="">

        <img src={Background} className="absolute h-[700px] w-[70%] top-0 right-0 filter grayscale brightness-78 " />
        </div>
      <div className="w-11/12 flex justify-between py-10 box-border h-10/12 z-[1]">
        <div className="h-[500px] w-[45%] relative ">
          <p className="pt-[230px] w-[300px] text-4xl pb-4 text-bold font-montserrat font-extrabold text-[#FBF6F6]">
            <span className="text-ash">Valubah:</span> Your Secure Path to a
            Confident Future
          </p>
          <p className="text-[#FBF6F6] font-montserrat pb-5 ">
            Explore our Comprehensive Financial Support and Protection Solutions
            Tailored for Gig Workers, Informal Income Earners, and Businesses.
          </p>
          <Button />
        </div>
        <div className="w-[55%] items-center justify-center g h-[700px] flex ">
          <div className="flex flex-col w-1/2 h-full gap-4">
            <img src={ManJaw} className="self-end h-[450px] w-[85%]" />
            <img src={Thumbs} className="w-full h-[250px]" />
          </div>
          <div className="w-1/2 h-[700px] flex justify-center items-center">
            <img src={Laptop} className="h-full self-end w-11/12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
