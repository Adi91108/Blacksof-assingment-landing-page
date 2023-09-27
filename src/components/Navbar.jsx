import logo1 from "../image/logo1.png";
import Link from "./Link"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const passValue = (val) => {
    setShowMenu(val);
  };

  const menuShowHandler = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className="flex pl-8 w-full h-full justify-between xl-flex xl:w-3/5 xl:justify-between xl:pl-0">
      {showMenu ? <Link getVal={passValue} /> : ""}
      <div className="flex items-center relative w-[10%]">
        <img src={logo1} alt="brand-logo" className="w-20" />
        <p className="text-white font-extrabold absolute left-14">Tech</p>
      </div>

      <div className="text-white xl:flex hidden xl:block xl:items-center xl:justify-between xl:w-2/5">
        <p>Solutions</p>
        <p>Services</p>
        <p>About</p>
        <p>Culture</p>
      </div>

      <div className="xl:flex xl:items-center xl:w-[21.5%] xl:justify-between hidden">
        <button className="bg-[#181818] hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full">
          Contact Us
        </button>
        <button className="bg-[#252525] hover:bg-gray-500 text-white font-bold py-2 px-3 rounded-full">
          <ArrowRightAltRoundedIcon/>
        </button>
      </div>
      <div className="block xl:hidden cursor-pointer flex items-center">
        <GiHamburgerMenu
          color="white"
          className="w-8 h-8"
          onClick={menuShowHandler}
        />
      </div>
    </div>
  );
};

export default Navbar;
