function Roadmaps() {
  return (
    <section className="roadmap-section">
      <div className="pseudo-element"></div>
      <h2 className="heading">
        <span className="text-variant">Roadmaps</span>
      </h2>
      <div className="even-columns">
        <div className="col-1 col">
          <h3 className="phase phase-1">Phase 1</h3>
          <ul className="container container1">
            <li>Digital identity creation </li>
            <li>Community building</li>
            <li>Community sensitization</li>
            <li>Community sensitization</li>
            <li> UI design </li>
            <li> Launchpad and dex </li>
            <li> Smart contract Deployment </li>
          </ul>
        </div>
        <div className="col-2 col">
          <h3 className="phase phase-2">Phase 2</h3>
          <ul className="container container2">
            <li>Website creation</li>
            <li>Partnership with Defi protocols and Gamefi-based projects</li>
            <li>Community campaign</li>
            <li>Launchpad and dex creation</li>
            <li> Onboarding solid Gamefi/Defi Projects </li>
            <li> Token launch </li>
          </ul>
        </div>
        <div className="col-3 col">
          <h3 className="phase phase-3">Phase 3</h3>
          <ul className="container container3">
            <li>DAO creation</li>
            <li> NFT marketplace launch</li>
            <li> Multi-sig wallet launch</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Roadmaps;
