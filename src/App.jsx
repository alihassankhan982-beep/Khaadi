import AnnouncementBar from "./components/announcementBar/index";
import Header from "./components/header/index";
import HeroSlider from "./components/heroSlider/index";
import HeroBanner from "./components/heroBanner";
import Heading from "./components/heading/index";
import Image from "./components/image";
import CardCarousel from "./components/cardCarousel/index";
import Icons from "./components/icons";
import Footer from "./components/footer/index";


const App = () => {
  const Content = [
    {
      img: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw6b99fae2/images/homepage/0.0-April-Sale-desktop-banner-1920x700.jpg?",
    },

    {
      img: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwec94270f/0.0-0.0-0.0-0.0-0.0-0.0-0.025-2-26-TopPicksDesktop675x1920-uae.jpg",
    },

    {
      img: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw821a6167/0.0-0.0-0.0-0.0-0.0-0.0-0.025-2-26-bestsellerDesktop675x1920-uae2.jpg",
    },

    {
      title: "Top Picks for You",
      description:
        "We've handpicked the styles we know you'll love. Explore what's trending now.",
    },

    {
      title: "Bestsellers",
      description:
        "Discover this season’s favorites and refresh your style with looks you’ll wear on repeat.",
    },
  ];

  return (
    <div>
      <AnnouncementBar />
      <Header />
      <HeroBanner img={Content[0].img} />
      <Heading title={Content[3].title} description={Content[3].description} />
      <Image img={Content[1].img} />
      <CardCarousel />
      <Heading title={Content[4].title} description={Content[4].description} />
      <Image img={Content[2].img} />
      <CardCarousel />
      <Icons />
      <Footer />
    </div>
  );
};

export default App;
