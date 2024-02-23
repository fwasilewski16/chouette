import { useEffect, useState } from "react";

import mainPage1 from "../assets/mainPage1.png";
import mainPage2 from "../assets/mainPage2.png";
import facebookIcon from "../assets/icons/facebook-white.png";
import InstagramIcon from "../assets/icons/instagram-white.png";
import emailIcon from "../assets/icons/email-white.png";
import locationIcon from "../assets/icons/location-pin-white.png";

export default function WelcomePageMainDesktop() {
  const [image, setImage] = useState(mainPage1);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setTextVisible(false);
      } else {
        setTextVisible(true);
      }
    });
    setTimeout(() => {
      if (image === mainPage1) {
        setImage(mainPage2);
      }
      if (image === mainPage2) {
        setImage(mainPage1);
      }
    }, 10000);
  }, [image]);

  return (
    <div className="relative flex h-full flex-col overflow-hidden">
      <div
        className={`${image === mainPage1 ? "opacity-100" : "opacity-0"} absolute bottom-0 left-0 right-0 top-0 transition duration-1000`}
      >
        <img src={mainPage1} className="h-full w-full object-cover" />
      </div>
      <div
        className={`${image === mainPage2 ? "opacity-100" : "opacity-0"} absolute bottom-0 left-0 right-0 top-0 transition duration-1000`}
      >
        <img src={mainPage2} className="h-full w-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-black opacity-45" />
      <div className="z-20 h-full">
        <div
          className={`flex h-full flex-col items-center justify-center text-white ${!textVisible && "opacity-0"} transition-all duration-1000`}
        >
          <div className="flex max-w-[600px] flex-col items-center justify-center gap-7 px-5 pt-5">
            <h2 className="text-center font-inter text-6xl font-light tracking-wider antialiased">
              Bienvenue !
            </h2>
            <p className="text-center font-inter font-light leading-[22px] tracking-widest antialiased">
              Depuis janvier 2012 Chouette On Apprend oeuvre pour le respect des
              différences, l'autonomie et l'épanouissement.
            </p>
            <p className="text-center font-inter font-light leading-[22px] tracking-widest antialiased">
              Notre association porte des valeurs de partage et d'ouverture pour
              transmettre le plaisir d'apprendre.
            </p>
          </div>
          <div className="flex w-full max-w-[600px] flex-col gap-7 pb-5 pt-7">
            <div className="flex items-center justify-center gap-2">
              <img src={locationIcon} className="h-5" />
              <p className="text-center text-sm tracking-widest antialiased">
                Paris
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img src={emailIcon} className="h-5" />
              <p className="text-center text-sm tracking-widest antialiased">
                contact@chouetteonapprend.org
              </p>
            </div>
            <div className="flex items-center justify-center gap-8 pt-1">
              <img src={facebookIcon} className="h-6" />
              <img src={InstagramIcon} className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
