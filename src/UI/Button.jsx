export default function Button(props) {
  return (
    <button className="w-fit rounded-md bg-[#FFAF45] px-4 py-2 font-inter font-medium tracking-wide text-white antialiased transition lg:hover:scale-105">
      {props.children}
    </button>
  );
}
