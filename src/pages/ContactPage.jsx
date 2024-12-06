import { useEffect, useState } from "react";

export default function ContactPage() {
  const [divVisible, setDivVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDivVisible(true);
    }, 100);
  }, []);

  return (
    <section className="min-h-[calc(100dvh-64px-44px)] bg-[#fffcf9] pt-[55px] xl:pt-[65px]">
      <div
        className={`${divVisible ? "" : "translate-y-2 opacity-0"} flex flex-col font-manrope tracking-wider text-black antialiased transition duration-1000`}
      >
        <div className="flex flex-col items-center">
          <div className="flex w-full max-w-[600px] flex-col items-center gap-10 px-4 py-10 text-center">
            <h2 className="text-4xl text-[#F9AB48]">Chouette On Apprend</h2>
            <div>
              <p>Association Chouette On Apprend</p>
              <p>94 rue Truffaut</p>
              <p>75017 PARIS</p>
              <p>Tel. : 09.79.34.97.08</p>
              <p>contact@chouetteonapprend.org</p>
              <p></p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10493.7554195877!2d2.318307!3d48.887973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fae0deddc0d%3A0xc938ccbaed40347f!2sChouette%20On%20Apprend!5e0!3m2!1sen!2suk!4v1716398539828!5m2!1sen!2suk"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
