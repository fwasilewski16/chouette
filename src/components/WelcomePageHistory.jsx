import { useEffect, useRef, useState } from "react";
import history from "../assets/images/history.jpg";

function ShapeSVG() {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="8 5 80 80"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <path
        fill="#AB48F9"
        d="M22.4,-28.2C28.2,-21.9,31.4,-14,32.3,-6.1C33.2,1.8,31.8,9.7,28,16.1C24.2,22.5,18,27.4,10.2,32.1C2.3,36.8,-7.2,41.3,-14.9,39.2C-22.6,37.1,-28.5,28.5,-32.7,19.7C-36.9,10.8,-39.3,1.7,-37.3,-6C-35.2,-13.7,-28.7,-20.1,-21.8,-26.2C-14.8,-32.3,-7.4,-38.1,0.5,-38.6C8.3,-39.2,16.7,-34.5,22.4,-28.2Z"
        transform="translate(50 45)"
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
      entry && setCrewTextVisible(true);
    });

    observer.observe(divRef.current);
  }, []);

  return (
    <section className="flex flex-col-reverse items-center justify-center overflow-hidden bg-[#fffcf9] sm:pt-16 lg:flex-row lg:pb-24 lg:pt-36">
      <div
        ref={divRef}
        className={`relative mt-8 flex max-w-[550px] items-center justify-center py-5 lg:w-1/2 lg:py-0 ${crewTextVisible ? "translate-x-0 opacity-100" : "lg:-translate-x-16 lg:opacity-50"} transition duration-[1200ms] ease-out`}
      >
        <img
          loading="lazy"
          src={history}
          height={882}
          width={600}
          className="z-50 w-3/5 rounded-xl object-cover brightness-[1.6]"
          alt="Une petite fille travaillant avec un enseignant dans un environnement éducatif"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0">
          <ShapeSVG />
        </div>
      </div>
      <div className="flex max-w-[550px] justify-center lg:w-1/2">
        <div
          className={`font-manrope delay-100 ${crewTextVisible ? "translate-x-0 opacity-100" : "lg:translate-x-16 lg:opacity-50"} flex flex-col gap-8 px-6 text-center tracking-wider text-black antialiased transition duration-[1200ms] ease-out lg:gap-12 lg:text-left`}
        >
          <h2 className="text-4xl">Notre histoire</h2>
          <p className="text-[14px] lg:text-sm">
            L’histoire de Chouette on Apprend est née de la rencontre d’une
            volonté - développer un projet de solidarité sociale en France,
            terre d’accueil d’une partie de notre famille - et d’une histoire
            personnelle : celle de cette inoubliable maman rencontrée au jardin
            d’enfants où allaient mes enfants, qui vivait le handicap au
            quotidien. Elle se heurtait chaque jour à cette question : quelles
            solutions éducatives en France pour mon enfant en situation de
            handicap
          </p>
          <p className="text-[14px] lg:text-sm">
            Nous avons donc conçu cette structure associative pour mettre en
            place des projets pédagogiques sur mesure pour les enfants, les
            adolescents et les jeunes adultes en difficulté d’apprentissage,
            fondés sur différentes méthodes qui ont toutes en commun la
            conviction qu’il faut identifier les potentiels d’apprentissage pour
            les aider à émerger, les développer… et que personne ne peut prédire
            la limite des possibilités d’un être humain. Les années ont passé,
            les enfants ont grandi et nous avec eux, grâce à eux aussi.
          </p>
          <div className="text-sm">
            <p className="font-semibold">
              Claire, Présidente de l'association{" "}
            </p>
            <p className="hover:underline">
              <a
                href="https://www.juniclair.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site officiel de Claire, Présidente de l'association Chouette On Apprend"
              >
                www.juniclair.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
