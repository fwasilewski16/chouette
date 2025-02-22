import facebookIcon from "../assets/icons/facebook-white.png";
import InstagramIcon from "../assets/icons/instagram-white.png";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-[#F9AB48] py-3">
      <div className="flex items-center gap-5">
        <a
          href="https://www.facebook.com/profile.php?id=100052757875010#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <img
            width={512}
            height={512}
            src={facebookIcon}
            className="h-5 w-auto"
          />
        </a>
        <a
          href="https://www.instagram.com/chouette_on_apprend/?igshid=YmMyMTA2M2Y%3D"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img
            width={512}
            height={512}
            src={InstagramIcon}
            className="h-5 w-auto"
          />
        </a>
      </div>
    </div>
  );
}
