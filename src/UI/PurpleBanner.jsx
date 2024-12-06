import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Title(props) {
  const [position, setPosition] = useState("up");
  const [timeoutAnimation, setTimeoutAnimation] = useState(null);

  useEffect(() => {
    props.display && setPosition("center");
    if (position != "up" && !props.display && props.pathname != "/") {
      setPosition("down");
      setTimeoutAnimation(
        setTimeout(() => {
          setPosition("up");
        }, 500),
      );
    }
    props.pathname === "/" &&
      setTimeout(() => {
        setPosition("up");
      }, 500);
    return clearTimeout(timeoutAnimation);
  }, [props.display]);

  return (
    <div
      className={`absolute bottom-0 top-0 flex items-center font-manrope text-3xl tracking-wider text-white antialiased transition-all duration-500 lg:text-4xl xl:text-4xl ${position === "up" && "-translate-y-full"} ${position === "center" && "translate-y-0"} ${position === "down" && "translate-y-full"} ${position === "center" ? "opacity-100" : "opacity-0"}`}
    >
      <h1>{props.header}</h1>
    </div>
  );
}

export function PurpleBanner() {
  const [pathnameState, setPathnameState] = useState("/");

  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setPathnameState("/");
        break;
      case "/nos-ateliers":
        setPathnameState("Nos ateliers");
        break;
      case "/nos-evenements":
        setPathnameState("Nos évènements");
        break;
      case "/pedagogie":
        setPathnameState("Notre pédagogie");
        break;
      case "/qui-somme-nous":
        setPathnameState("Qui sommes nous ?");
        break;
      case "/faire-un-don":
        setPathnameState("Pourquoi nous aider ?");
        break;
      case "/contact":
        setPathnameState("Contactez-nous");
        break;
    }
  }, [pathname]);

  return (
    <div
      className={`${pathnameState != "/" ? "top-[55px] xl:top-[65px]" : "top-[-55px] opacity-0 xl:top-[-65px]"} absolute left-0 right-0 flex h-[55px] items-center justify-center overflow-hidden bg-[#AF45FF] transition-all duration-1000 xl:h-[65px]`}
    >
      <Title
        pathname={pathname}
        display={pathname === "/nos-ateliers"}
        header={"Nos ateliers"}
      />
      <Title
        pathname={pathname}
        display={pathname === "/nos-evenements"}
        header={"Nos évènements"}
      />
      <Title
        pathname={pathname}
        display={pathname === "/pedagogie"}
        header={"Notre pédagogie"}
      />
      <Title
        pathname={pathname}
        display={pathname === "/qui-somme-nous"}
        header={"Qui sommes nous ?"}
      />
      <Title
        pathname={pathname}
        display={pathname === "/faire-un-don"}
        header={"Pourquoi nous aider ?"}
      />
      <Title
        pathname={pathname}
        display={pathname === "/contact"}
        header={"Contactez-nous"}
      />
    </div>
  );
}
