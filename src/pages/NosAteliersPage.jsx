import { useEffect, useState } from "react";
import nosAteliers1 from "../assets/nosateliers/nosAteliers1.webp";
import nosAteliers4 from "../assets/nosateliers/nosAteliers4.webp";

export default function NosAteliersPage() {
  const [divVisible, setDivVisible] = useState(false);
  const [image1Loaded, setImage1Loaded] = useState(false);
  const [image2Loaded, setImage2Loaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDivVisible(true);
    }, 100);
  }, []);

  return (
    <section className="bg-[#fffcf9] pt-[55px] xl:pt-[65px]">
      <div
        className={`flex flex-col ${divVisible ? "" : "translate-y-2 opacity-0"} items-center font-manrope antialiased transition duration-500`}
      >
        <div className="flex w-full max-w-[1100px] flex-col-reverse items-center px-4 pt-6 lg:flex-row lg:py-12">
          <div className="w-[80%] pt-10 lg:w-1/2 lg:p-0">
            <img
              src={nosAteliers1}
              width={619}
              height={619}
              className={`${image1Loaded ? "opacity-100" : "opacity-0"} mx-auto w-full max-w-[380px] rounded-full object-cover transition duration-500 lg:w-2/3`}
              onLoad={() => setImage1Loaded(true)}
            />
          </div>
          <div className="flex max-w-[500px] flex-col gap-8 lg:w-1/2 lg:max-w-none">
            <h2 className="text-4xl text-[#F9AB48]">Ateliers Ados</h2>
            <p className="text-[14px] tracking-wider lg:text-base">
              Une semaine sur deux un petit groupe d'adolescents de
              l'association se réunit dans nos locaux ou en visio afin d'aborder
              des sujets qui les touchent de près.
            </p>
            <p className="text-[14px] tracking-wider lg:text-base">
              La dynamique de groupe se construit autour d'objectifs (capacité
              d'écoute et de prise de parole, respect du tour de chacun) mais
              aussi autour du partage d'idées et d'expériences.{" "}
            </p>
          </div>
        </div>
        <div className="flex w-full max-w-[1100px] flex-col-reverse items-center px-4 py-6 lg:flex-row lg:py-12">
          <div className="w-[80%] pt-10 lg:w-1/2 lg:p-0">
            <img
              src={nosAteliers4}
              width={619}
              height={619}
              className={`${image1Loaded ? "opacity-100" : "opacity-0"} mx-auto w-full max-w-[380px] object-cover transition duration-1000 lg:w-2/3`}
              onLoad={() => setImage2Loaded(true)}
            />
          </div>
          <div className="flex max-w-[500px] flex-col gap-8 lg:w-1/2 lg:max-w-none">
            <h2 className="text-4xl text-[#F9AB48]">
              Ateliers frères et soeurs
            </h2>
            <p className="text-[14px] tracking-wider lg:text-base">
              Nous organisons un atelier destiné aux frères et soeurs de nos
              apprenants.
            </p>
            <p className="text-[14px] tracking-wider lg:text-base">
              Nous y abordons des thèmes relatifs à la place de chaque enfant
              dans la famille, la question du regard porté sur le handicap et
              comment chacun peut trouver son équilibre dans la dynamique
              familiale.
            </p>
            <p className="text-[14px] tracking-wider lg:text-base">
              Des outils ludiques et variés seront proposés pour traiter ces
              questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
