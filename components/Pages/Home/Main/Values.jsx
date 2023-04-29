import Image from "next/image";

const Values = () => {
  return (
    <section className="values-section">
      <div className="content">
        <h2 className="heading">
          Our Core <span className="text-variant">Values</span>
        </h2>
        <div className="container even-columns">
          <ul className="column-1 column">
            <li>
              <span className="title">Innovation</span>
              <span className="subtitle">
                We’re working at the fore front of blockchain innovations commercial.
              </span>
            </li>
            <li>
              <span className="title">Projects</span>
              <span className="subtitle">
                We’re working at the fore front of blockchain innovations commercial.
              </span>
            </li>
            <li>
              <span className="title">High Standard</span>
              <span className="subtitle">
                We’re working at the fore front of blockchain innovations commercial.
              </span>
            </li>
            <li>
              <span className="title">Contributions</span>
              <span className="subtitle">
                We’re working at the fore front of blockchain innovations commercial.
              </span>
            </li>
          </ul>

          <div className="column-2 column">
            <Image src="" alt="" />
          </div>
        </div>
        <h2 className="cheetahlabs">Cheetahlabs</h2>
      </div>
    </section>
  );
};

export default Values;
