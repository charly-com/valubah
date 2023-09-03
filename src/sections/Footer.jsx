import Valubar from "../assets/Valubah.png";
import Button from "../components/Button";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
const Footer = () => {
  return (
    <section className="bg-green ">
      <div className="flex flex-row justify-between px-20 py-20 ">
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-bold text-xl leading-[27px] text-[#FFFFFF]">
            Company
          </p>
          <p className="font-montserrat font-normal text-base leading-[24px] text-gray-500">
            About Us
          </p>
          <p className="font-montserrat font-normal text-base leading-[24px] text-gray-500">
            Why Choose us
          </p>
          <p className="font-montserrat font-normal text-base leading-[24px] text-gray-500">
            Pricing
          </p>
          <p className="font-montserrat font-normal text-base leading-[24px] text-gray-500">
            Testimonial
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-bold text-xl leading-[27px] text-[#FFFFFF]">
            Resources
          </p>
          <p className="font-montserrat font-normal text-base leading-[24px] text-gray-500">
            Privacy Policy
          </p>
          <p className="font-montserrat font-normal text-base leading-[24px] text-gray-500">
            Terms and Condition
          </p>
          <p className="font-montserrat font-normal text-base leading-[24px] text-gray-500">
            Blog
          </p>
          <p className="font-montserrat font-normal text-base leading-[24px] text-gray-500">
            Contact Us
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-montserrat font-bold text-xl leading-[27px] text-[#FFFFFF]">
            Product
          </p>
          <p className="font-montserrat font-normal text-base leading-[24px] text-gray-500">
            Micro Pension Scheme
          </p>
          <p className="font-montserrat font-normal text-base leading-[24px] text-gray-500">
            Frequently Asked Questions
          </p>
        </div>
        <div className="">
          <img src={Valubar} className="pb-8" />
          <p className="font-montserrat font-bold text-xl leading-[27px] text-[#FFFFFF] pb-3">
            Subscribe to our Newsletter
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-[#2B2E3C] h-10 w-[200px] rounded-l p-2"
            />{" "}
            <Button width={""}/>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full px-20 pb-20">
        <div className=" flex justify-center items-center w-full">
          <div className="border-t border-gray-300 my-1 w-[35%]  px-[30px] "></div>
          <div className="w-[30%] flex">
              <p className="font-montserrat text-gray-500 px-5">© Copyright Valubah 2023</p>
              <div className="flex flex-row gap-2">
                <img src={Facebook} alt="Facebook" />
                <img src={Twitter} alt="Twitter" />
                <img src={Instagram} alt="Instagram" />
                <img src={LinkedIn} alt="LinkedIn" className="pr-5"/>
              </div>
          </div>
          <div className="border-t border-gray-300 my-1 w-[35%] px-[30px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
