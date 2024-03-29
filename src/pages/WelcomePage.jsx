import WelcomePageVideo from "../components/WelcomePageVideo";
import WelcomePageInstagram from "../components/WelcomePageInstagram.jsx";
import WelcomePageMainMobile from "../components/WelcomePageMainMobile.jsx";
import WelcomePageMainDesktop from "../components/WelcomePageMainDesktop.jsx";
import WelcomePageCrew from "../components/WelcomePageCrew.jsx";
import WelcomePageHistory from "../components/WelcomePageHistory.jsx";
import { useEffect, useState } from "react";

export default function WelcomePage() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function resize() {
      const width = window.innerWidth;
      setWidth(width);
    }
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      {width <= 1024 ? <WelcomePageMainMobile /> : <WelcomePageMainDesktop />}
      <div>
        <WelcomePageHistory />
        <WelcomePageVideo />
        <WelcomePageCrew />
        <WelcomePageInstagram />
      </div>
    </>
  );
}
