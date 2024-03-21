import logo from "../assets/logo.png";
import NavbarButtonDesktop from "../UI/NavbarButtonDesktop";
import { useState } from "react";
import MobileMenu from "../UI/MobileMenu";
import MobileMenuButton from "../UI/MobileMenuButton";

export default function Navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [mobileMenuAnimation, setMobileMenuAnimation] = useState(false);

  return (
    <header className="sticky left-0 right-0 top-0 z-30 h-[52px] bg-[#F7BB01] lg:h-[55px]">
      <div className="flex h-full items-center justify-between lg:px-3">
        <div className="flex h-full items-center">
          <img src={logo} className="h-full object-cover py-1 pl-3" />
          <div className="ml-1 mr-2 h-2/3 min-w-[2px] bg-white" />
          <div className="flex min-w-[117px] flex-col">
            <p className="font-inter font-medium tracking-wide text-white antialiased">
              Chouette
            </p>
            <p className="font-inter font-medium tracking-wide text-white antialiased">
              On Apprend
            </p>
          </div>
        </div>
        <div className="hidden h-full justify-between lg:flex lg:gap-4">
          <NavbarButtonDesktop name={"Nos Ateliers"} />
          <NavbarButtonDesktop name={"Nos évènements"} />
          <NavbarButtonDesktop name={"Pédagogie"} />
          <NavbarButtonDesktop name={"Qui sommes-nous?"} />
          <NavbarButtonDesktop name={"Faire un don"} />
          <NavbarButtonDesktop name={"Contact"} />
        </div>
        <div className="flex h-full w-full justify-end lg:hidden">
          <MobileMenuButton
            mobileMenuVisible={mobileMenuVisible}
            mobileMenuAnimation={mobileMenuAnimation}
            setMobileMenuVisible={setMobileMenuVisible}
            setMobileMenuAnimation={setMobileMenuAnimation}
          />
        </div>
      </div>
      {mobileMenuVisible && (
        <MobileMenu mobileMenuAnimation={mobileMenuAnimation} />
      )}
    </header>
  );
}
