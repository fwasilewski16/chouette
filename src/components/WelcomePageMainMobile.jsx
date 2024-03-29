import facebookIcon from "../assets/icons/facebook-white.png";
import InstagramIcon from "../assets/icons/instagram-white.png";
import emailIcon from "../assets/icons/email-white.png";
import locationIcon from "../assets/icons/location-pin-white.png";
import main2 from "../assets/images/main2.jpg";
import logo from "../assets/logo.png";

export default function WelcomePageMainMobile() {
  return (
    <div className="relative mt-[-52px] flex h-[80vh] items-end">
      <img src={main2} className="absolute right-0 min-h-full object-cover" />
      <div className="z-10 flex w-full max-w-[500px] flex-col items-start gap-3 rounded-t-[28px] bg-gradient-to-b from-[#ffae45cc] to-[#FFAF45] px-4 py-5 font-kadwa text-white md:gap-6">
        <p className="w-full text-[40px] font-semibold leading-[40px] antialiased">
          Bienvenue!
        </p>
        <p className="text-[14px]">
          Depuis janvier 2012 Chouette On Apprend oeuvre pour le respect des
          différences, l'autonomie et l'épanouissement.
        </p>
        <p className="text-[14px]">
          Notre association porte des valeurs de partage et d'ouverture pour
          transmettre le plaisir d'apprendre.
        </p>
        <div className="flex items-center justify-center gap-2">
          <img src={locationIcon} className="h-4" />
          <p className="text-[14px]">Paris</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src={emailIcon} className="h-4" />
          <p className="text-[14px]">contact@chouetteonapprend.org</p>
        </div>
        <div className="relative flex w-full gap-5 pt-1">
          <img src={facebookIcon} className="h-5 md:h-6" />
          <img src={InstagramIcon} className="h-5 md:h-6" />
          <img
            src={logo}
            className="absolute bottom-0 right-0 h-12 -scale-x-100 invert"
          />
        </div>
      </div>
    </div>
  );
}
