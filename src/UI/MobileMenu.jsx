import NavbarButtonMobile from "./NavbarButtonMobile";

function Divider() {
  return <div className="mx-20 h-[1px] bg-white" />;
}

export default function MobileMenu(props) {
  return (
    <div
      className={`${!props.mobileMenuAnimation ? "translate-x-full opacity-0" : "translate-x-0"} absolute left-0 right-0 z-50 h-fit overflow-y-hidden bg-[#F7BB01] py-4 transition-all duration-500 ease-in-out`}
    >
      <div className="flex h-fit flex-col gap-3">
        <NavbarButtonMobile name={"Nos Ateliers"} />
        <Divider />
        <NavbarButtonMobile name={"Nos évènements"} />
        <Divider />
        <NavbarButtonMobile name={"Pédagogie"} />
        <Divider />
        <NavbarButtonMobile name={"Qui sommes-nous?"} />
        <Divider />
        <NavbarButtonMobile name={"Faire un don"} />
        <Divider />
        <NavbarButtonMobile name={"Contact"} />
      </div>
    </div>
  );
}
