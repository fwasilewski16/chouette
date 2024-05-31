import { useEffect, useRef, useState } from "react";
import history from "../assets/images/history.jpg";

function ShapeSVG() {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#AB48F9"
        d="M22.4,-28.2C28.2,-21.9,31.4,-14,32.3,-6.1C33.2,1.8,31.8,9.7,28,16.1C24.2,22.5,18,27.4,10.2,32.1C2.3,36.8,-7.2,41.3,-14.9,39.2C-22.6,37.1,-28.5,28.5,-32.7,19.7C-36.9,10.8,-39.3,1.7,-37.3,-6C-35.2,-13.7,-28.7,-20.1,-21.8,-26.2C-14.8,-32.3,-7.4,-38.1,0.5,-38.6C8.3,-39.2,16.7,-34.5,22.4,-28.2Z"
        width="100%"
        height="100%"
        transform="translate(51 55)"
        strokeWidth="0"
      ></path>
    </svg>
  );
}

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
      className="flex flex-col-reverse items-center justify-center overflow-x-hidden bg-[#fffcf9] py-10 lg:flex-row lg:py-24"
    >
      <div
        className={`relative flex max-w-[600px] items-center justify-center pt-10 lg:w-1/2 lg:py-0 ${crewTextVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"} transition duration-[1200ms] ease-in-out`}
      >
        <img
          loading="lazy"
          src={history}
          className="w-3/5 rounded-2xl object-cover brightness-150"
        />
        <div className="absolute left-1/2 top-1/2 -z-10 w-[120%] -translate-x-1/2 -translate-y-1/2">
          <ShapeSVG />
        </div>
      </div>
      <div className="flex max-w-[600px] justify-center lg:w-1/2">
        <div
          className={`font-montserrat delay-100 ${crewTextVisible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"} flex flex-col gap-10 px-4 text-center tracking-wide text-black antialiased transition duration-[1200ms] ease-in-out lg:gap-12 lg:text-left`}
        >
          <h2 className="text-4xl lg:text-5xl">Notre histoire</h2>
          <p className="text-[14px] font-medium lg:text-base">
            Ce projet est né de belles rencontres et de la découverte de
            l'isolement dans lequel se trouvent les personnes en difficultés
            d'apprentissage et leurs familles. Nous avons voulu proposer une
            alternative optimiste aux prises en charge existantes, fondée sur la
            conviction que les situations d'échec dans les apprentissages ne
            sont pas une fatalité : avec une approche adaptée et beaucoup de
            travail, le changement est possible!
          </p>
          <p className="text-[14px] font-medium lg:text-base">
            Chouette On Apprend est une Association française, soumise aux
            dispositions de la loi de 1901, qui propose un projet éducatif aux
            enfants, aux adolescents et aux jeunes adultes rencontrant des
            difficultés d'apprentissage ou ayant besoin d'un soutien
            méthodologique. L'association est financée exclusivement à ce jour
            par la Fondation Juniclair, véhicule philanthropique du groupe
            Batipart.
          </p>
        </div>
      </div>
    </div>
  );
}
