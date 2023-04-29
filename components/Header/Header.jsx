import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import cheetahlab from "/public/assets/images/cheetahlab-logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Image src={cheetahlab} alt="" priority />
      </div>
      <div className="menu">
        <div className="line"></div>
        <p>Menu</p>
      </div>
      <button className="connect-btn fw-bold">
        Let's Connect
        <CgArrowLongRight className="icon" size="18px" />
      </button>
    </header>
  );
}

export default Header;
