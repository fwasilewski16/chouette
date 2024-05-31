import Button from "../UI/Button";

function ShapeSVG2() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.dev/svgjs"
      viewBox="0 0 800 400"
    >
      <path
        d="M23.118268966674805,229.7490997314453C67.62245273590088,240.2031021118164,208.75149758656818,290.38231150309247,290.14337158203125,292.4731140136719C371.5352455774943,294.5639165242513,451.58301798502606,236.61888631184897,511.4695129394531,242.29391479492188C571.3560078938802,247.96894327799478,603.4647267659506,318.4587707519531,649.4623413085938,326.5232849121094C695.4599558512369,334.5877990722656,764.4563903808594,296.6547139485677,787.4552001953125,290.6809997558594"
        fill="none"
        strokeWidth="4"
        stroke="#ab48f9"
        strokeLinecap="butt"
        transform="matrix(-1.0915162748868166,0,0,1.0915162748868166,842.3770574223288,-104.20134372728853)"
        strokeDasharray="47 14"
        strokeOpacity="1"
      ></path>
    </svg>
  );
}

function InstagramPhoto() {
  return (
    <div className="relative z-10 aspect-square w-1/2 px-1 lg:w-1/3">
      <div className="flex aspect-square w-full flex-col justify-end  bg-gray-300 px-1 pb-4">
        <p className="text-sm text-white antialiased">INSTAGRAM POST TITLE</p>
        <p className="text-sm text-white antialiased">
          Instagram post description
        </p>
      </div>
    </div>
  );
}

export default function WelcomePageInstagram() {
  return (
    <div className="relative flex w-full justify-center bg-[#fffcf9]">
      <div className="absolute left-1/2 top-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center">
        <ShapeSVG2 />
      </div>
      <div className="flex w-full max-w-[600px] justify-center px-2 lg:max-w-full">
        <div className="my-10 max-w-[1200px]">
          <div className="mx-3 flex flex-col">
            <div className="flex flex-wrap">
              <InstagramPhoto />
              <InstagramPhoto />
              <InstagramPhoto />
              <InstagramPhoto />
              <InstagramPhoto />
              <InstagramPhoto />
            </div>
            <div className="flex justify-center pt-10">
              <Button>Voir Plus</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
