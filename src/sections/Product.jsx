import couple from "../assets/couple.png";
import family from "../assets/family.png";
import health from "../assets/health.png";
import Button from "../components/Button";

const Product = () => {
  return (
    <section className="w-full px-[100px] bg-[#FFFAFA] h-full items-center justify-center ">
      <div className="flex flex-col justify-center items-center p-[100px] box-border h-50 w-100">
        <p className="font-montserrat pb-5 text-3xl items-center text-center w-[50%] font-bold text-[#000000]">
          Tailored Financial Security for Every Stage
        </p>
        <p className="font-montserrat text-center w-[50%] text-xl">
          Explore our range of comprehensive financial support and protection
          solutions designed for Gig Workers, Informal Income Earners, and
          Businesses.
        </p>
      </div>
      <div className="flex  py-[50px]">
        <div className="mr-[80px]">
          <img src={couple} />
        </div>
        <div className="flex flex-col justify center p-10 pt-20 items-center w-[40%] h-[50%] ">
          <p className="font-montserrat px-5 py-3 w-full font-semibold font-3xl text-[24px]">
            Pension Plans
          </p>
          <p className="font-montserrat px-5  w-full text-[20px] font-normal text-[#000000]">
            Tailored for You Plan for a worry-free retirement with our
            customizable pension options, designed to provide you with long-term
            financial security and peace of mind
          </p>
        </div>
      </div>
      <div className="flex justify-between py-[50px]">
        <div className="flex flex-col justify center  pt-20 items-center w-[35%] h-[50%]">
          <p className="font-montserrat px-5 py-3 w-full font-semibold font-3xl text-[24px]">
            Life Insurance
          </p>
          <p className="font-montserrat px-5  w-full text-[20px] font-normal text-[#000000]">
            Life Insurance That Matters Protect your loved ones futures with our
            reliable life insurance coverage, ensuring financial stability even
            in unforeseen circumstances.
          </p>
        </div>
        <div>
          <img src={family} />
        </div>
      </div>
      <div className="flex justify-between py-[50px] pb-[150px]">
        <div className="mr-[80px]">
          <img src={health} />
        </div>
        <div className="flex flex-col justify center p-10 pt-20  items-center w-[40%] h-[50%] ">
          <p className="font-montserrat px-5 py-3 w-full font-semibold font-3xl text-[24px]">
            Health and Accident Protection
          </p>
          <p className="font-montserrat px-5  w-full text-[20px] font-normal text-[#000000]">
            You Can Count On Stay prepared for lifes challenges with our
            comprehensive health and accident coverage, offering you the support
            you need when you need it most
          </p>
        </div>
      </div>
      <div className="bg-ash w-full flex items-center justify-center pb-10 rounded-t-xl">
        <div className="flex flex-col justify-center items-center pt-20   box-border h-50 w-100 ">
          <p className="text-5xl font-semibold items-center text-center font-montserrat pb-5 w-[80%]">
            Join Now to Access Financial Confidence
          </p>
          <p className="font-montserrat w-[40%] text-center pb-10 font-normal text-base leading-6">
            Join Valubah today and take the first step towards securing your
            future.
          </p>
          <Button backgroundColor={"bg-green"} className="" />
        </div>
      </div>
    </section>
  );
};

export default Product;
