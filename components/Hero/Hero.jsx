import Image from "next/image";
import SubHero from "./SubHero";
import line from "/public/assets/images/line.png";
// import heroImg from "/public/assets/images/SA4.gif";

function Hero() {
  return (
    <div className="hero-section">
      <div className="even-columns">
        <div className="column-1">
          <h1>
            Cutting-edge
            <br />
            <span className="text-vertical">Defi</span>
            <span className="text-variant">
              decentralized
              <Image src={line} alt="" />
            </span>
            <br />
            <span className="solutions">solutions</span>
          </h1>
          <p className="subtitle">
            Cheetahpad is a launchpad that aims to provide a decentralized and community-driven
            platform for hosting IDOs.
          </p>
        </div>

        <div className="column-2 hero-img">{/* <Image src={heroImg} alt="" priority /> */}</div>
        <h2 className="cheetahlabs">Cheetah</h2>
      </div>
      <SubHero />
    </div>
  );
}

export default Hero;
