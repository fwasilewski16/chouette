import NavbarButtonMobile from "./NavbarButtonMobile";

function Divider() {
  return <div className="mx-20 h-[1px] bg-white" />;
}

export default function MobileMenu(props) {
  return (
    <div
      className={`${!props.mobileMenuAnimation && "opacity-0"} absolute left-0 right-0 z-50 h-screen touch-none overflow-y-hidden backdrop-brightness-[.2] transition-all duration-500 ease-in-out`}
    >
      <div className="flex h-fit flex-col gap-3 bg-[#F7BB01] py-4">
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
