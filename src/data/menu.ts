export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  icon?: string;
}

export const boissons: MenuItem[] = [
  {
    name: "Smoothie Trail Mix",
    description: "Banane, myrtilles, protéines végétales, lait d'amande",
    price: "8.50€",
    category: "Smoothies"
  },
  {
    name: "Café Récupération",
    description: "Espresso avec lait d'avoine et sirop d'érable",
    price: "4.50€",
    category: "Cafés"
  },
  {
    name: "Jus Vert Énergie",
    description: "Épinards, pomme, gingembre, citron",
    price: "6.50€",
    category: "Jus"
  },
  {
    name: "Boisson Électrolytes",
    description: "Coco, sel de mer, citron, miel",
    price: "5.50€",
    category: "Récupération"
  }
];

export const nourriture: MenuItem[] = [
  {
    name: "Bowl Post-Trail",
    description: "Quinoa, avocat, œuf, graines de chia",
    price: "12.50€",
    category: "Bowls"
  },
  {
    name: "Wrap Protéines",
    description: "Poulet, hummus, légumes, tortilla complète",
    price: "9.50€",
    category: "Wraps"
  },
  {
    name: "Energy Balls",
    description: "Dattes, noix, cacao, noix de coco",
    price: "3.50€",
    category: "Snacks"
  },
  {
    name: "Salade Trail",
    description: "Lentilles, quinoa, légumes, vinaigrette citron",
    price: "11.50€",
    category: "Salades"
  }
]; 
