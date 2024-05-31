import logo from "../assets/logo_white.png";
import NavbarButtonDesktop from "../UI/NavbarButtonDesktop";
import { useEffect, useState } from "react";
import MobileMenu from "../UI/MobileMenu";
import MobileMenuButton from "../UI/MobileMenuButton";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [mobileMenuAnimation, setMobileMenuAnimation] = useState(false);
  const [fullNavbarVisible, setFullNavbarVisible] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    function updateTop() {
      window.scrollY >= 1
        ? setFullNavbarVisible(true)
        : setFullNavbarVisible(false);
    }

    window.addEventListener("scroll", updateTop);

    scrollTo(0, 0);

    return () => window.removeEventListener("scroll", updateTop);
  }, [pathname]);

  return (
    <header
      className={`sticky left-0 right-0 top-0 z-50 flex h-[60px] justify-between pr-4 transition-all duration-500 ease-in-out xl:h-[80px] ${fullNavbarVisible || (mobileMenuVisible && mobileMenuAnimation) || pathname != "/" ? "bg-[#f9ab48] shadow-lg" : ""}`}
    >
      <NavLink
        to="/"
        onClick={() => {
          setMobileMenuAnimation(false);
          setTimeout(() => {
            setMobileMenuVisible(false);
          }, 500);
        }}
      >
        <div
          className={`flex h-full items-center transition duration-500 ease-in-out ${fullNavbarVisible || (mobileMenuVisible && mobileMenuAnimation) || pathname != "/" ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={logo}
            className="h-[50px] object-cover py-1 pl-3 xl:h-[70px]"
          />
          <div className="ml-1 mr-3 h-[40px] w-[2px] bg-white xl:h-[50px]" />
          <div className="flex min-w-[148px] flex-col font-montserrat text-xl font-medium uppercase tracking-wide text-white antialiased">
            <p>Chouette</p>
            <p>On Apprend</p>
          </div>
        </div>
      </NavLink>
      <div className="hidden h-full justify-between gap-2 rounded-b-xl bg-[#f9ab48] px-4 xl:flex">
        <NavbarButtonDesktop to={"/nos-ateliers"} name={"Nos Ateliers"} />
        <NavbarButtonDesktop to={"/nos-evenements"} name={"Nos évènements"} />
        <NavbarButtonDesktop to={"/pedagogie"} name={"Pédagogie"} />
        <NavbarButtonDesktop to={"/qui-somme-nous"} name={"Qui sommes-nous?"} />
        <NavbarButtonDesktop to={"/faire-un-don"} name={"Faire un don"} />
        <NavbarButtonDesktop to={"/contact"} name={"Contact"} />
      </div>
      <MobileMenuButton
        mobileMenuVisible={mobileMenuVisible}
        mobileMenuAnimation={mobileMenuAnimation}
        setMobileMenuVisible={setMobileMenuVisible}
        setMobileMenuAnimation={setMobileMenuAnimation}
      />
      {mobileMenuVisible && (
        <MobileMenu
          mobileMenuAnimation={mobileMenuAnimation}
          setMobileMenuVisible={setMobileMenuVisible}
          setMobileMenuAnimation={setMobileMenuAnimation}
        />
      )}
    </header>
  );
}
