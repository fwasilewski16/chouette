import facebookIcon from "../assets/icons/facebook-white.png";
import InstagramIcon from "../assets/icons/instagram-white.png";
import emailIcon from "../assets/icons/email-white.png";
import locationIcon from "../assets/icons/location-pin-white.png";
import logo from "../assets/logo_white.png";

export default function WelcomePageMainDesktop() {
  return (
    <section className="mt-[-80px] hidden h-[100vh] items-end justify-center md:flex">
      <div className="w-full max-w-[1100px]">
        <div className="ml-3 flex w-1/2 flex-col items-center justify-center gap-4 rounded-t-xl bg-[#f9ab48] px-5 py-4 font-montserrat font-medium tracking-wide text-white antialiased">
          <h2 className="w-full text-4xl xl:text-5xl">Bienvenue !</h2>
          <p>
            Depuis janvier 2012 Chouette On Apprend oeuvre pour le respect des
            différences, l'autonomie et l'épanouissement.
          </p>
          <p>
            Notre association porte des valeurs de partage et d'ouverture pour
            transmettre le plaisir d'apprendre.
          </p>
          <div className="flex w-full items-center justify-start gap-2">
            <img src={locationIcon} className="h-4" />
            <p>Paris</p>
          </div>
          <div className="flex w-full items-center gap-2">
            <img src={emailIcon} className="h-4" />
            <p>contact@chouetteonapprend.org</p>
          </div>
          <div className="relative flex w-full justify-start gap-10">
            <img src={facebookIcon} className="h-6" />
            <img src={InstagramIcon} className="h-6" />
            <img
              src={logo}
              className="absolute bottom-0 right-0 hidden h-20 -scale-x-100 lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
