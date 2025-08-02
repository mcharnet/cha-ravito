// Requêtes Sanity pour Le Ravito

// Requête pour récupérer tous les éléments du menu disponibles
export const menuItemsQuery = `*[_type == "menuItem" && isAvailable == true] {
  _id,
  name,
  description,
  price,
  category,
  type,
  image,
  isAvailable
} | order(category asc, name asc)`;

// Requête pour récupérer les données de contact
export const contactDataQuery = `*[_type == "contact"][0] {
  address,
  phone,
  email,
  openingHours[] {
    day,
    hours
  }
}`;

// Requête pour récupérer les données du hero
export const heroDataQuery = `*[_type == "hero"][0] {
  title,
  subtitle
}`;

// Requête pour récupérer les événements
export const eventsQuery = `*[_type == "event"] {
  _id,
  title,
  description,
  date,
  time,
  location,
  participants,
  image
} | order(date asc)`; 
