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
          <SwiperSlide>
            <img src={main1} height={1613} width={2560} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={main2} height={1613} width={2560} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={main3} height={1613} width={2560} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={main4} height={1613} width={2560} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={main5} height={1613} width={2560} />
          </SwiperSlide>
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
            width={512}
            height={512}
            className="h-4 w-auto invert"
          />
          <p className="text-sm">Paris</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img
            src={emailIcon}
            width={512}
            height={512}
            className="h-4 w-auto invert"
          />
          <p className="text-sm">contact@chouetteonapprend.org</p>
        </div>
        <div className="relative flex w-full justify-center gap-6 pt-2">
          <img
            width={512}
            height={512}
            src={facebookIcon}
            className="h-5 w-auto invert md:h-6"
          />
          <img
            width={512}
            height={512}
            src={InstagramIcon}
            className="h-5 w-auto invert md:h-6"
          />
        </div>
      </div>
    </div>
  );
}
