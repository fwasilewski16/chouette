import facebookIcon from "../assets/icons/facebook-white.png";
import InstagramIcon from "../assets/icons/instagram-white.png";
import emailIcon from "../assets/icons/email-white.png";
import locationIcon from "../assets/icons/location-pin-white.png";
import logo from "../assets/logo_white.png";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import main1 from "../assets/carousel/main1.jpg";
import main2 from "../assets/carousel/main2.jpg";
import main3 from "../assets/carousel/main3.jpg";
import main4 from "../assets/carousel/main4.jpg";
import main5 from "../assets/carousel/main5.jpg";

export default function WelcomePageMainDesktop() {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setTextVisible(true), 400);
    return () => clearTimeout(timeout);
  }, []);

  const images = [main1, main2, main3, main4, main5];

  return (
    <section className="relative hidden overflow-hidden sm:inline">
      <div className="sticky top-0 -z-50 max-h-[calc(100dvh-65px)] overflow-hidden lg:mt-[-55px] lg:max-h-[100dvh] xl:mt-[-65px]">
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{
            delay: 2100,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                height={1613}
                width={2560}
                className="max-h-full object-cover"
                alt={`Slide ${index + 1}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute bottom-0 left-3 right-1/2 flex items-end justify-end overflow-hidden">
        <div
          className={`flex w-full max-w-[540px] flex-col justify-center gap-4 rounded-t-xl bg-[#f9ab48] px-6 py-6 font-manrope tracking-wider text-white antialiased ${!textVisible && "translate-y-full"} transition duration-[1100ms]`}
        >
          <h2 className="text-2xl md:text-4xl">Bienvenue!</h2>
          <p className="text-xs font-medium lg:text-base">
            Depuis janvier 2012 Chouette On Apprend oeuvre pour le respect des
            différences, l'autonomie et l'épanouissement.
          </p>
          <p className="text-xs font-medium lg:text-base">
            Notre association porte des valeurs de partage et d'ouverture pour
            transmettre le plaisir d'apprendre.
          </p>
          <div className="flex w-full items-center justify-start gap-2">
            <img
              src={locationIcon}
              className="size-[12px] lg:size-[14px]"
              width={14}
              height={14}
              alt="Location icon"
            />
            <p className="text-xs font-medium lg:text-sm">Paris</p>
          </div>
          <div className="flex w-full items-center gap-2">
            <img
              src={emailIcon}
              className="size-[12px] lg:size-[14px]"
              width={14}
              height={14}
              alt="Email icon"
            />
            <p className="text-xs font-medium lg:text-sm">
              <a href="mailto:contact@chouetteonapprend.org">
                contact@chouetteonapprend.org
              </a>
            </p>
          </div>
          <div className="relative flex w-full justify-start gap-10">
            <a
              href="https://www.facebook.com/profile.php?id=100052757875010#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                src={facebookIcon}
                className="h-4 lg:h-5"
                alt="Facebook logo"
              />
            </a>
            <a
              href="https://www.instagram.com/chouette_on_apprend/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src={InstagramIcon}
                className="h-4 lg:h-5"
                alt="Instagram logo"
              />
            </a>
            <img
              src={logo}
              width={500}
              height={367}
              className="absolute bottom-0 right-0 hidden h-16 w-auto -scale-x-100 lg:block"
              alt="Chouette On Apprend logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
