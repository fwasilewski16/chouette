import logo from "../assets/logo.png";
import NavbarButtonDesktop from "../UI/NavbarButtonDesktop";
import { useEffect, useState } from "react";
import MobileMenu from "../UI/MobileMenu";
import MobileMenuButton from "../UI/MobileMenuButton";

export default function Navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [mobileMenuAnimation, setMobileMenuAnimation] = useState(false);
  const [fullNavbarVisible, setFullNavbarVisible] = useState(false);

  useEffect(() => {
    function updateTop() {
      window.scrollY >= 1
        ? setFullNavbarVisible(true)
        : setFullNavbarVisible(false);
    }

    window.addEventListener("scroll", updateTop);

    return () => window.removeEventListener("scroll", updateTop);
  }, []);

  return (
    <header
      className={`sticky left-0 right-0 top-0 z-50 flex h-[52px] justify-between transition duration-700 ease-in-out lg:h-[56px] xl:px-8 ${(fullNavbarVisible || (mobileMenuVisible && mobileMenuAnimation)) && "bg-[#FFAF45]"}`}
    >
      <div
        className={`font-open flex h-full items-center transition duration-700 ease-in-out ${fullNavbarVisible || (mobileMenuVisible && mobileMenuAnimation) ? "opacity-100" : "opacity-0"}`}
      >
        <img src={logo} className="h-full object-cover py-1 pl-3 invert" />
        <div className="ml-2 mr-3 h-[40px] min-w-[2px] rounded-xl bg-white lg:h-[48px]" />
        <div className="flex min-w-[117px] flex-col">
          <p className="font-inter font-medium leading-6 text-white antialiased lg:text-[20px] lg:leading-6">
            Chouette
          </p>
          <p className="font-inter font-medium leading-6 text-white antialiased lg:text-[20px] lg:leading-6">
            On Apprend
          </p>
        </div>
      </div>
      <div
        className={`hidden h-full justify-between ${!fullNavbarVisible ? "overflow-hidden" : ""} rounded-b-[28px] bg-[#FFAF45] px-4 transition-all lg:flex lg:gap-4`}
      >
        <NavbarButtonDesktop name={"Nos Ateliers"} />
        <NavbarButtonDesktop name={"Nos évènements"} />
        <NavbarButtonDesktop name={"Pédagogie"} />
        <NavbarButtonDesktop name={"Qui sommes-nous?"} />
        <NavbarButtonDesktop name={"Faire un don"} />
        <NavbarButtonDesktop name={"Contact"} />
      </div>
      <div
        className={`mr-3 flex h-full justify-end rounded-b-[18px] bg-[#FFAF45] lg:hidden`}
      >
        <MobileMenuButton
          mobileMenuVisible={mobileMenuVisible}
          mobileMenuAnimation={mobileMenuAnimation}
          setMobileMenuVisible={setMobileMenuVisible}
          setMobileMenuAnimation={setMobileMenuAnimation}
        />
      </div>
      {mobileMenuVisible && (
        <MobileMenu mobileMenuAnimation={mobileMenuAnimation} />
      )}
    </header>
  );
}
