import farah from "../assets/quiSommesNous/farah.webp";
import samuel from "../assets/quiSommesNous/samuel.webp";
import dorite from "../assets/quiSommesNous/dorite.webp";
import benjamin from "../assets/quiSommesNous/benjamin.webp";
import ben from "../assets/quiSommesNous/ben.webp";
import riva from "../assets/quiSommesNous/riva.webp";
import { useEffect, useState } from "react";

function QuiSommeNousSingle(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex w-4/5 flex-col gap-4 sm:mb-8 sm:w-1/2 sm:px-4 md:px-8 lg:w-1/3">
      <div className="relative">
        <img
          src={props.img}
          width={600}
          height={800}
          className={`${imageLoaded ? "opacity-100" : "opacity-0"} mx-auto rounded-2xl object-cover transition duration-1000`}
          onLoad={() => setImageLoaded(true)}
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
    const timer = setTimeout(() => {
      setDivVisible(true);
    }, 100);

    return () => clearTimeout(timer); // Cleanup to prevent issues
  }, []);

  return (
    <section className="bg-[#fffcf9] pt-[55px] xl:pt-[65px]">
      <div
        className={`${divVisible ? "" : "translate-y-2 opacity-0"} font-manrope tracking-wide transition duration-1000 xl:min-h-[calc(100dvh-68px-40px)]`}
      >
        <div className="flex flex-col items-center py-12">
          <div className="flex w-full max-w-[600px] flex-col items-center gap-12 px-4 text-center">
            <h2 className="text-4xl text-[#F9AB48]">Une pédagogie adaptée</h2>
            <p className="max-w-[415px] text-sm tracking-wider lg:max-w-[600px] lg:text-base">
              Comment présenter une équipe? Ce sont des personnalités, des
              univers, des manières de faire qui se rencontrent. Chaque
              sensibilité contribue à créer l'atmosphère de notre association.
              Notre souhait est que cette atmosphère soit la plus accueillante
              possible pour toutes les familles que nous recevons.
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1200px] flex-col items-center sm:flex-row sm:flex-wrap sm:items-start">
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
              "Je suis Dorite et en tant que médiatrice cognitive et enseignante, j’ai plaisir à créer des outils et des activités ludiques pour apprendre dans la joie !",
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
              "J'adore créer et transmettre. Lorsque je suis en contact avec les apprenants, je découvre tous les aspects de l'apprentissage de la vie collective et pour mon plus grand plaisir, je continue d'apprendre moi-même.",
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
      </div>
    </section>
  );
}
