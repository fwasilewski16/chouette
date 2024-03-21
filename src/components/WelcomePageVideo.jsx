import { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import history2 from "../assets/history2.png";

function ListItem(props) {
  return (
    <li className="flex min-h-[54px] items-center lg:pl-3">
      <div className="h-8 w-[3px] -translate-x-1 bg-[#F7BB01] lg:h-6 lg:-translate-x-0" />
      <p className="pl-3 text-left text-sm tracking-widest text-white antialiased lg:pl-6">
        {props.children}
      </p>
    </li>
  );
}

export default function WelcomePageVideo() {
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
    <div className="relative z-10 flex flex-col items-center justify-center bg-slate-500 px-5">
      <div className="flex w-full max-w-[539px] justify-center lg:max-w-[1200px]">
        <div className="hidden w-1/2 items-center lg:my-24 lg:flex">
          <img
            src={history2}
            className="z-10 h-full w-[80%] rounded-xl object-cover"
          />
        </div>
        <div
          ref={textRef}
          className={`${crewTextVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"} flex flex-col py-8 transition duration-1000 ease-in-out lg:my-24 lg:w-1/2 lg:p-0`}
        >
          <p className="px-3 font-inter text-3xl tracking-wider text-white antialiased lg:text-4xl">
            Notre équipe vous propose:
          </p>
          <ul className="flex h-full list-inside list-none flex-col justify-between py-5 text-justify font-inter">
            <ListItem>
              Des séances individuelles de médiation cognitive (méthode
              Feuerstein, Raviv, Montessori)
            </ListItem>
            <ListItem>
              Des séances de travail par le biais de l'expression artistique
              (musique, sculpture, peinture, dessin)
            </ListItem>
            <ListItem>
              Des séances qui incluent des temps de relaxation, de respiration
              et de yoga
            </ListItem>
            <ListItem>
              Des ateliers centrés sur la dynamique familiale (ateliers ados,
              frères et soeurs et parents)
            </ListItem>
            <ListItem>
              Des interventions dans les écoles (suivi pédagogique,
              sensibilisation)
            </ListItem>
            <ListItem>
              Des échanges réguliers avec les autres thérapeutes
            </ListItem>
          </ul>
          <Button>Pédagogie</Button>
        </div>
      </div>
    </div>
  );
}
