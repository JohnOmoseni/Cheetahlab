import Column1 from "./Column1";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="cheetahlabs">Cheetahlabs</h2>
      <Column1 />
      <div className="footer-base">
        <div className="base">
          <span className="col-1">Cheetahlabs Copyright. 2023</span>
          <div>
            <span>Terms</span>
            <span>Privacy policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
