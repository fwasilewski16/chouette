import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WelcomePageMainMobile from "../components/WelcomePageMainMobile.jsx";
import WelcomePageMainDesktop from "../components/WelcomePageMainDesktop.jsx";
import WelcomePageHistory from "../components/WelcomePageHistory.jsx";
import WelcomePageList from "../components/WelcomePageList";
import WelcomePageCrew from "../components/WelcomePageCrew.jsx";
import WelcomePageInstagram from "../components/WelcomePageInstagram.jsx";

import main1 from "../assets/carousel/main1.jpg";
import main2 from "../assets/carousel/main2.jpg";
import main3 from "../assets/carousel/main3.jpg";
import main4 from "../assets/carousel/main4.jpg";
import main5 from "../assets/carousel/main5.jpg";
import main6 from "../assets/carousel/main6.jpg";

import Slider from "react-slick";

function ImageComponent(props) {
  return (
    <img
      loading="lazy"
      width={2560}
      height={1621}
      src={props.img}
      className="min-h-full"
    />
  );
}

export default function WelcomePage() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    fade: true,
    arrows: false,
  };

  return (
    <>
      <div className="sticky left-0 right-0 top-0 -z-50 mt-[-60px] h-auto max-h-[100dvh] xl:mt-[-80px]">
        <Slider style={{ height: "100%" }} {...settings}>
          <ImageComponent img={main1} />
          <ImageComponent img={main2} />
          <ImageComponent img={main3} />
          <ImageComponent img={main4} />
          <ImageComponent img={main5} />
          <ImageComponent img={main6} />
        </Slider>
      </div>
      <div className="md:mt-[-100dvh]">
        <WelcomePageMainMobile />
        <WelcomePageMainDesktop />
        <WelcomePageHistory />
        <WelcomePageList />
        <WelcomePageCrew />
        <WelcomePageInstagram />
      </div>
    </>
  );
}
