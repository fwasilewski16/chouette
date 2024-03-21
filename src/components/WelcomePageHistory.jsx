import { useEffect, useRef, useState } from "react";
import history1 from "../assets/history1.png";
import history2 from "../assets/history2.png";

export default function WelcomePageHistory() {
  const [crewTextVisible, setCrewTextVisible] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0].isIntersecting;
      entry ? setCrewTextVisible(true) : setCrewTextVisible(false);
    });

    observer.observe(textRef.current);
  }, []);
  return (
    <div className="relative flex max-w-[100vw] flex-col items-center justify-center overflow-hidden bg-[#FAF9F6] px-4">
      <div className="flex w-full max-w-[539px] justify-center lg:max-w-[1200px]">
        <div
          ref={textRef}
          className={`${crewTextVisible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"} flex flex-col gap-5 py-6 text-black transition duration-1000 ease-in-out lg:my-28 lg:w-1/2 lg:gap-16 lg:p-0`}
        >
          <h2 className="z-10 text-center font-inter text-4xl tracking-wider antialiased lg:text-center lg:text-5xl">
            Notre histoire
          </h2>
          <p className="z-10 text-sm tracking-widest antialiased md:text-center lg:text-base lg:leading-7">
            Ce projet est né de belles rencontres et de la découverte de
            l'isolement dans lequel se trouvent les personnes en difficultés
            d'apprentissage et leurs familles. Nous avons voulu proposer une
            alternative optimiste aux prises en charge existantes, fondée sur la
            conviction que les situations d'échec dans les apprentissages ne
            sont pas une fatalité : avec une approche adaptée et beaucoup de
            travail, le changement est possible!
          </p>
        </div>
        <div className="hidden w-1/2 items-center justify-end lg:my-28 lg:flex">
          <img
            src={history2}
            className="z-10 h-full w-[80%] rounded-xl object-cover"
          />
        </div>
      </div>
      <div className="absolute -top-[80%] right-0 hidden aspect-square w-1/2 translate-x-1/3 rounded-full bg-purple-400 lg:block" />
      <div className="absolute bottom-0 right-0 top-1/3 hidden aspect-square w-1/2 translate-x-1/4 rounded-full bg-orange-400 lg:block" />
      <div className="absolute right-0 top-0 aspect-square w-1/2 translate-x-[80%] translate-y-[-50%] rounded-full bg-orange-400 lg:hidden" />
      <div className="absolute left-0 top-0 aspect-square w-1/2 translate-x-[-60%] translate-y-[-77%] rounded-full bg-purple-400 lg:hidden" />
    </div>
  );
}
