import { useEffect, useRef, useState } from "react";
import history1 from "../assets/history1.png";
import history2 from "../assets/history2.png";

export default function WelcomePageHistory() {
  const [crewTextVisible, setCrewTextVisible] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0].isIntersecting;
      entry && setCrewTextVisible(true);
    });

    observer.observe(textRef.current);
  }, []);
  return (
    <div className="flex max-w-[100vw] justify-center bg-[#FAF9F6] py-6 md:px-6 lg:py-20">
      <div className="mx-6 flex w-full max-w-[539px] justify-center lg:max-w-[1200px]">
        <div
          ref={textRef}
          className={`${crewTextVisible ? "" : "translate-x-6 opacity-0"} flex flex-col gap-4 transition delay-500 duration-1000 lg:w-1/2 lg:gap-16 lg:px-0 lg:transition-none`}
        >
          <h2 className="text-left font-inter text-4xl tracking-wider text-gray-700 antialiased lg:text-center lg:text-5xl">
            Notre histoire
          </h2>
          <p className="text-left text-sm tracking-widest antialiased lg:text-center lg:text-base lg:leading-7">
            Ce projet est né de belles rencontres et de la découverte de
            l'isolement dans lequel se trouvent les personnes en difficultés
            d'apprentissage et leurs familles. Nous avons voulu proposer une
            alternative optimiste aux prises en charge existantes, fondée sur la
            conviction que les situations d'échec dans les apprentissages ne
            sont pas une fatalité : avec une approche adaptée et beaucoup de
            travail, le changement est possible!
          </p>
        </div>
        <div className="hidden w-1/2 items-center justify-end lg:flex">
          <img
            src={history2}
            className="h-full w-[70%] rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
