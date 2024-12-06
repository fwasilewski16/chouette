import { NavLink } from "react-router-dom";

export default function Button(props) {
  return (
    <NavLink className="" to={props.to}>
      <button className="font-manrope z-10 w-fit rounded-lg bg-[#F9AB48] px-5 py-3 font-medium tracking-wide text-white antialiased hover:outline hover:outline-2 hover:outline-[#ff9100]">
        {props.children}
      </button>
    </NavLink>
  );
}
