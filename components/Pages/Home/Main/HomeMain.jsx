import Hero from "../../../Hero/Hero";
import Aim from "./Aim";
import Networks from "./Networks";
import Products from "./Products";
import Roadmaps from "./Roadmaps";
import Values from "./Values";

function HomeMain() {
  return (
    <>
      <Hero />
      <main className="main-home">
        <Values />
        <Aim />
        <Products />
        <Roadmaps />
        <Networks />
      </main>
    </>
  );
}

export default HomeMain;
