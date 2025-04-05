import NavbarButtonMobile from "./NavbarButtonMobile";

function Divider() {
  return <div className="mx-20 h-[1px] bg-white" />;
}

export default function MobileMenu(props) {
  return (
    <nav
      className={`${!props.mobileMenuAnimation && "opacity-0"} absolute left-0 right-0 top-[55px] z-50 h-screen touch-none overflow-y-hidden backdrop-brightness-[.2] transition-all duration-500 ease-in-out`}
      role="navigation"
    >
      <div className="flex h-fit flex-col gap-3 bg-[#f9ab48] py-4">
        <NavbarButtonMobile
          to={"/qui-somme-nous"}
          name={"Qui sommes-nous?"}
          ariaLabel="Accéder à la page sur notre pédagogie adaptée pour enfants avec troubles d'apprentissage"
          setMobileMenuVisible={props.setMobileMenuVisible}
          setMobileMenuAnimation={props.setMobileMenuAnimation}
        />
        <Divider />
        <NavbarButtonMobile
          to={"/pedagogie"}
          name={"Notre pédagogie"}
          ariaLabel="Accéder à la page sur notre pédagogie adaptée pour enfants avec troubles d'apprentissage"
          setMobileMenuVisible={props.setMobileMenuVisible}
          setMobileMenuAnimation={props.setMobileMenuAnimation}
        />
        <Divider />
        <NavbarButtonMobile
          to={"/nos-ateliers"}
          name={"Nos Ateliers"}
          ariaLabel="Découvrir les ateliers éducatifs pour enfants avec troubles du développement, comme le TDAH ou la dyslexie"
          setMobileMenuVisible={props.setMobileMenuVisible}
          setMobileMenuAnimation={props.setMobileMenuAnimation}
        />
        <Divider />
        <NavbarButtonMobile
          to={"/nos-evenements"}
          name={"Nos évènements"}
          ariaLabel="Voir les évènements organisés autour de l’inclusion et de la pédagogie adaptée"
          setMobileMenuVisible={props.setMobileMenuVisible}
          setMobileMenuAnimation={props.setMobileMenuAnimation}
        />
        <Divider />

        <NavbarButtonMobile
          to={"/faire-un-don"}
          name={"Faire un don"}
          ariaLabel="Faire un don pour soutenir l'accompagnement des enfants avec autisme, TSA, ou troubles cognitifs"
          setMobileMenuVisible={props.setMobileMenuVisible}
          setMobileMenuAnimation={props.setMobileMenuAnimation}
        />
        <Divider />
        <NavbarButtonMobile
          to={"/contact"}
          name={"Contact"}
          ariaLabel="Contacter notre association spécialisée en développement de l’enfant et troubles d’apprentissage"
          setMobileMenuVisible={props.setMobileMenuVisible}
          setMobileMenuAnimation={props.setMobileMenuAnimation}
        />
      </div>
    </nav>
  );
}
