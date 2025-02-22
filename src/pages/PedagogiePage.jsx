import méthodeFeuerstein from "../assets/pedagogie/méthodeFeuerstein.webp";
import montessori from "../assets/pedagogie/montessori.webp";
import seancesculpture from "../assets/pedagogie/seancesculpture.webp";
import atelierconte from "../assets/pedagogie/atelierconte.webp";
import séancemusique from "../assets/pedagogie/séancemusique.webp";
import méthodeRaviv from "../assets/pedagogie/méthodeRaviv.webp";
import bienÊtre from "../assets/pedagogie/bienÊtre.webp";
import { useEffect, useState } from "react";

function PedagogieSingle(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="mx-auto mt-10 flex flex-col gap-3 px-6 sm:w-1/2 lg:w-1/3">
      <img
        src={props.img}
        width={352}
        height={352}
        className={`${imageLoaded ? "opacity-100" : "opacity-0"} mx-auto rounded-2xl object-cover transition duration-500`}
        onLoad={() => setImageLoaded(true)}
        alt={props.title}
      />
      <h4 className="text-lg font-medium">{props.title}</h4>
      {props.text.map((text, index) => (
        <p key={index} className="text-justify text-sm">
          {text}
        </p>
      ))}
    </div>
  );
}

export default function PedagogiePage() {
  const [divVisible, setDivVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDivVisible(true);
    }, 100);
  }, []);

  return (
    <section className="bg-[#fffcf9] pt-[55px] xl:pt-[65px]">
      <div
        className={`flex flex-col pb-10 font-manrope antialiased ${divVisible ? "" : "translate-y-2 opacity-0"} transition duration-1000`}
      >
        <div className="flex flex-col items-center py-12">
          <div className="flex w-full max-w-[600px] flex-col items-center gap-12 px-4 text-center">
            <h2 className="text-4xl text-[#F9AB48]">Une pédagogie adaptée</h2>
            <p className="max-w-[415px] text-sm tracking-wider lg:max-w-[600px] lg:text-base">
              Notre approche est pluridisciplinaire et vise une prise en charge
              complémentaire et spécifique. Elle ne se fonde pas sur une méthode
              en particulier mais sur la construction d'une relation de qualité
              entre les protagonistes de la séance de médiation.
            </p>
            <p className="max-w-[415px] text-sm tracking-wider lg:max-w-[600px] lg:text-base">
              Nous nous insérons dans le projet global de l'enfant ou de
              l'adolescent, en prêtant une attention particulière au dialogue
              avec les thérapeutes et l'école. Notre équipe vous propose des
              séances de travail fondées sur le partage, l'ouverture et le
              plaisir d'apprendre.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl text-[#F9AB48] lg:text-4xl">
            Notre boîte à outils
          </h2>
          <div className="flex w-full max-w-[1200px] flex-col pb-10 text-center sm:flex-row sm:flex-wrap">
            <PedagogieSingle
              img={méthodeFeuerstein}
              title={"Méthode Feuerstein"}
              text={[
                "La méthode de médiation cognitive Feuerstein est une pratique thérapeutique qui se définit par la qualité de l’interaction entre l’apprenant et le médiateur. Ce dernier a pour mission de faire prendre conscience du raisonnement et donc d'apprendre à apprendre !",
                "Le professeur Feuerstein a créé des outils spécifiques de travail cognitif et de construction de concepts fondamentaux aux apprentissages.",
                "Le postulat de base de la méthode est que tout être humain est modifiable quelles que soient l’origine et la nature de son trouble et quel que soit son âge.",
              ]}
            />
            <PedagogieSingle
              img={montessori}
              title={"Montessori"}
              text={[
                "La pédagogie Montessori est une pédagogie globale et active.",
                "Les outils Montessori permettent de travailler l'ensemble des concepts à travers différents domaines : la vie pratique, le sensoriel, le français et les mathématiques. Nous les utiliserons selon les besoins cognitifs de chacun.",
              ]}
            />
            <PedagogieSingle
              img={seancesculpture}
              title={"Séances de médiation par la sculpture et le dessin"}
              text={[
                "Pratiquer les arts plastiques c’est d’abord réaliser une idée avec ses mains, c’est aussi développer sa confiance en soi.",
                "La sculpture, le dessin, la peinture servent aussi à aborder de nombreux concepts par l’observation et la restitution d’un modèle, sans oublier le jeu et le plaisir de faire ensemble. Il devient donc plus facile pour tous d’apprendre en relation avec une activité artistique.",
              ]}
            />
            <PedagogieSingle
              img={atelierconte}
              title={"Atelier Conte"}
              text={[
                "Depuis septembre 2023, Ben a rejoint l’association afin d’y animer des ateliers conte, ouverts aux apprenants qui le souhaitent.",
                "Ces ateliers ont pour but la lecture d’histoires adaptées au degré de compréhension des enfants et des adolescents. Ils sont généralement suivis de courts échanges et de jeux de rôle pour stimuler la créativité et l’imagination de chacun, tout en favorisant les échanges !",
              ]}
            />
            <PedagogieSingle
              img={séancemusique}
              title={"Séances de médiation par la musique"}
              text={[
                "Au cœur d'une séance de médiation par la musique on trouve...le jeu! Car jouer n'est pas le contraire d'apprendre mais bien la façon la plus joyeuse et la plus créative de mettre en action ses capacités, sa personnalité et son imagination. C'est aussi, en faisant ensemble, s'épanouir dans le rapport à l'autre, apprendre à faire confiance. Alors n'attendons plus, jouons de la musique!",
              ]}
            />
            <PedagogieSingle
              img={méthodeRaviv}
              title={"Méthode Raviv"}
              text={[
                "Dans la méthode Raviv, le corps est engagé dans les apprentissages grâce à des exercices physiques spécifiques.",
                "Tout en maintenant son attention sur un point de focalisation et l'équilibre global du corps, nous abordons les contenus d'apprentissage spécifiques à chacun.",
              ]}
            />
            <PedagogieSingle
              img={bienÊtre}
              title={"Bien-être"}
              text={[
                "L'état physique et émotionnel de la personne joue un rôle fondamental dans la qualité de l'apprentissage.",
                "C'est pourquoi la relaxation, la respiration consciente, la méditation et certaines techniques du yoga font partie intégrante de notre démarche.",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
