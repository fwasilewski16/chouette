export default function ContactPage() {
  return (
    <section className="flex flex-col bg-[#fffcf9] font-montserrat tracking-wide text-black antialiased xl:min-h-[calc(100dvh-80px-40px)]">
      <h1 className="bg-[#AF45FF] py-6 text-center text-4xl text-white lg:text-5xl">
        Contactez-nous
      </h1>
      <div className="flex flex-col items-center">
        <div className="mx-4 flex w-full max-w-[600px] flex-col items-center gap-10 py-10 text-center">
          <h2 className="text-2xl font-semibold tracking-wide text-[#F9AB48]">
            Chouette On Apprend
          </h2>
          <div>
            <p>Association Chouette On Apprend</p>
            <p>94 rue Truffaut</p>
            <p>75017 PARIS</p>
            <p>contact@chouetteonapprend.org</p>
            <p></p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10493.7554195877!2d2.318307!3d48.887973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fae0deddc0d%3A0xc938ccbaed40347f!2sChouette%20On%20Apprend!5e0!3m2!1sen!2suk!4v1716398539828!5m2!1sen!2suk"
            width="90%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
