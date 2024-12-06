import { useEffect, useState } from "react";
import logo from "../assets/logo_white.png";

export default function FaireUnDonPage() {
  const [divVisible, setDivVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDivVisible(true);
    }, 100);
  }, []);

  return (
    <section className="bg-[#fffcf9] pt-[55px] xl:pt-[65px]">
      <div
        className={`mx-auto flex flex-col items-center gap-10 px-4 py-10 text-center font-manrope text-sm tracking-wider ${divVisible ? "" : "translate-y-2 opacity-0"} max-w-[600px] transition duration-1000`}
      >
        <p>
          Parce qu'un projet éducatif adapté devrait être accessible à tous sans
          considérations financières, Chouette On Apprend a ouvert un Fonds
          social, qui représente une part importante de son budget annuel. Ce
          fonds social permet aux familles de présenter des demandes de bourse
          pour leur enfant.
        </p>
        <div className=" rounded-xl bg-[#F9AB48] px-2 py-5 text-white">
          <p className="mb-2">
            Avec votre aide, de nouvelles familles pourront intégrer le fonds
            social et bénéficier de notre projet.
          </p>
          <div className="flex flex-col gap-2">
            <p>Faire un don par virement bancaire :</p>
            <p>Titulaire du compte : </p>
            <p className="font-extrabold">ASSOCIATION CHOUETTE ON APPREND</p>
            <p>Coordonnées bancaires : </p>
            <p>
              IBAN :{" "}
              <span className="font-extrabold">
                FR76 3008 7333 9000 0201 2860 192
              </span>
            </p>
            <p>
              BIC : <span className="font-extrabold">CMCIFRPP</span>
            </p>
          </div>
        </div>
        <p>
          Le fonds social de Chouette On Apprend permet à l'association de
          prendre en charge le coût des séances des enfants dont les parents
          n'ont pas la possibilité de payer les intervenants.{" "}
        </p>
        <div className="flex flex-col gap-1">
          <p>
            L'aide est adaptée en considération des besoins spécifiques des
            enfants :
          </p>
          <p>- prise en charge d'une partie du coût des séances de médiation</p>
          <p>
            - participation au coût des séances de travail sur la vie sociale
          </p>
        </div>
        <p>
          Les critères d'octroi de l'aide sont notamment l'adhésion de la
          famille au projet éducatif proposé (incluant la participation des
          parents à la formation continue proposée), et la situation financière
          des parents.
        </p>
        <p>
          L'association Chouette On Apprend étant reconnue d'intérêt général,
          votre don vous ouvre droit à une réduction d'impôts égale à 60% du
          montant du don, dans la limite de 20% du revenu imposable. Ainsi un
          don de 100 euros ne vous coûte que 34 euros. Pour les entreprises, un
          don ouvre droit à une réduction d'impôts égale à 60% du montant du
          don, dans la limite de 5% du chiffre d'affaires. Ainsi un don de 100
          euros ne vous coûte que 40 euros.
        </p>
        <img
          src={logo}
          width={500}
          height={367}
          className="h-[100px] w-auto invert xl:h-[100px]"
        />
      </div>
    </section>
  );
}
