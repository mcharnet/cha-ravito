'use client';

import { useEventsData } from '@/hooks/useSanityData';
import EventCard from './EventCard';
import Container from './ui/Container';

export default function EventsSection() {
  const { data: events, loading, error } = useEventsData();

  return (
    <section className="py-16 bg-white">
      <Container>
        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-600">Chargement des événements...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-600">Erreur lors du chargement des événements</p>
          </div>
        ) : events && events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <EventCard key={event._id || index} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600">Aucun événement disponible pour le moment</p>
          </div>
        )}
      </Container>
    </section>
  );
} 
