import { useState, useEffect } from 'react';
import { client } from '../sanity/lib/client';

export interface Event {
  _id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  participants: number;
  type: 'Course' | 'Atelier' | 'Rencontre';
  image?: {
    asset: {
      _ref: string;
    };
  };
  isActive: boolean;
}

export function useEventsData() {
  const [data, setData] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "event" && isActive == true] | order(date asc) {
          _id,
          title,
          date,
          time,
          location,
          description,
          participants,
          type,
          image,
          isActive
        }`;
        
        const result = await client.fetch(query);
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventsData();
  }, []);

  return { data, loading, error };
} 
