import nosAteliers1 from "../assets/images/nosAteliers1.jpg";
import nosAteliers2 from "../assets/images/nosAteliers2.jpg";

export default function NosAteliersPage() {
  return (
    <section className="flex flex-col gap-10 bg-[#fffcf9] pb-10 font-montserrat tracking-wide antialiased">
      <h1 className="bg-[#AF45FF] py-6 text-center text-4xl text-white lg:text-5xl">
        Nos Ateliers
      </h1>
      <div className="flex w-full flex-col items-center gap-20">
        <div className="flex w-full max-w-[1100px] flex-col-reverse items-center px-4 lg:flex-row">
          <div className="flex w-2/3 justify-center pt-10 lg:w-1/2 lg:p-0">
            <img
              src={nosAteliers1}
              width={619}
              height={719}
              className="aspect-square h-auto w-[110%] max-w-[415px] rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 text-center lg:w-1/2">
            <h2 className="text-4xl text-[#F9AB48] lg:text-5xl">
              Ateliers Ados
            </h2>
            <p className="max-w-[415px] text-[14px] lg:text-base">
              Une semaine sur deux un petit groupe d'adolescents de
              l'association se réunit dans nos locaux ou en visio afin d'aborder
              des sujets qui les touchent de près.
            </p>
            <p className="max-w-[415px] text-[14px] lg:text-base">
              La dynamique de groupe se construit autour d'objectifs (capacité
              d'écoute et de prise de parole, respect du tour de chacun) mais
              aussi autour du partage d'idées et d'expériences.{" "}
            </p>
          </div>
        </div>
        <div className="flex w-full max-w-[1100px] flex-col-reverse items-center px-4 lg:flex-row-reverse">
          <div className="flex w-2/3 justify-center pt-10 lg:w-1/2 lg:p-0">
            <img
              src={nosAteliers2}
              width={620}
              height={688}
              className="aspect-square h-auto w-[110%] max-w-[415px] rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 text-center lg:w-1/2 lg:px-10">
            <h2 className="text-4xl text-[#F9AB48] lg:text-5xl">
              Ateliers frères et soeurs
            </h2>
            <p className="max-w-[415px] text-[14px] lg:text-base">
              Nous organisons un atelier destiné aux frères et soeurs de nos
              apprenants.
            </p>
            <p className="max-w-[415px] text-[14px] lg:text-base">
              Nous y abordons des thèmes relatifs à la place de chaque enfant
              dans la famille, la question du regard porté sur le handicap et
              comment chacun peut trouver son équilibre dans la dynamique
              familiale.
            </p>
            <p className="max-w-[415px] text-[14px] lg:text-base">
              Des outils ludiques et variés seront proposés pour traiter ces
              questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
