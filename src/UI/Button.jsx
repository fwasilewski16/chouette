import { NavLink } from "react-router-dom";

export default function Button(props) {
  return (
    <button className="z-10 w-fit rounded-lg bg-[#F9AB48] px-7 py-3 font-montserrat font-medium tracking-wide text-white antialiased hover:outline hover:outline-2 hover:outline-[#ff9100]">
      <NavLink to={props.to}>{props.children}</NavLink>
    </button>
  );
}
