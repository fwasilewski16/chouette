import mainPage1 from "../assets/mainPage1.png";
import mainPage2 from "../assets/mainPage2.png";
import facebookIcon from "../assets/icons/facebook.png";
import InstagramIcon from "../assets/icons/instagram.png";
import emailIcon from "../assets/icons/email.png";
import locationIcon from "../assets/icons/location-pin.png";

export default function WelcomePageMainMobile() {
  return (
    <div className="flex flex-col items-center bg-[#FAF9F6]">
      <div className="sticky top-[68px] mx-3 mt-4 flex h-[250px] justify-center overflow-hidden md:h-fit">
        <img src={mainPage1} className="h-[100%] rounded-lg object-cover" />
      </div>
      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-3 bg-[#FAF9F6] px-3 pb-6 md:h-[380px] md:gap-5">
        <div className="absolute left-0 right-0 top-0 -z-10 -mt-5 flex h-12 justify-center overflow-hidden md:-mt-7">
          <div className="min-h-[calc(100vw*8)] min-w-[calc(100vw*8)] rounded-full bg-[#FAF9F6]" />
        </div>
        <p className="max-w-[461px] text-center font-inter text-3xl tracking-wider md:max-w-[600px] md:text-4xl">
          Bienvenue!
        </p>
        <p className="max-w-[461px] text-center font-inter text-sm leading-[22px] tracking-wider md:max-w-[600px] md:text-lg">
          Depuis janvier 2012 Chouette On Apprend oeuvre pour le respect des
          différences, l'autonomie et l'épanouissement.
        </p>
        <p className="max-w-[461px] text-center font-inter text-sm leading-[22px] tracking-wider md:max-w-[600px] md:text-lg">
          Notre association porte des valeurs de partage et d'ouverture pour
          transmettre le plaisir d'apprendre.
        </p>
        <div className="flex items-center justify-center gap-2">
          <img src={locationIcon} className="h-4" />
          <p className="text-center text-sm tracking-wider md:text-base">
            Paris
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src={emailIcon} className="h-4" />
          <p className="text-center text-sm tracking-wider md:text-base">
            contact@chouetteonapprend.org
          </p>
        </div>
        <div className="flex items-center justify-center gap-5 pt-1">
          <img src={facebookIcon} className="h-5 md:h-6" />
          <img src={InstagramIcon} className="h-5 md:h-6" />
        </div>
      </div>
    </div>
  );
}
