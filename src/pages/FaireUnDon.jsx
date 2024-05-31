export default function FaireUnDonPage() {
  return (
    <section className="flex flex-col bg-[#fffcf9] font-montserrat text-black">
      <h1 className="bg-[#AF45FF] py-6 text-center text-4xl text-white lg:text-5xl">
        Pourquoi nous aider?
      </h1>
      <div className="flex flex-col items-center px-4">
        <div className="flex max-w-[600px] flex-col gap-10 py-10 text-center">
          <p>
            Parce qu'un projet éducatif adapté devrait être accessible à tous
            sans considérations financières, Chouette On Apprend a ouvert un
            Fonds social, qui représente une part importante de son budget
            annuel. Ce fonds social permet aux familles de présenter des
            demandes de bourse pour leur enfant.
          </p>
          <p className="font-medium">
            Avec votre aide, de nouvelles familles pourront intégrer le fonds
            social et bénéficier de notre projet.
          </p>
          <div className="flex flex-col">
            <p>Faire un don par virement bancaire :</p>
            <p className="mt-2">Titulaire du compte : </p>
            <p className="font-medium">ASSOCIATION CHOUETTE ON APPREND</p>
            <p className="mt-2">Coordonnées bancaires : </p>
            <p className="mt-2">
              IBAN :{" "}
              <span className="font-medium">
                FR76 3008 7333 9000 0201 2860 192
              </span>
            </p>
            <p>
              BIC : <span className="font-medium">CMCIFRPP</span>
            </p>
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
            <p>
              - prise en charge d'une partie du coût des séances de médiation
            </p>
            <p>
              - participation au coût des séances de travail sur la vie sociale
            </p>
          </div>
          <p>
            Les critères d'octroi de l'aide sont notamment l'adhésion de la
            famille au projet éducatif proposé (incluant la participation des
            parents à la formation continue proposée), et la situation
            financière des parents.
          </p>
          <p>
            L'association Chouette On Apprend étant reconnue d'intérêt général,
            votre don vous ouvre droit à une réduction d'impôts égale à 60% du
            montant du don, dans la limite de 20% du revenu imposable. Ainsi un
            don de 100 euros ne vous coûte que 34 euros. Pour les entreprises,
            un don ouvre droit à une réduction d'impôts égale à 60% du montant
            du don, dans la limite de 5% du chiffre d'affaires. Ainsi un don de
            100 euros ne vous coûte que 40 euros.
          </p>
        </div>
      </div>
    </section>
  );
}
