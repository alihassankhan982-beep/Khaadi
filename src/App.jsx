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
      img2: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw6f23954d/images/homepage/0.0-April-Sale-mobile-banner-1000x1500.jpg",
    },

    {
      img: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwec94270f/0.0-0.0-0.0-0.0-0.0-0.0-0.025-2-26-TopPicksDesktop675x1920-uae.jpg",
      img2: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw2952c501/0.0-0.0-0.0-0.0-0.0-0.0-0.025-2-26-TopPicksMobile1080x1080-uae.jpg",
    },

    {
      img: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw821a6167/0.0-0.0-0.0-0.0-0.0-0.0-0.025-2-26-bestsellerDesktop675x1920-uae2.jpg",
      img2: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw21107656/0.0-0.0-0.0-0.0-0.0-0.0-0.025-2-26-bestsellerMobile1080x1080-uae.jpg",
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
      <HeroBanner img={Content[0].img} img2={Content[0].img2} />
      <Heading title={Content[3].title} description={Content[3].description} />
      <Image img={Content[1].img} img2={Content[1].img2} />
      <CardCarousel />
      <Heading title={Content[4].title} description={Content[4].description} />
      <Image img={Content[2].img} img2={Content[2].img2} />
      <CardCarousel />
      <Icons />
      <Footer />
    </div>
  );
};

export default App;
