import facebookIcon from "../assets/icons/facebook-white.png";
import InstagramIcon from "../assets/icons/instagram-white.png";

export default function Footer() {
  return (
    <div className="flex h-10 flex-col items-center justify-center gap-3 bg-[#F9AB48]">
      <div className="flex items-center gap-5">
        <img
          width={512}
          height={512}
          src={facebookIcon}
          className="h-5 w-auto"
        />
        <img
          width={512}
          height={512}
          src={InstagramIcon}
          className="h-5 w-auto"
        />
      </div>
    </div>
  );
}
