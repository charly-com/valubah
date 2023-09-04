import Button from "./Button";
import valuebah from "../assets/valubah.png";

const Nav = () => {
  return (
    <header className="bg-[#146614] justify-center items-center flex flex-cols  w-full px-20 ">
      <nav className="flex justify-between space-x-[45%] items-center py-7 w-11/12 ">
        <span className="flex w-2/12">
            <img src={valuebah}/>
        </span>
        <ul className="flex justify-between   items-center  w-full z-[1]">
         
          <li>
            <a
              className="font-montserrat text-[#FFFFFF]  leading-normal text-lg"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-montserrat text-[#FFFFFF]  leading-normal text-lg"
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-montserrat text-[#FFFFFF]  leading-normal text-lg"
            >
              Contact Us
            </a>
          </li>

          <div className="">
            <Button />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
