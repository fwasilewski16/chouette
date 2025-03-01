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
      <div className="w-full bg-[#fffcf9] pb-4">
        <p className="mx-auto px-2 text-center font-manrope text-xs tracking-wider antialiased">
          Toute l'équipe de Chouette On Apprend remercie infiniment Filip
          Wasilewski, développeur web, qui a créé bénévolement notre beau site
          internet.
        </p>
      </div>
    </>
  );
}
