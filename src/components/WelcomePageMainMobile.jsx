import facebookIcon from "../assets/icons/facebook-white.png";
import InstagramIcon from "../assets/icons/instagram-white.png";
import emailIcon from "../assets/icons/email-white.png";
import locationIcon from "../assets/icons/location-pin-white.png";

export default function WelcomePageMainMobile() {
  return (
    <div className="relative">
      <div className="flex w-full flex-col items-center gap-3 bg-[#f9ab48] px-6 py-5 text-center font-montserrat font-medium text-white md:hidden md:gap-6">
        <p className="w-full text-center text-4xl font-medium antialiased">
          Bienvenue!
        </p>
        <p className="max-w-[450px] text-sm">
          Depuis janvier 2012 Chouette On Apprend oeuvre pour le respect des
          différences, l'autonomie et l'épanouissement.
        </p>
        <p className="max-w-[450px] text-sm">
          Notre association porte des valeurs de partage et d'ouverture pour
          transmettre le plaisir d'apprendre.
        </p>
        <div className="flex items-center justify-center gap-2">
          <img
            src={locationIcon}
            width={512}
            height={512}
            className="h-4 w-auto"
          />
          <p className="text-sm">Paris</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img
            src={emailIcon}
            width={512}
            height={512}
            className="h-4 w-auto"
          />
          <p className="text-sm">contact@chouetteonapprend.org</p>
        </div>
        <div className="relative flex w-full justify-center gap-5 pt-1">
          <img
            width={512}
            height={512}
            src={facebookIcon}
            className="h-5 w-auto md:h-6"
          />
          <img
            width={512}
            height={512}
            src={InstagramIcon}
            className="h-5 w-auto md:h-6"
          />
        </div>
      </div>
    </div>
  );
}
