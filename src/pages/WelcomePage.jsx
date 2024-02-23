import WelcomePageVideo from "../components/WelcomePageVideo";
import WelcomePageInstagram from "../components/WelcomePageInstagram.jsx.jsx";
import WelcomePageMainMobile from "../components/WelcomePageMainMobile.jsx";
import WelcomePageMainDesktop from "../components/WelcomePageMainDesktop.jsx";
import WelcomePageCrew from "../components/WelcomePageCrew.jsx";
import WelcomePageHistory from "../components/WelcomePageHistory.jsx";

export default function WelcomePage() {
  return (
    <div>
      <div className="lg:hidden">
        <WelcomePageMainMobile />
      </div>
      <div className="sticky top-[68px] -z-10 hidden h-[calc(100vh-68px)] lg:block">
        <WelcomePageMainDesktop />
      </div>
      <div>
        <div className="hidden lg:block">
          <WelcomePageHistory />
          <WelcomePageVideo />
        </div>
        <div className="lg:hidden">
          <WelcomePageVideo />
          <WelcomePageHistory />
        </div>
        <WelcomePageCrew />
        <WelcomePageInstagram />
      </div>
    </div>
  );
}
