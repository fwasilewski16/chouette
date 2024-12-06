import useGetEvents from "../hooks/useGetEvents";

function Event(props) {
  return (
    <div className="flex flex-col border border-black">
      <div>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
        <p>{props.time}</p>
      </div>
      <img src={props.img} />
    </div>
  );
}

export default function NosEvenementsPage() {
  const { loading, events, error } = useGetEvents();
  console.log(events);

  return (
    <section className="font-montserrat min-h-[calc(100dvh-60px-40px)] xl:min-h-[calc(100dvh-69px-40px)]">
      {/* <div>
        {events &&
          events.map((event, index) => {
            if (event.active) {
              return (
                <Event
                  key={index}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  img={event.img}
                />
              );
            }
          })}
      </div> */}
    </section>
  );
}
