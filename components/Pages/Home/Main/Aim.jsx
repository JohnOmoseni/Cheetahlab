import Image from "next/image";
import line from "/public/assets/images/line.png";

const Aim = () => {
  return (
    <section className="aim-section">
      <div className="content">
        <h2 className="heading">
          Building a Disruptive
          <br />
          <span className="text-variant">
            Decentralized
            <Image src={line} alt="" />
          </span>
          <br />
          &nbsp;Technology
        </h2>
        <div className="even-columns">
          <div className="column column-1">
            Cheetahlab is a revolutionary ecosystem that offers users a suite of cutting-edge
            products and services, all built on top of a decentralized blockchain network. With a
            focus on decentralization, security, and user control, this platform offers a range of
            products including a decentralized exchange (DEX), an Initial DEX Offering (IDO)
            platform, a domain name service (DNS), a multi-sig wallet, and an NFT marketplace.
          </div>

          <div className="column column-2">
            <Image src="" alt="" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aim;
