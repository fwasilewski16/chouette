import main1 from "../assets/images/main1.jpg";
import main2 from "../assets/images/main2.jpg";
import main3 from "../assets/images/main3.jpg";
import facebookIcon from "../assets/icons/facebook-white.png";
import InstagramIcon from "../assets/icons/instagram-white.png";
import emailIcon from "../assets/icons/email-white.png";
import locationIcon from "../assets/icons/location-pin-white.png";
import logo from "../assets/logo.png";

export default function WelcomePageMainDesktop() {
  return (
    <div className="relative mt-[-56px] flex h-[100vh] items-end justify-center overflow-hidden">
      <div className="absolute h-full w-full">
        {/* <img
          src={main2}
          className="min-h-full object-cover object-left-bottom"
        /> */}
        {/* <div className="relative h-full w-full">
          <img
            src={main1}
            className="absolute left-1/2 top-1/2 min-h-full -translate-x-1/2 -translate-y-1/2 object-cover object-left-bottom"
          />
        </div> */}
        <div className="relative h-full w-full">
          <img
            src={main3}
            className="absolute left-1/2 top-1/2 min-h-full -translate-x-1/2 -translate-y-1/2 object-cover object-left-bottom"
          />
        </div>
      </div>
      <div className="z-10 w-full max-w-[1200px]">
        <div className="flex w-1/2 flex-col items-center justify-center gap-4 rounded-t-[28px] bg-gradient-to-b from-[#ffae45cc] to-[#FFAF45] px-6 py-4 font-kadwa tracking-wide text-white">
          <h2 className="w-full text-[60px] font-semibold leading-[64px] antialiased">
            Bienvenue !
          </h2>
          <p className="text-[16px] antialiased">
            Depuis janvier 2012 Chouette On Apprend oeuvre pour le respect des
            différences, l'autonomie et l'épanouissement.
          </p>
          <p className="text-[16px] antialiased">
            Notre association porte des valeurs de partage et d'ouverture pour
            transmettre le plaisir d'apprendre.
          </p>
          <div className="flex w-full items-center justify-start gap-2">
            <img src={locationIcon} className="h-4" />
            <p className="text-[14px] antialiased">Paris</p>
          </div>
          <div className="flex w-full items-center gap-2">
            <img src={emailIcon} className="h-4" />
            <p className="text-[14px] antialiased">
              contact@chouetteonapprend.org
            </p>
          </div>
          <div className="relative flex w-full justify-start gap-10">
            <img src={facebookIcon} className="h-6" />
            <img src={InstagramIcon} className="h-6" />
            <img
              src={logo}
              className="absolute bottom-0 right-0 h-20 -scale-x-100 invert"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
