import NavbarButtonMobile from "./NavbarButtonMobile";

function Divider() {
  return <div className="mx-20 h-[1px] bg-white" />;
}

export default function MobileMenu(props) {
  return (
    <div
      className={`${!props.mobileMenuAnimation && "opacity-0"} absolute left-0 right-0 top-[60px] z-50 h-screen touch-none overflow-y-hidden backdrop-brightness-[.2] transition-all duration-500 ease-in-out`}
    >
      <div className="flex h-fit flex-col gap-3 bg-[#f9ab48] py-4">
        <NavbarButtonMobile
          to={"/nos-ateliers"}
          name={"Nos Ateliers"}
          setMobileMenuVisible={props.setMobileMenuVisible}
          setMobileMenuAnimation={props.setMobileMenuAnimation}
        />
        <Divider />
        <NavbarButtonMobile
          to={"/nos-evenements"}
          name={"Nos évènements"}
          setMobileMenuVisible={props.setMobileMenuVisible}
          setMobileMenuAnimation={props.setMobileMenuAnimation}
        />
        <Divider />
        <NavbarButtonMobile
          to={"/pedagogie"}
          name={"Pédagogie"}
          setMobileMenuVisible={props.setMobileMenuVisible}
          setMobileMenuAnimation={props.setMobileMenuAnimation}
        />
        <Divider />
        <NavbarButtonMobile
          to={"/qui-somme-nous"}
          name={"Qui sommes-nous?"}
          setMobileMenuVisible={props.setMobileMenuVisible}
          setMobileMenuAnimation={props.setMobileMenuAnimation}
        />
        <Divider />
        <NavbarButtonMobile
          to={"/faire-un-don"}
          name={"Faire un don"}
          setMobileMenuVisible={props.setMobileMenuVisible}
          setMobileMenuAnimation={props.setMobileMenuAnimation}
        />
        <Divider />
        <NavbarButtonMobile
          to={"/contact"}
          name={"Contact"}
          setMobileMenuVisible={props.setMobileMenuVisible}
          setMobileMenuAnimation={props.setMobileMenuAnimation}
        />
      </div>
    </div>
  );
}
