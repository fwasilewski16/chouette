import { useEffect, useState } from "react";
import useGetEvents from "../hooks/useGetEvents";
import logo from "../assets/logo.png";

function Event({
  title,
  image,
  imageWidth,
  imageHeight,
  date,
  time,
  description,
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="flex h-fit w-full flex-col p-6 md:w-1/2">
      <img
        src={image}
        width={imageWidth}
        height={imageHeight}
        alt={title}
        className={`${imageLoaded ? "opacity-100" : "opacity-0"} mb-4 w-full rounded-xl transition duration-1000`}
        onLoad={() => setImageLoaded(true)}
      />

      <h2 className="mb-2 text-2xl font-semibold text-gray-800">{title}</h2>
      <div className="mb-2 flex items-center text-gray-600">
        <p className="mr-2 font-semibold">{date}</p>
        <span className="text-gray-500">{time}</span>
      </div>

      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}

export default function NosEvenementsPage() {
  const { loading, events, error } = useGetEvents();

  events.length > 0 && console.log(events[0].fields);

  const [revealEvents, setRevealEvents] = useState(false);

  useEffect(() => {
    if (!loading && events.length > 0) {
      setTimeout(() => {
        setRevealEvents(true);
      }, 100);
    }
  }, [loading]);

  return (
    <section className="font-montserrat min-h-[calc(100dvh-54px-44px)] bg-[#fffcf9] pt-[55px] xl:min-h-[calc(100dvh-63px-45px)] xl:pt-[65px]">
      <div className="flex items-center justify-center py-12">
        <div className="flex w-4/5 flex-col justify-center md:flex-row xl:w-1/2">
          {loading && (
            <div>
              <img
                src={logo}
                className="mx-auto h-16 animate-bounce object-cover"
              />
              <p className="mx-auto mt-1 text-center">Chargement en cours...</p>
            </div>
          )}
          <div
            className={`flex flex-col justify-center md:flex-row md:flex-wrap  ${revealEvents ? "h-fit translate-y-0 opacity-100" : "h-0 translate-y-2 opacity-0"} transition-all duration-700`}
          >
            {!loading &&
              events.length > 0 &&
              events.map((event, index) => {
                if (event.fields.active) {
                  return (
                    <Event
                      key={index}
                      title={event.fields.title}
                      date={event.fields.date}
                      time={event.fields.time}
                      image={event.fields.image[0].url}
                      imageWidth={event.fields.image[0].width}
                      imageHeight={event.fields.image[0].height}
                      description={event.fields.description}
                    />
                  );
                } else {
                  return;
                }
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
