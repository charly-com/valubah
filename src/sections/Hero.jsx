import Button from "../components/Button";
import ManJaw from "../assets/handjaw.png";
import Thumbs from "../assets/thumbsup.png";
import Laptop from "../assets/manlaptop.png";

const Hero = () => {
  return (
    <section className=" flex justify-center w-full h-[800px]    bg-green">
      <div className="w-[85%] flex justify-between py-10">
        <div className="h-[500px]  w-[500px]  relative ">
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
        <div className="   py-10  w-[90%] h-full  ">
            <div className="flex flex-col flex-wrap h-[700px] w-[750px] mx-[30px]">
          <img src={ManJaw} className=" pb-7 ml-[80px] " width={300} height={350} />
          <img src={Thumbs} className="ml-[30px] " width={350} height={50} />
          <img src={Laptop} className="" width={300} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
