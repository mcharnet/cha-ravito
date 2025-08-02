export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  participants: number;
  type: 'Course' | 'Atelier' | 'Rencontre';
}

export const events: Event[] = [
  {
    title: "Trail du Matin",
    date: "15 Janvier 2024",
    time: "7h00 - 9h00",
    location: "Forêt de Fontainebleau",
    description: "Course matinale de 10km en forêt, suivie d'un petit-déjeuner récupération au bar.",
    participants: 25,
    type: "Course"
  },
  {
    title: "Atelier Nutrition Trail",
    date: "20 Janvier 2024",
    time: "14h00 - 16h00",
    location: "Cha Ravito",
    description: "Découvrez les meilleures stratégies nutritionnelles pour vos courses de trail.",
    participants: 15,
    type: "Atelier"
  },
  {
    title: "Trail Nocturne",
    date: "28 Janvier 2024",
    time: "19h00 - 21h00",
    location: "Parc de Sceaux",
    description: "Course nocturne de 8km avec éclairage frontal. Ambiance unique garantie !",
    participants: 30,
    type: "Course"
  },
  {
    title: "Rencontre Trail Community",
    date: "5 Février 2024",
    time: "18h00 - 20h00",
    location: "Cha Ravito",
    description: "Échange d'expériences et partage de conseils entre coureurs de tous niveaux.",
    participants: 20,
    type: "Rencontre"
  }
]; 
