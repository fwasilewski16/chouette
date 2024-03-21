import { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import crew from "../assets/crew.png";

function CrewMemberComponent(props) {
  return (
    <div className="flex flex-col gap-1 lg:py-2">
      <p className="text-center font-inter text-3xl tracking-wider antialiased lg:text-4xl">
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

  const textRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0].isIntersecting;
      entry ? setCrewTextVisible(true) : setCrewTextVisible(false);
    });

    observer.observe(textRef.current);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-x-clip bg-[#FAF9F6] px-8 py-6 lg:py-16">
      <div className="flex flex-col-reverse items-center justify-between lg:w-[1200px] lg:flex-row">
        <div
          className={`${crewTextVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"} flex h-full w-full flex-col items-center justify-around transition duration-1000 ease-in-out`}
        >
          <div
            ref={textRef}
            className="flex flex-col items-center justify-between gap-4 rounded-xl px-10 py-4 lg:gap-6"
          >
            <CrewMemberComponent
              name={"Farah"}
              role={"Directrice Psychologue et Médiatrice cognitive"}
            />
            <CrewMemberComponent
              name={"Samuel"}
              role={"Médiateur cognitif et musicien"}
            />
            <CrewMemberComponent
              name={"Benjamin"}
              role={"Médiateur cognitif et sculpteur"}
            />
            <CrewMemberComponent
              name={"Dorite"}
              role={"Médiatrice cognitive et enseignante"}
            />
            <div className="mt-4">
              <Button>Qui sommes-nous?</Button>
            </div>
          </div>
        </div>
        <img
          src={crew}
          className="z-10 h-[500px] rounded-xl object-cover lg:h-[600px]"
        />
        <div className="absolute -top-[50%] right-0 hidden aspect-square w-1/2 translate-x-1/3 rounded-full bg-purple-400 lg:block" />
        <div className="absolute bottom-0 right-0 top-1/3 hidden aspect-square w-1/2 translate-x-1/4 rounded-full bg-orange-400 lg:block" />
        <div className="absolute right-0 top-20 aspect-square w-1/2 translate-x-[90%] rounded-full bg-purple-400 lg:hidden" />
        <div className="absolute left-0 top-1/2 aspect-square w-2/3 translate-x-[-80%] rounded-full bg-orange-400 lg:hidden" />
      </div>
    </div>
  );
}
