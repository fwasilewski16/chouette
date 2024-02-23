import facebookIcon from "../assets/icons/facebook-white.png";
import InstagramIcon from "../assets/icons/instagram-white.png";

export default function Footer() {
  return (
    <div className="flex h-auto flex-col items-center gap-3 bg-[#F7BB01] py-3">
      <div className="flex items-center gap-5">
        <img src={facebookIcon} className="h-5" />
        <img src={InstagramIcon} className="h-5" />
      </div>
      <div className="flex flex-col gap-2">
        <button className=" text-center text-xs uppercase text-white underline underline-offset-4 antialiased">
          Mentions légales
        </button>
        <button className="text-center text-xs uppercase text-white underline underline-offset-4 antialiased">
          Politique de confidentialité
        </button>
      </div>
    </div>
  );
}
