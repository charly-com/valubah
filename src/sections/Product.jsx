import couple from "../assets/couple.png";
import family from "../assets/family.png";
import health from "../assets/health.png";
import Button from "../components/Button";

const Product = () => {
  return (
    <section className="w-full h-full  items-center ">
      <div className="   justify-center py-[150px] text-center">
        <p className="font-montserrat pb-5 text-3xl  font-bold text-[#000000]">
          Tailored Financial Security for Every Stage
        </p>
        <p className="font-montserrat">
          Explore our range of comprehensive financial support and protection
          solutions designed for Gig Workers, Informal Income Earners, and
          Businesses.
        </p>
      </div>
      <div className="flex justify-between py-[50px]">
        <img src={couple} />
        <p>Pension Plans</p>
        <p>
          Tailored for You Plan for a worry-free retirement with our
          customizable pension options, designed to provide you with long-term
          financial security and peace of mind
        </p>
      </div>
      <div className="flex justify-between py-[50px]">
        <p>Life Insurance</p>
        <p>
          Life Insurance That Matters Protect your loved ones futures with our
          reliable life insurance coverage, ensuring financial stability even in
          unforeseen circumstances.
        </p>
        <img src={family} />
      </div>
      <div className="flex justify-between py-[50px]">
        <img src={health} />
        <p>Health and Accident Protection</p>
        <p>
          You Can Count On Stay prepared for lifes challenges with our
          comprehensive health and accident coverage, offering you the support
          you need when you need it most
        </p>
      </div>
      <div className="bg-ash w-[80%] flex justify-center">
        <div>
        <p>Join Now to Access Financial Confidence</p>
        <p>Join Valubah today and take the first step towards securing your future.</p>
        <Button />
        </div>
      </div>
    </section>
  );
};

export default Product;
