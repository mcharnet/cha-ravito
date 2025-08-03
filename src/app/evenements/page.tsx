import { Layout } from '@/components/organisms/Layout';
import { getAllData } from '@/hooks/useSanityData';

const EvenementsPage = async () => {
  const data = await getAllData();

  // Données d'exemple pour les événements (à remplacer par les données Sanity)
  const evenements = [
    {
      id: 1,
      titre: "Running Club - Soirée Trail",
      date: "15 Janvier 2024",
      heure: "19h00",
      description: "Rejoignez notre communauté de runners pour une soirée spéciale trail. Partage d'expériences, conseils d'experts et networking entre passionnés.",
      lieu: "Le Ravito",
      prix: "Gratuit",
      places: "20 places disponibles",
      image: "🏃‍♂️"
    },
    {
      id: 2,
      titre: "Atelier Nutrition Sportive",
      date: "22 Janvier 2024",
      heure: "14h00",
      description: "Découvrez les secrets de la nutrition pour optimiser vos performances sportives. Conseils personnalisés et dégustation de nos spécialités.",
      lieu: "Le Ravito",
      prix: "15€",
      places: "15 places disponibles",
      image: "🥗"
    },
    {
      id: 3,
      titre: "Marathon de Paris - Point de Ravitaillement",
      date: "7 Avril 2024",
      heure: "8h00 - 18h00",
      description: "Nous serons présents au Marathon de Paris comme point de ravitaillement officiel. Venez nous encourager et profiter de nos boissons énergisantes.",
      lieu: "Parcours du Marathon",
      prix: "Gratuit",
      places: "Ouvert à tous",
      image: "🏃‍♀️"
    },
    {
      id: 4,
      titre: "Soirée Projection - Documentaires Sport",
      date: "29 Janvier 2024",
      heure: "20h00",
      description: "Projection de documentaires inspirants sur le sport et l'aventure. Discussion et échanges autour d'un verre.",
      lieu: "Le Ravito",
      prix: "8€",
      places: "25 places disponibles",
      image: "🎬"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nos Événements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos événements sportifs et culturels<br />
            pour partager votre passion du running
          </p>
        </div>
      </section>

      {/* Événements List */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {evenements.map((evenement) => (
              <div key={evenement.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{evenement.image}</div>
                  <div className="text-right">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {evenement.prix}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {evenement.titre}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <span className="font-medium mr-2">📅</span>
                    {evenement.date} à {evenement.heure}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="font-medium mr-2">📍</span>
                    {evenement.lieu}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="font-medium mr-2">👥</span>
                    {evenement.places}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {evenement.description}
                </p>
                
                                 <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 font-semibold">
                   S&apos;inscrire
                 </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Organisez votre événement
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Vous souhaitez organiser un événement sportif ou culturel ?<br />
            Nous mettons nos locaux à votre disposition !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 font-semibold text-lg">
              Proposer un événement
            </button>
            <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200 transform hover:scale-105 font-semibold text-lg">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EvenementsPage; 
