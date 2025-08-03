import { Layout } from '@/components/organisms/Layout';
import { getAllData } from '@/hooks/useSanityData';

const ClickCollectPage = async () => {
  const data = await getAllData();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Click & Collect
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Commandez en ligne et récupérez vos produits en 5 minutes.
          </p>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
            <p className="text-xl text-gray-600">
              En 3 étapes simples, récupérez vos produits frais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Commandez</h3>
              <p className="text-gray-600">
                Sélectionnez vos produits sur notre site.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Préparation</h3>
              <p className="text-gray-600">
                Nous préparons vos produits frais.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Récupérez</h3>
              <p className="text-gray-600">
                Récupérez en 5 minutes maximum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Horaires */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Horaires de retrait</h2>
            <p className="text-xl text-gray-600">
              Commandez jusqu&apos;à 30 minutes avant votre créneau.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Créneaux disponibles</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium">Matin</span>
                    <span className="text-gray-600">7h00 - 11h00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium">Midi</span>
                    <span className="text-gray-600">11h30 - 15h00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium">Après-midi</span>
                    <span className="text-gray-600">15h30 - 19h00</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium">Soir</span>
                    <span className="text-gray-600">19h30 - 22h00</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Commande minimum : 5€</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Préparation en 5-10 minutes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Paiement en ligne sécurisé</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Retrait sans contact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à commander ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Commandez maintenant et récupérez vos produits frais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-orange-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Commander maintenant
            </a>
            <a 
              href="/menu" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Voir le menu
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClickCollectPage; 
