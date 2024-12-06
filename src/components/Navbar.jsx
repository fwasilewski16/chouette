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
    <header className="sticky left-0 right-0 top-0 z-50 justify-between">
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
            name={"Qui sommes-nous?"}
          />
          <NavbarButtonDesktop to={"/pedagogie"} name={"Notre pédagogie"} />
          <NavbarButtonDesktop to={"/nos-ateliers"} name={"Nos ateliers"} />
          <NavbarButtonDesktop to={"/nos-evenements"} name={"Nos évènements"} />
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
      </div>
    </header>
  );
}
