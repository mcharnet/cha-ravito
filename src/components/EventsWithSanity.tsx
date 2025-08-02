'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Trophy, Users2, Coffee } from 'lucide-react';
import Image from 'next/image';
import { Event, useEventsData } from '../hooks/useEventsData';
import { urlFor } from '../sanity/lib/image';
import Button from './ui/Button';
import Container from './ui/Container';

const eventTypeIcons = {
  'Course': <Trophy className="h-6 w-6 text-orange-500" />,
  'Atelier': <Coffee className="h-6 w-6 text-blue-500" />,
  'Rencontre': <Users2 className="h-6 w-6 text-green-500" />,
};

const eventTypeColors = {
  'Course': 'bg-orange-100 text-orange-800 border-orange-200',
  'Atelier': 'bg-blue-100 text-blue-800 border-blue-200',
  'Rencontre': 'bg-green-100 text-green-800 border-green-200',
};

export default function EventsWithSanity() {
  const { data: events, loading, error } = useEventsData();

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement des événements...</p>
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center">
            <p className="text-red-600">Erreur lors du chargement des événements</p>
          </div>
        </Container>
      </section>
    );
  }

  if (!events || events.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Événements
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez nos événements à venir
            </p>
            <div className="bg-white rounded-lg shadow-lg p-12">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Aucun événement pour le moment
              </h3>
              <p className="text-gray-600">
                Revenez bientôt pour découvrir nos prochains événements !
              </p>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Événements
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez nos événements à venir et rejoignez notre communauté
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {event.image && (
                  <div className="w-full h-48 overflow-hidden">
                    <Image
                      src={urlFor(event.image).width(400).height(200).url()}
                      alt={event.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${eventTypeColors[event.type]}`}>
                      {event.type}
                    </span>
                    {event.participants > 0 && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        {event.participants}
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                      {new Date(event.date).toLocaleDateString('fr-FR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-orange-500" />
                      {event.time}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                      {event.location}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <Button href="/contact" variant="primary" size="sm" className="w-full">
                    S'inscrire
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button href="/contact" variant="secondary" size="lg">
              Nous contacter pour plus d'infos
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
} 
