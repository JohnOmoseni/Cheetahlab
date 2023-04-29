"use client";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import HomeMain from "./Pages/Home/Main/HomeMain";

function CheetahLabs() {
  return (
    <div className="wrapper">
      <div className="home-page">
        <Header />
        <HomeMain />
        <Footer />
      </div>
    </div>
  );
}

export default CheetahLabs;
