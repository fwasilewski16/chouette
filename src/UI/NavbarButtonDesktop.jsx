import { NavLink } from "react-router-dom";

export default function NavbarButtonDesktop(props) {
  return (
    <div className="flex items-center justify-center text-nowrap font-manrope font-medium tracking-wider text-white antialiased hover:bg-[#FFFCF9] hover:text-black">
      <NavLink to={props.to} className="flex h-full items-center px-2">
        {props.name}
      </NavLink>
    </div>
  );
}
