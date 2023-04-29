import Header from "../../components/Header/Header";
import HomeMain from "../../components/Pages/Home/Main/HomeMain";
import Footer from "../../components/Footer/Footer";

// import CheetahLabs from "../../components/CheetahLabs";
import "/sass/main.scss";

export default function Home() {
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
