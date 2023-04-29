import Image from "next/image";
import line from "/public/assets/images/line.png";
import arbitrium from "/public/assets/images/arbitrium.png";
import coredao from "/public/assets/images/coredao.png";
import zetachain from "/public/assets/images/zetachain.png";
// import cad from "/public/assets/images/cad.png";

function Networks() {
  return (
    <section className="network-section">
      <h2 className="heading">
        Available{" "}
        <span className="text-variant">
          Networks <Image src={line} alt="" />
        </span>
      </h2>

      <div className="network-logos">
        <div className="network">
          <div className="logo">
            <Image src={coredao} alt="" />
          </div>
          <p className="title">CoreDAO</p>
        </div>
        <div className="network">
          <div className="logo">
            <Image src={zetachain} alt="" />
          </div>
          <p className="title">Caduceus</p>
        </div>
        <div className="network">
          <div className="logo">
            <Image src={zetachain} alt="" />
          </div>
          <p className="title">Zetachain</p>
        </div>
        <div className="network">
          <div className="logo">
            <Image src={arbitrium} alt="" />
          </div>
          <p className="title">Arbitrum</p>
        </div>
      </div>
    </section>
  );
}

export default Networks;
