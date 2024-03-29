import { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import crew from "../assets/crew.png";

function CrewMemberComponent(props) {
  return (
    <div className="flex flex-col gap-3 md:py-2">
      <p className="text-center font-inter text-3xl tracking-wide antialiased md:text-4xl">
        {props.name}
      </p>
      <p className="text-center text-sm tracking-wider antialiased">
        {props.role}
      </p>
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
      className="relative flex flex-col items-center justify-center overflow-x-clip bg-[#ffae450c] p-6 md:py-16"
    >
      <div className="flex flex-col-reverse items-center justify-between md:flex-row lg:w-[1200px]">
        <div
          className={`${crewTextVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"} flex h-full max-w-[600px] flex-col items-center justify-around transition duration-1000 ease-in-out md:w-1/2`}
        >
          <div className="flex flex-col items-center justify-between rounded-xl py-4 md:px-10">
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
            <div className="my-3 h-[1px] w-3/5 bg-black" />
            <div className="mt-5">
              <Button>Qui sommes-nous?</Button>
            </div>
          </div>
        </div>
        <div
          className={`my-10 flex max-w-[300px] justify-center md:w-1/2 md:max-w-[600px] ${crewTextVisible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"} transition duration-[1200ms] ease-in-out`}
        >
          <div className="relative">
            <img src={crew} className="w-[420px] rounded-2xl object-cover" />
            <div className="absolute left-0 top-[-20px] -z-10 aspect-square w-[110%] rotate-3 bg-[#FFAF45]"></div>
            <div className="absolute bottom-[-20px] right-0 -z-10 aspect-square w-[110%] rotate-3 bg-[#af45ff]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
