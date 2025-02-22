import { useEffect } from "react";
import Button from "../UI/Button";

// function ShapeSVG2() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       version="1.1"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       xmlns:svgjs="http://svgjs.dev/svgjs"
//       viewBox="0 0 800 400"
//     >
//       <path
//         d="M23.118268966674805,229.7490997314453C67.62245273590088,240.2031021118164,208.75149758656818,290.38231150309247,290.14337158203125,292.4731140136719C371.5352455774943,294.5639165242513,451.58301798502606,236.61888631184897,511.4695129394531,242.29391479492188C571.3560078938802,247.96894327799478,603.4647267659506,318.4587707519531,649.4623413085938,326.5232849121094C695.4599558512369,334.5877990722656,764.4563903808594,296.6547139485677,787.4552001953125,290.6809997558594"
//         fill="none"
//         strokeWidth="4"
//         stroke="#ab48f9"
//         strokeLinecap="butt"
//         transform="matrix(-1.0915162748868166,0,0,1.0915162748868166,842.3770574223288,-104.20134372728853)"
//         strokeDasharray="47 14"
//         strokeOpacity="1"
//       ></path>
//     </svg>
//   );
// }

export default function WelcomePageInstagram() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://snapwidget.com/js/snapwidget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex w-full justify-center overflow-hidden bg-[#fffcf9] py-10">
      {/* <div className="absolute left-1/2 top-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center">
        <ShapeSVG2 />
      </div> */}
      <div className="z-20 flex w-full flex-col justify-center px-10 lg:max-w-[1200px]">
        <div className="relative">
          <div className="absolute bottom-0 left-0 right-0 top-0 z-50" />
          <iframe
            src="https://snapwidget.com/embed/1088781"
            className="snapwidget-widget"
            allowtransparency="true"
            style={{
              border: "none",
              overflow: "hidden",
              width: "100%",
              style: "overflow:hidden;",
            }}
            title="Posts from Instagram"
          ></iframe>
        </div>
        <div className="z-50 flex justify-center py-8">
          <a
            href="https://www.instagram.com/chouette_on_apprend/?igshid=YmMyMTA2M2Y%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="z-10 w-fit rounded-lg bg-[#F9AB48] px-5 py-3 font-manrope font-medium tracking-wide text-white antialiased hover:outline hover:outline-2 hover:outline-[#ff9100]">
              Voir Plus
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
