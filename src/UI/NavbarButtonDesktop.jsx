import { NavLink } from "react-router-dom";

export default function NavbarButtonDesktop(props) {
  return (
    <div className="font-inter flex items-center justify-center text-nowrap px-1 font-medium tracking-wide text-white antialiased transition hover:bg-[#FAF9F6] hover:text-black xl:px-2">
      <NavLink className="flex h-full items-center">{props.name}</NavLink>
    </div>
  );
}
