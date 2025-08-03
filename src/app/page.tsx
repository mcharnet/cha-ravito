import { Layout } from '@/components/organisms/Layout';
import { getAllData } from '@/hooks/useSanityData';
import type { MenuItemData } from '@/hooks/useSanityData';

const HomePage = async () => {
  const data = await getAllData();

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Votre Ravito après l&apos;effort
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            Le lieu idéal pour les passionnés de trail : boissons saines, nourriture équilibrée et une communauté vibrante.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/menu" 
              className="bg-orange-500 text-white px-10 py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Découvrir notre menu
            </a>
            <a 
              href="/contact" 
              className="border-2 border-orange-500 text-orange-500 px-10 py-4 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Réserver une table
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Boissons Saines */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Boissons Saines</h3>
              <p className="text-gray-600 leading-relaxed">
                Smoothies, jus frais, et boissons énergisantes naturelles pour vous hydrater après l&apos;effort.
              </p>
            </div>

            {/* Nutrition Post-Trail */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nutrition Post-Trail</h3>
              <p className="text-gray-600 leading-relaxed">
                Snacks équilibrés et repas récupération pour refaire vos forces après une session intense.
              </p>
            </div>

            {/* Événements Trail */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
                <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Événements Trail</h3>
              <p className="text-gray-600 leading-relaxed">
                Communauté active et événements réguliers pour partager votre passion du trail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                LE RAVITO
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Le lieu idéal pour les passionnés de trail : boissons saines, nourriture équilibrée et une communauté vibrante.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Boissons énergisantes naturelles</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Snacks équilibrés post-effort</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Événements trail réguliers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-orange-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Horaires d&apos;ouverture</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>7h00 - 20h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi - Dimanche</span>
                    <span>8h00 - 22h00</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm opacity-90">
                    Prêt pour votre prochaine session trail ? Venez vous ressourcer chez Le Ravito !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage; 
