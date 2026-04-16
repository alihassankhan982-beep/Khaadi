import AnnouncementBar from "./components/announcementBar/index";
import Header from "./components/header/index";
import HeroSlider from "./components/heroSlider/index";
import Heading from "./components/heading/index";
import Image from "./components/image";
import CardCarousel from "./components/cardCarousel/index";
import Icons from "./components/icons";
import Footer from "./components/footer/index";

const App = () => {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <HeroSlider />
      <Heading />
      <Image />
      <CardCarousel />
      <Heading />
      <Image />
      <CardCarousel />
      <Icons />
      <Footer />
    </div>
  );
};

export default App;
