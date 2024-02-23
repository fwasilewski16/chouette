import { NavLink } from "react-router-dom";

export default function NavbarButtonMobile(props) {
  return (
    <div className="flex items-center justify-center px-1">
      <NavLink className="font-inter text-lg font-semibold tracking-wide text-white antialiased">
        {props.name}
      </NavLink>
    </div>
  );
}
