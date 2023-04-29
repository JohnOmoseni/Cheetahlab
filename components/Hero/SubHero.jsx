import Image from "next/image";
import group from "/public/assets/images/Group.png";
import { CgArrowLongDown } from "react-icons/cg";

function SubHero() {
  return (
    <div className="sub-hero">
      <div className="container">
        <div className="column column-1">
          <div className="top">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9982 0.998535C10.0001 9.99713 7.00053 21.9953 7.00053 21.9953C7.00053 21.9953 4.001 18.415 1.00146 15.9962"
                stroke="#9337FF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Secure</p>
          </div>
          <p className="content first-type">
            Cheetahpad is a launchpad that aims to provide a decentralized and community-driven
            platform for hosting IDOs. It aims to offer fair and transparent token sales to
            investors.
          </p>
        </div>
        <div className="column column-2">
          <div className="top">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.960327 0.875183V3.90237L34.5034 35.6742L0.960327 8.5069V14.0327L34.3299 37.4912L26.184 35.8481L28.707 38.7493L22.0975 39.0313L45.1256 45.0879L38.9848 21.7391L37.5455 30.3978L34.9861 27.4484L36.5502 33.1169L14.1181 0.875183H12.021L25.3593 20.4628L9.26527 2.95343L18.5442 15.9422L3.23695 0.875183H0.960327ZM41.5541 9.51762L38.5321 13.1253L43.7062 32.645L45.1393 12.2268L41.5541 9.51743V9.51762ZM19.8153 40.2573L17.4739 42.4576L19.5059 45.047L33.4957 43.8489L19.8151 40.2573H19.8153Z"
                fill="#9337FF"
              />
            </svg>
            <p>Fast</p>
          </div>
          <p className="content">
            Cheetahpad is a launchpad that aims to provide a decentralized and community-driven
            platform for hosting IDOs. It aims to offer fair and transparent token sales to
            investors.
          </p>
        </div>
        <div className="decorative-element">
          <Image src={group} alt="" />
          <span className="arrow">
            <CgArrowLongDown size="20px" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SubHero;
