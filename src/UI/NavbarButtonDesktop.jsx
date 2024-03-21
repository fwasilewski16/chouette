import { NavLink } from "react-router-dom";

export default function NavbarButtonDesktop(props) {
  return (
    <div className="flex items-center justify-center text-nowrap px-1 font-inter font-medium tracking-wide text-white antialiased transition hover:bg-[#FAF9F6] hover:text-[#F7BB01] xl:px-3">
      <NavLink className="flex h-full items-center">{props.name}</NavLink>
    </div>
  );
}
