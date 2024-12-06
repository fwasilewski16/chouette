import { useEffect, useState } from "react";

export default function useGetEvents() {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // async function fetchEvents() {
    //   const response = await fetch(
    //     "https://api.airtable.com/v0/appLZOcNhR4ySeuiC/tbl3u4UrmwM5CMFpW",
    //     {
    //       headers: {
    //         Authorization:
    //       },
    //     },
    //   );
    //   const data = await response.json();
    //   const eventsFinal = data.records.map((event) => {
    //     return {
    //       title: event.fields.title,
    //       date: event.fields.date,
    //       img: event.fields.attachments[0].url,
    //       active: event.fields.active ? true : false,
    //     };
    //   });
    //   setEvents(eventsFinal.reverse());
    // }
    // fetchEvents();
  }, []);

  return { loading, events, error };
}
