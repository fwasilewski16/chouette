import mainPage1 from "../assets/mainPage1.png";
import mainPage2 from "../assets/mainPage2.png";
import facebookIcon from "../assets/icons/facebook.png";
import InstagramIcon from "../assets/icons/instagram.png";
import emailIcon from "../assets/icons/email.png";
import locationIcon from "../assets/icons/location-pin.png";

export default function WelcomePageMainMobile() {
  return (
    <div className="flex flex-col items-center overflow-clip">
      <div className="sticky top-[52px] -z-20 flex w-full bg-[#FAF9F6]">
        <img src={mainPage1} className="w-full object-cover" />
      </div>
      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-3 bg-[#FAF9F6] px-5 pb-6 md:gap-6">
        <div className="absolute left-0 right-0 top-0 -mt-5 flex h-12 justify-center overflow-hidden md:-mt-7">
          <div className="min-h-[calc(100vw*8)] min-w-[calc(100vw*8)] rounded-full bg-[#FAF9F6]" />
        </div>
        <p className="z-10 max-w-[461px] text-center font-inter text-3xl tracking-wider md:max-w-[600px] md:text-5xl">
          Bienvenue!
        </p>
        <p className="max-w-[461px] text-center font-inter text-sm leading-[22px] tracking-wider md:max-w-[600px] md:text-lg">
          Depuis janvier 2012 Chouette On Apprend oeuvre pour le respect des
          différences, l'autonomie et l'épanouissement.
        </p>
        <p className="font-inetr max-w-[461px] text-center text-sm leading-[22px] tracking-wider md:max-w-[600px] md:text-lg">
          Notre association porte des valeurs de partage et d'ouverture pour
          transmettre le plaisir d'apprendre.
        </p>
        <div className="flex items-center justify-center gap-2">
          <img src={locationIcon} className="h-4" />
          <p className="text-center text-sm tracking-wider md:text-lg">Paris</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src={emailIcon} className="h-4" />
          <p className="text-center text-sm tracking-wider md:text-lg">
            contact@chouetteonapprend.org
          </p>
        </div>
        <div className="flex items-center justify-center gap-5 pt-1">
          <img src={facebookIcon} className="h-5 md:h-6" />
          <img src={InstagramIcon} className="h-5 md:h-6" />
        </div>
        <div className="absolute bottom-0 right-0 aspect-square w-1/2 translate-x-[80%] translate-y-[50%] rounded-full bg-purple-400" />
        <div className="absolute bottom-0 left-0 aspect-square w-1/2 translate-x-[-60%] translate-y-[77%] rounded-full bg-orange-400" />
      </div>
    </div>
  );
}
