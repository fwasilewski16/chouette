import { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import crew from "../assets/images/crew.jpg";

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
        transform="translate(53 55)"
        strokeWidth="0"
      ></path>
    </svg>
  );
}

function CrewMemberComponent(props) {
  return (
    <div className="flex flex-col gap-2 py-1 text-center font-montserrat tracking-wide antialiased md:py-3">
      <p className="text-3xl md:text-4xl">{props.name}</p>
      <p className="text-sm font-medium">{props.role}</p>
    </div>
  );
}

export default function WelcomePageCrew() {
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
      className="relative flex flex-col items-center justify-center overflow-x-clip bg-[#fffcf9] px-4 pb-10 lg:pt-16"
    >
      <div className="flex flex-col-reverse items-center justify-between lg:max-w-[1200px] lg:flex-row">
        <div
          className={`${crewTextVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"} flex h-full max-w-[600px] flex-col items-center justify-around transition duration-1000 ease-in-out lg:w-1/2`}
        >
          <div className="flex flex-col items-center justify-between rounded-xl pt-6 lg:px-10">
            <CrewMemberComponent
              name={"Farah"}
              role={"Directrice Psychologue et Médiatrice cognitive"}
            />
            <div className="my-3 h-[1px] w-3/5 bg-black" />
            <CrewMemberComponent
              name={"Samuel"}
              role={"Médiateur cognitif et musicien"}
            />
            <div className="my-3 h-[1px] w-3/5 bg-black" />
            <CrewMemberComponent
              name={"Benjamin"}
              role={"Médiateur cognitif et sculpteur"}
            />
            <div className="my-3 h-[1px] w-3/5 bg-black" />
            <CrewMemberComponent
              name={"Dorite"}
              role={"Médiatrice cognitive et enseignante"}
            />
            <div className="mt-10">
              <Button to={"/qui-somme-nous"}>Qui sommes-nous?</Button>
            </div>
          </div>
        </div>
        <div
          className={`relative flex max-w-[600px] items-center justify-center pt-10 lg:w-1/2 lg:py-0 ${crewTextVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"} transition duration-[1200ms] ease-in-out`}
        >
          <img
            loading="lazy"
            src={crew}
            className="w-4/5 rounded-2xl object-cover"
          />
          <div className="absolute left-1/2 top-1/2 -z-20 w-[140%] -translate-x-1/2 -translate-y-1/2">
            <ShapeSVG />
          </div>
        </div>
      </div>
    </div>
  );
}
