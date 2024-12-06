import { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import icon1 from "../assets/icons/col/psychology.png";
import icon2 from "../assets/icons/col/paint.png";
import icon3 from "../assets/icons/col/relieved.png";
import icon4 from "../assets/icons/col/family.png";
import icon5 from "../assets/icons/col/graduation-cap.png";
import icon6 from "../assets/icons/col/speech-bubble.png";

function ShapeSVG1() {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "85%", height: "auto" }}
    >
      <path
        fill="none"
        d="M19.1,-24.9C24,-18.6,26.9,-11.9,30.3,-3.7C33.8,4.6,37.9,14.4,35.2,21.6C32.6,28.8,23.2,33.3,13.8,35.9C4.4,38.4,-5,39,-14.1,36.6C-23.2,34.3,-32,28.9,-35.4,21.2C-38.8,13.6,-36.9,3.7,-34.6,-5.5C-32.2,-14.7,-29.4,-23.2,-23.6,-29.3C-17.8,-35.5,-8.9,-39.2,-0.9,-38.1C7.1,-37,14.1,-31.2,19.1,-24.9Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="1"
        stroke="#F9AB48"
      ></path>
    </svg>
  );
}

function ListItemDesktop(props) {
  return (
    <li
      style={{
        position: "absolute",
        width: "23%",
        aspectRatio: "1 / 1",
        left: "50%",
        top: "50%",
        borderRadius: "50%",
        transform: `translate(-50%, -50%) rotate(${props.rotate}deg) translate(0, 130%) rotate(-${props.rotate}deg)`,
      }}
    >
      <div
        className={`flex h-full flex-col items-center justify-center gap-3 rounded-full border-2 border-gray-200 bg-white px-6 shadow-xl`}
      >
        <img
          src={props.icon}
          loading="lazy"
          className="h-1/4 w-auto object-cover"
          width={512}
          height={512}
        />
        <p className="text-center text-[14px] tracking-wide antialiased xl:text-sm">
          {props.children}
        </p>
      </div>
    </li>
  );
}

function ListItemMobile(props) {
  return (
    <li className="flex w-full justify-center md:mb-8 md:w-1/2">
      <div className="flex w-[300px] flex-col items-center gap-2 rounded-3xl border border-gray-300 bg-white p-4">
        <img
          src={props.icon}
          width={512}
          height={512}
          className="h-auto w-16"
        />
        <p className="text-center text-[14px] font-medium tracking-wider">
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
      entry && setCrewTextVisible(true);
    });

    observer.observe(divRef.current);
  }, []);

  return (
    <section
      ref={divRef}
      className="relative flex justify-center bg-[#fffcf9] px-4 font-manrope"
    >
      <div
        className={`${crewTextVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-50"} hidden w-full max-w-[1200px] flex-col items-center justify-center transition delay-100 duration-[1200ms] ease-out lg:flex`}
      >
        <ShapeSVG1 />
        <div className="absolute left-1/2 top-1/2 flex w-[400px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-12">
          <p className="text-center font-manrope text-4xl tracking-wider antialiased">
            Notre équipe vous propose
          </p>
          <Button to={"/pedagogie"}>Pédagogie</Button>
        </div>
        <ul className="mb-16">
          <ListItemDesktop icon={icon1} rotate={180}>
            Des séances individuelles de médiation cognitive (méthode
            Feuerstein, Raviv, Montessori)
          </ListItemDesktop>
          <ListItemDesktop icon={icon2} rotate={120}>
            Des séances de travail par le biais de l'expression artistique
            (musique, sculpture, peinture, dessin)
          </ListItemDesktop>
          <ListItemDesktop icon={icon3} rotate={60}>
            Des séances qui incluent des temps de relaxation, de respiration et
            de yoga
          </ListItemDesktop>
          <ListItemDesktop icon={icon4} rotate={0}>
            Des ateliers centrés sur la dynamique familiale (ateliers ados,
            frères et soeurs et parents)
          </ListItemDesktop>
          <ListItemDesktop icon={icon5} rotate={240}>
            Des interventions dans les écoles (suivi pédagogique,
            sensibilisation)
          </ListItemDesktop>
          <ListItemDesktop icon={icon6} rotate={300}>
            Des échanges réguliers avec les autres thérapeutes
          </ListItemDesktop>
        </ul>
      </div>
      <div className="flex w-full flex-col items-center justify-center pt-16 antialiased lg:hidden">
        <p className="mb-16 text-center text-4xl tracking-wide">
          Notre équipe vous propose
        </p>
        <ul className="mb-16 flex max-w-[650px] flex-wrap gap-8 md:mb-8 md:gap-0">
          <ListItemMobile icon={icon1} rotate={0}>
            Des séances individuelles de médiation cognitive (méthode
            Feuerstein, Raviv, Montessori)
          </ListItemMobile>
          <ListItemMobile icon={icon2} rotate={60}>
            Des séances de travail par le biais de l'expression artistique
            (musique, sculpture, peinture, dessin)
          </ListItemMobile>
          <ListItemMobile icon={icon3} rotate={120}>
            Des séances qui incluent des temps de relaxation, de respiration et
            de yoga
          </ListItemMobile>
          <ListItemMobile icon={icon4} rotate={180}>
            Des ateliers centrés sur la dynamique familiale (ateliers ados,
            frères et soeurs et parents)
          </ListItemMobile>
          <ListItemMobile icon={icon5} rotate={240}>
            Des interventions dans les écoles (suivi pédagogique,
            sensibilisation)
          </ListItemMobile>
          <ListItemMobile icon={icon6} rotate={300}>
            Des échanges réguliers avec les autres thérapeutes
          </ListItemMobile>
        </ul>
        <Button to={"/pedagogie"}>Pédagogie</Button>
      </div>
    </section>
  );
}
