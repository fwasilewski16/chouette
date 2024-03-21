import Button from "../UI/Button";

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
    <div className="flex w-full justify-center bg-[#FAF9F6]">
      <div className="flex w-full max-w-[600px] justify-center px-2 lg:max-w-full">
        <div className="max-w-[1200px] lg:my-10">
          <div className="mx-3 flex flex-col">
            <div className="flex flex-wrap py-4">
              <InstagramPhoto />
              <InstagramPhoto />
              <InstagramPhoto />
              <InstagramPhoto />
              <InstagramPhoto />
              <InstagramPhoto />
            </div>
            <div className="flex justify-center pb-10 pt-5">
              <Button>Voir Plus</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
