export default function Button(props) {
  return (
    <button className="ml-3 w-fit rounded-md bg-[#F7BB01] px-4 py-2 font-inter font-semibold tracking-wider text-white antialiased transition lg:hover:scale-105">
      {props.children}
    </button>
  );
}
