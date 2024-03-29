import { useEffect, useRef, useState } from "react";
import history from "../assets/images/history.jpg";

export default function WelcomePageHistory() {
  const [crewTextVisible, setCrewTextVisible] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0].isIntersecting;
      entry ? setCrewTextVisible(true) : setCrewTextVisible(false);
    });

    observer.observe(divRef.current);
  }, []);
  return (
    <div
      ref={divRef}
      className="relative flex items-center justify-center overflow-x-clip bg-[#ffae450c] px-5 py-10 lg:py-24"
    >
      <div
        className={`relative hidden w-1/2 max-w-[600px] items-center justify-center lg:flex ${crewTextVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"} transition duration-[1200ms] ease-in-out`}
      >
        <img
          src={history}
          className="z-10 w-[350px] rounded-2xl object-cover brightness-150"
        />
        <div className="absolute h-[545px] w-[380px] -rotate-3 rounded-2xl bg-[#af45ff]"></div>
        <div className="absolute h-[545px] w-[380px] rotate-3 rounded-2xl bg-[#FFAF45]"></div>
      </div>
      <div className="flex max-w-[600px] justify-center lg:w-1/2">
        <div
          className={`font-inter delay-100 ${crewTextVisible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"} flex flex-col gap-5 text-black transition duration-[1200ms] ease-in-out lg:gap-12 lg:p-0`}
        >
          <h2 className="text-center text-4xl tracking-wider antialiased lg:text-center lg:text-5xl">
            Notre histoire
          </h2>
          <p className="text-center text-[14px] leading-6 tracking-wide antialiased lg:text-base lg:leading-7">
            Ce projet est né de belles rencontres et de la découverte de
            l'isolement dans lequel se trouvent les personnes en difficultés
            d'apprentissage et leurs familles. Nous avons voulu proposer une
            alternative optimiste aux prises en charge existantes, fondée sur la
            conviction que les situations d'échec dans les apprentissages ne
            sont pas une fatalité : avec une approche adaptée et beaucoup de
            travail, le changement est possible!
          </p>
          <p className="text-center text-[14px] leading-6 tracking-wide antialiased lg:text-base lg:leading-7">
            Chouette On Apprend est une Association française, soumise aux
            dispositions de la loi de 1901, qui propose un projet éducatif aux
            enfants, aux adolescents et aux jeunes adultes rencontrant des
            difficultés d'apprentissage ou ayant besoin d'un soutien
            méthodologique. L'association est financée exclusivement à ce jour
            par la Fondation Juniclair, véhicule philanthropique du groupe
            Batipart.
          </p>
          <div className="relative my-4 flex items-center justify-center lg:hidden">
            <img
              src={history}
              className="z-10 w-[200px] rounded-2xl object-cover brightness-150"
            />
            <div className="absolute top-1/2 -z-10 h-[314px] w-[220px] -translate-y-1/2 -rotate-3 rounded-2xl bg-[#af45ff]"></div>
            <div className="absolute top-1/2 -z-10 h-[314px] w-[220px] -translate-y-1/2 rotate-3 rounded-2xl bg-[#FFAF45]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
