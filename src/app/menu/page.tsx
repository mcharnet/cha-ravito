import { Layout } from '@/components/organisms/Layout';
import { getMenuItemsData } from '@/hooks/useSanityData';
import type { MenuItemData } from '@/hooks/useSanityData';
import Link from 'next/link';

const MenuPage = async () => {
  const menuItems = await getMenuItemsData();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Notre Carte
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection de boissons saines et de plats équilibrés, 
            parfaits pour vous ressourcer après l&apos;effort.
          </p>
        </div>
      </section>

      {/* Menu Items */}
      {menuItems && menuItems.length > 0 ? (
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item: MenuItemData, index: number) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-orange-500">
                      {item.price}€
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.isVegetarian && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Végétarien
                      </span>
                    )}
                    {item.isVegan && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Vegan
                      </span>
                    )}
                    {item.isGlutenFree && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        Sans gluten
                      </span>
                    )}
                  </div>
                  {item.isAvailable ? (
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Disponible
                    </span>
                  ) : (
                    <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      Indisponible
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">🍽️</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Carte en cours de préparation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Notre équipe travaille actuellement sur notre nouvelle carte.<br />
              Revenez bientôt pour découvrir nos délicieuses spécialités !
            </p>
            <Link href="/" className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 font-semibold text-lg">
              Retour à l&apos;accueil
            </Link>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à vous ressourcer ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Venez découvrir notre menu complet et nos spécialités post-trail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-orange-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Réserver une table
            </a>
            <a 
              href="/click-collect" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Commander en ligne
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage; 
