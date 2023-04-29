import Image from "next/image";
import line from "/public/assets/images/line.png";
import { CgArrowLongRight } from "react-icons/cg";

const Products = () => {
  return (
    <section className="product-section">
      <div className="pseudo-element">
        <div className="line"></div>
      </div>
      <h2 className="heading">
        Our&nbsp;
        <span className="text-variant">
          Products <Image src={line} alt="" />
        </span>
      </h2>

      <div className="container even-columns">
        <ul className="column-1">
          <li>ve 3,3 Dex</li>
          <li>Domain Name Service</li>
          <li>IDO Lauchpad</li>
          <li>NFT Marketplace</li>
        </ul>
        <div className="column-2">
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sit vero saepe
              repellendus placeat fuga? Nihil autem excepturi eveniet possimus temporibus,
              blanditiis sequi dicta, assumenda fugit nesciunt modi ipsam natus?
            </p>
          </div>
          <a href="#" aria-label="Let's Connect" rel="noreferrer" className="connect-btn">
            LEARN MORE
            <CgArrowLongRight className="icon" size="18px" />
            <span className="icon"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
