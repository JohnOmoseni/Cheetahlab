import CommunityLogos from "./Column2";
import { MdEmail } from "react-icons/md";
import { CgArrowLongRight } from "react-icons/cg";
import link from "/public/assets/images/link.png";
import Image from "next/image";

const Column1 = () => {
  return (
    <div className="columns">
      <div className="footer-link">
        <span className="link-title">Community</span>
        <CommunityLogos />
      </div>
      <div className="footer-link">
        <span className="link-title">Developers</span>
        <button className="connect-btn fw-bold">
          Dev Relations
          <CgArrowLongRight className="icon" size="18px" />
        </button>
      </div>
      <div className="footer-link">
        <span className="link-title">Docs</span>
        <Image src={link} alt="" />
      </div>
      <div className="footer-link">
        <span className="link-title">Contact</span>
        <div className="contact">
          <MdEmail size={16} />
          <a href="mailto: hello@cheetah.io" className="email" title="Email">
            hello@cheetah.io
          </a>
        </div>
      </div>
    </div>
  );
};

export default Column1;
