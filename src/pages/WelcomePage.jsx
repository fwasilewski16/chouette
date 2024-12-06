import WelcomePageMainMobile from "../components/WelcomePageMainMobile.jsx";
import WelcomePageMainDesktop from "../components/WelcomePageMainDesktop.jsx";
import WelcomePageHistory from "../components/WelcomePageHistory.jsx";
import WelcomePageList from "../components/WelcomePageList";
import WelcomePageCrew from "../components/WelcomePageCrew.jsx";
import WelcomePageInstagram from "../components/WelcomePageInstagram.jsx";

export default function WelcomePage() {
  return (
    <>
      <WelcomePageMainMobile />
      <WelcomePageMainDesktop />
      <WelcomePageHistory />
      <WelcomePageList />
      <WelcomePageCrew />
      <WelcomePageInstagram />
    </>
  );
}
