import { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import icon1 from "../assets/icons/psychology.png";
import icon2 from "../assets/icons/paint.png";
import icon3 from "../assets/icons/relieved.png";
import icon4 from "../assets/icons/family.png";
import icon5 from "../assets/icons/graduation-cap.png";
import icon6 from "../assets/icons/speech-bubble.png";

function ListItem(props) {
  return (
    <li className="min-h-full max-w-[350px] items-center p-2 md:w-1/3 md:max-w-none">
      <div
        className={`flex flex-col items-center gap-2 rounded-xl px-2 py-5 md:h-[230px] lg:h-[190px] ${props.colour} border-2`}
      >
        <img src={props.icon} className="h-16" />
        <p className="text-center text-[16px] tracking-wide antialiased">
          {props.children}
        </p>
      </div>
    </li>
  );
}

export default function WelcomePageVideo() {
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
      className="relative z-10 flex items-center justify-center bg-[#ffae450c]"
    >
      <div
        className={`${crewTextVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"} flex max-w-[1200px] flex-col gap-7 px-5 transition delay-100 duration-[1200ms] ease-in-out md:gap-14 lg:p-14`}
      >
        <p className="text-center font-inter text-4xl tracking-wider antialiased md:text-center md:text-5xl">
          Notre équipe vous propose:
        </p>
        <ul className="flex h-full flex-col items-center text-justify font-inter md:flex-row md:flex-wrap md:items-start">
          <ListItem colour={"bg-purple-100 border-purple-300"} icon={icon1}>
            Des séances individuelles de médiation cognitive (méthode
            Feuerstein, Raviv, Montessori)
          </ListItem>
          <ListItem colour={"bg-yellow-100 border-yellow-300"} icon={icon2}>
            Des séances de travail par le biais de l'expression artistique
            (musique, sculpture, peinture, dessin)
          </ListItem>
          <ListItem colour={"bg-green-100 border-green-300"} icon={icon3}>
            Des séances qui incluent des temps de relaxation, de respiration et
            de yoga
          </ListItem>
          <ListItem colour={"bg-gray-100 border-gray-300"} icon={icon4}>
            Des ateliers centrés sur la dynamique familiale (ateliers ados,
            frères et soeurs et parents)
          </ListItem>
          <ListItem colour={"bg-sky-100 border-sky-300"} icon={icon5}>
            Des interventions dans les écoles (suivi pédagogique,
            sensibilisation)
          </ListItem>
          <ListItem colour={"bg-pink-100 border-pink-300"} icon={icon6}>
            Des échanges réguliers avec les autres thérapeutes
          </ListItem>
        </ul>
        <div className="flex w-full justify-center">
          <Button>Pédagogie</Button>
        </div>
      </div>
    </div>
  );
}
