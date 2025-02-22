import { useEffect, useState } from "react";

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
    <div className="flex w-full justify-center overflow-hidden bg-[#fffcf9]">
      <div className="z-20 flex w-full flex-col justify-center px-3 lg:max-w-[1200px]">
        <div className="relative">
          <div className="absolute bottom-0 left-0 right-0 top-0 z-50" />
          <iframe
            src="https://snapwidget.com/embed/1088781"
            className="snapwidget-widget"
            allowtransparency="true"
            loading="lazy"
            style={{
              border: "none",
              overflow: "hidden",
              width: "100%",
            }}
            title="Posts from Instagram"
          ></iframe>
        </div>
        <div className="z-50 flex justify-center py-16">
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
