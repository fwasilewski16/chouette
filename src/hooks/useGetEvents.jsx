import { useEffect, useState } from "react";

export default function useGetEvents() {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true); // Start loading
      setError(false); // Reset any previous errors
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/chouette/events`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();

        setEvents(data); // Set the events state with the fetched data
      } catch (err) {
        setError(true); // Set error state to true if there's an issue
        console.error("Error fetching events: ", err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000); // End loading state regardless of success or failure
      }
    }

    fetchEvents();
  }, []);

  return { loading, events, error };
}
