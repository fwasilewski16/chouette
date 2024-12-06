import farah from "../assets/quiSommesNous/farah.webp";
import samuel from "../assets/quiSommesNous/samuel.webp";
import dorite from "../assets/quiSommesNous/dorite.webp";
import benjamin from "../assets/quiSommesNous/benjamin.webp";
import ben from "../assets/quiSommesNous/ben.webp";
import riva from "../assets/quiSommesNous/riva.webp";
import { useEffect, useState } from "react";

function QuiSommeNousSingle(props) {
  return (
    <div className="flex w-4/5 flex-col gap-4 sm:mb-8 sm:w-1/2 sm:px-4 md:px-8 lg:w-1/3">
      <div className="relative">
        <img
          src={props.img}
          width={600}
          height={800}
          className="mx-auto rounded-2xl object-cover"
        />
      </div>
      <h4 className="w-fit rounded-lg bg-[#F9AB48] px-2 text-2xl font-medium text-white">
        {props.title}
      </h4>
      <div className="flex flex-col justify-center gap-1 rounded-2xl">
        {props.text.map((text, index) => (
          <p key={index} className="text-sm tracking-wider">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="mb-12 mt-10 h-[2px] w-[85%] rounded-full bg-[#f9ac4892] sm:hidden" />
  );
}

export default function QuiSommeNousPage() {
  const [divVisible, setDivVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDivVisible(true);
    }, 100);
  }, []);

  return (
    <section className="bg-[#fffcf9] pt-[55px] xl:pt-[65px]">
      <div
        className={`${divVisible ? "" : "translate-y-2 opacity-0"} mx-auto flex max-w-[1200px] flex-col items-center py-8 font-manrope tracking-wide transition duration-1000 sm:flex-row sm:flex-wrap sm:items-start xl:min-h-[calc(100dvh-68px-40px)]`}
      >
        <QuiSommeNousSingle
          img={farah}
          title={"Farah"}
          text={[
            "Je suis Farah !",
            "J'ai grandi en tant que psychologue pour enfants et adolescents au sein de l'association depuis sa création.",
            "J'adore mon métier !",
          ]}
        />
        <Divider />
        <QuiSommeNousSingle
          img={dorite}
          title={"Dorite"}
          text={[
            "Dans un monde fantastique, je rêverais d’être la fée clochette 🧚  pour aider chacun à surmonter ses peurs et ses difficultés et réaliser ses rêves.",
            "Dans ce monde réel, je suis Dorite, médiatrice cognitive, je n’ai pas de baguette magique 🪄 mais tout plein de méthodes et d’idées ludiques et créatives pour apprendre à apprendre.",
          ]}
        />{" "}
        <Divider />
        <QuiSommeNousSingle
          img={benjamin}
          title={"Benjamin"}
          text={[
            "Sculpteur, j'ai découvert le monde du handicap il y a longtemps.",
            "Le lien que je pouvais faire entre mon métier et l'aide que je pouvais apporter aux enfants m'est apparu comme une évidence.",
            "C'est toujours une grande émotion de les voir progresser et prendre confiance en eux.",
          ]}
        />
        <Divider />
        <QuiSommeNousSingle
          img={samuel}
          title={"Samuel"}
          text={[
            "Susciter la curiosité et la joie par le jeu!",
            "Eveiller l'émotion par le chant, la danse par le rythme, l'envie de faire de la musique ensemble par le partage, tel est mon credo!",
          ]}
        />
        <Divider />
        <QuiSommeNousSingle
          img={ben}
          title={"Ben"}
          text={[
            "Je m'appelle Ben, j'ai 26 ans, je suis comédien et auteur en devenir.",
            "J'adore créer et transmettre.",
            "Travailler à Chouette on apprend est une vraie source de plaisir dans tous les sens du terme. Lorsque je suis en contact avec les apprenants, je découvre tous les aspects de l'apprentissage de la vie collective et pour mon plus grand plaisir, je continue d'apprendre moi-même.",
          ]}
        />
        <Divider />
        <QuiSommeNousSingle
          img={riva}
          title={"Riva"}
          text={[
            "Je suis Riva et voici 4 ans que je viens à `Chouette on apprend` pour rencontrer les enfants, égayer leurs journées, jouer avec eux, les aider à dépasser leurs peurs mais surtout, me nourrir de leurs caresses !",
          ]}
        />
      </div>
    </section>
  );
}
