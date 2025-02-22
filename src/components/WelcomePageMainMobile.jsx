import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import facebookIcon from "../assets/icons/facebook-white.png";
import InstagramIcon from "../assets/icons/instagram-white.png";
import emailIcon from "../assets/icons/email-white.png";
import locationIcon from "../assets/icons/location-pin-white.png";

import main1 from "../assets/carousel/main1.jpg";
import main2 from "../assets/carousel/main2.jpg";
import main3 from "../assets/carousel/main3.jpg";
import main4 from "../assets/carousel/main4.jpg";
import main5 from "../assets/carousel/main5.jpg";

export default function WelcomePageMainMobile() {
  const images = [main1, main2, main3, main4, main5];

  return (
    <div className="sm:hidden">
      <div className="sticky top-0 -z-50">
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
                alt={`Slide ${index + 1}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex w-full flex-col gap-4 bg-[#f9ab48] p-5 font-manrope font-medium tracking-wider text-white">
        <p className="text-3xl font-medium antialiased">Bienvenue!</p>
        <p className="max-w-[450px] text-sm">
          Depuis janvier 2012 Chouette On Apprend oeuvre pour le respect des
          différences, l'autonomie et l'épanouissement.
        </p>
        <p className="max-w-[450px] text-sm">
          Notre association porte des valeurs de partage et d'ouverture pour
          transmettre le plaisir d'apprendre.
        </p>
      </div>
      <div className="flex w-full flex-col gap-2 bg-[#FFFCF9] py-16 font-manrope font-medium tracking-wider">
        <div className="flex items-center justify-center gap-2">
          <img
            src={locationIcon}
            width={16}
            height={16}
            className="h-4 w-auto invert"
            alt="Location icon"
          />
          <p className="text-sm">Paris</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img
            src={emailIcon}
            width={16}
            height={16}
            className="h-4 w-auto invert"
            alt="Email icon"
          />
          <p className="text-sm">contact@chouetteonapprend.org</p>
        </div>
        <div className="relative flex w-full justify-center gap-6 pt-2">
          <a
            href="https://www.facebook.com/profile.php?id=100052757875010#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              width={20}
              height={20}
              src={facebookIcon}
              className="h-5 w-auto invert md:h-6"
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
              width={20}
              height={20}
              src={InstagramIcon}
              className="h-5 w-auto invert md:h-6"
              alt="Instagram logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
