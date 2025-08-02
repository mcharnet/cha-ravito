import { Calendar, MapPin, Clock, Users, Trophy } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';
import Image from 'next/image';

interface Event {
  _id?: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  participants: number;
  type: string;
  imageUrl?: string;
}

interface EventCardProps {
  event: Event;
}

const eventIcons = {
  'Course': <Trophy className="h-5 w-5 text-amber-600" />,
  'Atelier': <Users className="h-5 w-5 text-green-600" />,
  'Rencontre': <Users className="h-5 w-5 text-green-600" />,
};

export default function EventCard({ event }: EventCardProps) {
  const icon = eventIcons[event.type as keyof typeof eventIcons];

  return (
    <Card className="bg-gray-50 overflow-hidden">
      {/* Image Section */}
      {event.imageUrl && (
        <div className="relative h-48 w-full mb-4">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {icon}
            <span className="text-sm font-medium text-gray-500">{event.type}</span>
          </div>
          <span className="text-sm text-gray-500">{event.participants} participants</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{event.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{event.time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{event.location}</span>
          </div>
        </div>

        <Button size="sm">S&apos;inscrire</Button>
      </div>
    </Card>
  );
} 
