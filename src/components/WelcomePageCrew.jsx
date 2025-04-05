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
        transform="translate(53 55)"
        strokeWidth="0"
      ></path>
    </svg>
  );
}

function CrewMemberComponent(props) {
  return (
    <div className="flex flex-col gap-2 py-1 text-center font-manrope tracking-wider antialiased md:py-3">
      <p className="text-3xl">{props.name}</p>
      <p className="text-sm">{props.role}</p>
    </div>
  );
}

export default function WelcomePageCrew() {
  const [crewTextVisible, setCrewTextVisible] = useState(false);

  const divRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0].isIntersecting;
      entry && setCrewTextVisible(true);
    });

    observer.observe(divRef.current);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-[#fffcf9] px-4 pb-16 lg:pb-36 lg:pt-36">
      <div
        ref={divRef}
        className="flex flex-col-reverse items-center justify-between lg:max-w-[1200px] lg:flex-row"
      >
        <div
          className={`${crewTextVisible ? "translate-x-0 opacity-100" : "lg:-translate-x-16 lg:opacity-50"} flex h-full max-w-[600px] flex-col items-center justify-around transition duration-1000 ease-out lg:w-1/2`}
        >
          <div className="flex flex-col items-center justify-between rounded-xl pt-6 lg:px-10">
            <CrewMemberComponent
              name={"Farah"}
              role={"Directrice, Psychologue et Médiatrice cognitive"}
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
            <CrewMemberComponent name={"Ben"} role={"Comédien et conteur"} />
            <div className="mt-10">
              <Button
                to={"/qui-somme-nous"}
                ariaLabel="En savoir plus sur notre équipe"
              >
                Qui sommes-nous?
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`relative flex max-w-[500px] items-center justify-center pt-16 lg:w-1/2 lg:py-0 ${crewTextVisible ? "translate-x-0 opacity-100" : "lg:translate-x-16 lg:opacity-50"} transition duration-[1200ms] ease-out`}
        >
          <img
            width={539}
            height={720}
            loading="lazy"
            src={crew}
            alt={
              "L'équipe de professionnels souriants spécialisés dans la médiation cognitive, l'apprentissage adapté et le développement de l'enfant, incluant des experts en troubles cognitifs, inclusion et pédagogie adaptée."
            }
            className="h-auto w-4/5 rounded-xl object-cover"
          />
          <div className="absolute left-1/2 top-1/2 -z-20 w-[140%] -translate-x-1/2 -translate-y-1/2">
            <ShapeSVG />
          </div>
        </div>
      </div>
    </div>
  );
}
