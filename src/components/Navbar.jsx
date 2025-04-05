import logo from "../assets/logo_white.png";
import NavbarButtonDesktop from "../UI/NavbarButtonDesktop";
import { useEffect, useState } from "react";
import MobileMenu from "../UI/MobileMenu";
import MobileMenuButton from "../UI/MobileMenuButton";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [mobileMenuAnimation, setMobileMenuAnimation] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
    setTimeout(() => {
      setNavbarVisible(true);
    }, 300);
  }, [pathname]);

  return (
    <header
      className="sticky left-0 right-0 top-0 z-50 justify-between"
      role="navigation"
      aria-label="Menu principal"
    >
      <div
        className={`flex h-[55px] w-full items-center justify-between bg-[#f9ab48] transition-transform duration-[800ms] xl:h-[65px] ${!navbarVisible && pathname === "/" && "lg:translate-y-[-65px]"} ease-out`}
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
          <div className="flex h-full items-center">
            <img
              src={logo}
              width={500}
              height={367}
              className="h-[45px] w-auto object-cover py-1 pl-3 xl:h-[55px]"
              alt="Chouette On Apprend - association d'accompagnement pédagogique adapté pour enfants"
            />
            <div className="ml-[2px] mr-[8px] h-[35px] min-w-[2px] rounded-lg bg-white xl:h-[45px]" />
            <div className="flex min-w-[148px] flex-col font-manrope font-medium tracking-wider text-white antialiased xl:text-[16px]">
              <p>Chouette</p>
              <p>On Apprend</p>
            </div>
          </div>
        </NavLink>
        <div className="hidden h-full justify-between gap-2 rounded-b-xl bg-[#f9ab48] px-4 xl:flex">
          <NavbarButtonDesktop
            to={"/qui-somme-nous"}
            ariaLabel="Accéder à la page sur notre pédagogie adaptée pour enfants avec troubles d'apprentissage"
            name={"Qui sommes-nous?"}
          />
          <NavbarButtonDesktop
            to={"/pedagogie"}
            ariaLabel="Accéder à la page sur notre pédagogie adaptée pour enfants avec troubles d'apprentissage"
            name={"Notre pédagogie"}
          />
          <NavbarButtonDesktop
            to={"/nos-ateliers"}
            ariaLabel="Découvrir les ateliers éducatifs pour enfants avec troubles du développement, comme le TDAH ou la dyslexie"
            name={"Nos ateliers"}
          />
          <NavbarButtonDesktop
            to={"/nos-evenements"}
            ariaLabel="Voir les évènements organisés autour de l’inclusion et de la pédagogie adaptée"
            name={"Nos évènements"}
          />
          <NavbarButtonDesktop
            to={"/faire-un-don"}
            ariaLabel="Faire un don pour soutenir l'accompagnement des enfants avec autisme, TSA, ou troubles cognitifs"
            name={"Faire un don"}
          />
          <NavbarButtonDesktop
            to={"/contact"}
            ariaLabel="Contacter notre association spécialisée en développement de l’enfant et troubles d’apprentissage"
            name={"Contact"}
          />
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
      </div>
    </header>
  );
}
