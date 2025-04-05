import { NavLink } from "react-router-dom";

export default function NavbarButtonMobile(props) {
  return (
    <button
      aria-label={props.ariaLabel}
      onClick={() => {
        props.setMobileMenuAnimation(false);
        setTimeout(() => {
          props.setMobileMenuVisible(false);
        }, 500);
      }}
      className="flex items-center justify-center px-1"
    >
      <NavLink
        to={props.to}
        className="w-full font-manrope text-lg font-medium tracking-wider text-white antialiased"
      >
        {props.name}
      </NavLink>
    </button>
  );
}
