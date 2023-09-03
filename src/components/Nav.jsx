import Button from "./Button";
import valuebah from "../assets/valubah.png";

const Nav = () => {
  return (
    <header className="bg-green  w-full">
      <nav className="flex justify-between items-center py-7 px-[120px] ">
      
        < img src={valuebah}/>
        <ul className="flex gap-10 items-center  ">
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
