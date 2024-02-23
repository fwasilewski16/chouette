import { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import crew from "../assets/crew.png";

function CrewMemberComponent(props) {
  return (
    <div className="flex flex-col gap-1 lg:py-2">
      <p className="text-center font-inter text-3xl tracking-wider antialiased lg:text-4xl">
        {props.name}
      </p>
      <p className="text-center font-serif text-sm tracking-wider antialiased">
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
      entry && setCrewTextVisible(true);
    });

    observer.observe(textRef.current);
  }, []);

  return (
    <div className="flex justify-center bg-[#FAF9F6] px-6 py-6 lg:py-16">
      <div className="flex flex-col-reverse items-center justify-between lg:w-[1200px] lg:flex-row">
        <div
          className={`${crewTextVisible ? "" : "translate-y-6 opacity-0"} flex h-full w-full flex-col items-center justify-around transition delay-500 duration-1000`}
        >
          <div
            ref={textRef}
            className="flex w-full flex-col items-center justify-between gap-4 py-4 lg:gap-6"
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
        <img src={crew} className="rounded-xl object-cover lg:h-[600px]" />
      </div>
    </div>
  );
}
