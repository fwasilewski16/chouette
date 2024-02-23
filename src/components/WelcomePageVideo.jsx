import { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";

function ListItem(props) {
  return (
    <li className="flex items-center lg:pl-3">
      <div className="h-8 w-[3px] -translate-x-1 bg-[#F7BB01] lg:h-7 lg:-translate-x-0" />
      <p className="pl-3 text-left text-sm tracking-widest text-white antialiased lg:pl-6 lg:tracking-normal">
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
      entry && setCrewTextVisible(true);
    });

    observer.observe(textRef.current);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-700 py-10 lg:flex-row">
      <div className="flex w-full max-w-[600px] justify-center lg:w-1/2">
        <iframe
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: "0.75rem",
            marginRight: "24px",
            marginLeft: "24px",
          }}
          src="https://www.youtube.com/embed/hiMzDGW6PY4?si=mlsvWgO-br6UNiMn"
        />
      </div>
      <div
        ref={textRef}
        className={`${crewTextVisible ? "" : "-translate-x-6 opacity-0 lg:translate-x-6"} flex max-w-[600px] flex-col px-6 pt-10 transition delay-500 duration-1000 lg:w-1/2 lg:p-0 lg:pl-10`}
      >
        <p className="px-3 font-inter text-4xl tracking-wider text-white antialiased">
          Notre équipe vous propose:
        </p>
        <ul className="flex h-full list-inside list-none flex-col justify-between gap-2 py-5 text-justify font-inter lg:h-[315px]">
          <ListItem>
            Des séances individuelles de médiation cognitive (méthode
            Feuerstein, Raviv, Montessori)
          </ListItem>
          <ListItem>
            Des séances de travail par le biais de l'expression artistique
            (musique, sculpture, peinture, dessin)
          </ListItem>
          <ListItem>
            Des séances qui incluent des temps de relaxation, de respiration et
            de yoga
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
  );
}
