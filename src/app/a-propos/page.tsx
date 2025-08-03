import { Layout } from '@/components/organisms/Layout';
import { getAllData } from '@/hooks/useSanityData';

const AProposPage = async () => {
  const data = await getAllData();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            À propos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l&apos;histoire et les valeurs qui font de Le Ravito le lieu de référence pour les passionnés de trail.
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre histoire</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Le Ravito est né d&apos;une passion partagée pour le trail et d&apos;une vision simple : 
                  créer un lieu où les coureurs pourraient se ressourcer après l&apos;effort avec des 
                  produits sains et équilibrés.
                </p>
                <p>
                  Fondé en 2020 par une équipe de passionnés de trail, notre établissement s&apos;est 
                  rapidement imposé comme le point de rencontre incontournable de la communauté 
                  sportive lyonnaise.
                </p>
                <p>
                  Aujourd&apos;hui, Le Ravito accueille chaque jour des coureurs de tous niveaux, 
                  des débutants aux athlètes confirmés, dans une ambiance chaleureuse et conviviale.
                </p>
              </div>
            </div>
            <div className="bg-orange-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Depuis 2020</h3>
                <p className="text-gray-600">
                  Plus de 4 ans d&apos;expérience au service de la communauté trail
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos valeurs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Qualité */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Qualité</h3>
                <p className="text-gray-600">
                  Nous sélectionnons avec soin nos ingrédients pour garantir des produits frais et nutritifs.
                </p>
              </div>
            </div>

            {/* Communauté */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Communauté</h3>
                <p className="text-gray-600">
                  Nous créons un espace de rencontre et de partage pour tous les passionnés de trail.
                </p>
              </div>
            </div>

            {/* Durabilité */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Durabilité</h3>
                <p className="text-gray-600">
                  Nous nous engageons pour l&apos;environnement avec des pratiques éco-responsables.
                </p>
              </div>
            </div>

            {/* Innovation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Nous développons constamment de nouvelles recettes et services pour vous satisfaire.
                </p>
              </div>
            </div>

            {/* Accessibilité */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessibilité</h3>
                <p className="text-gray-600">
                  Nous accueillons tous les niveaux, du débutant au coureur confirmé, sans jugement.
                </p>
              </div>
            </div>

            {/* Passion */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Passion</h3>
                <p className="text-gray-600">
                  Notre équipe partage votre passion du trail et s&apos;investit pour vous offrir le meilleur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre équipe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une équipe passionnée qui partage votre amour du trail et de la nutrition sportive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Membre 1 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-orange-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thomas</h3>
              <p className="text-orange-600 font-medium mb-4">Fondateur & Coach Trail</p>
              <p className="text-gray-600">
                Passionné de trail depuis 15 ans, Thomas partage son expérience et ses conseils avec la communauté.
              </p>
            </div>

            {/* Membre 2 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Marie</h3>
              <p className="text-blue-600 font-medium mb-4">Nutritionniste Sportive</p>
              <p className="text-gray-600">
                Spécialisée en nutrition sportive, Marie crée nos recettes équilibrées pour optimiser vos performances.
              </p>
            </div>

            {/* Membre 3 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lucas</h3>
              <p className="text-green-600 font-medium mb-4">Chef Cuisinier</p>
              <p className="text-gray-600">
                Lucas prépare avec passion nos plats frais et équilibrés, en privilégiant les produits locaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Le Ravito en chiffres</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Quelques chiffres qui témoignent de notre engagement auprès de la communauté trail.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <p className="text-white/90">Coureurs accueillis</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <p className="text-white/90">Événements organisés</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <p className="text-white/90">Produits frais</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <p className="text-white/90">Support communauté</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Rejoignez notre communauté
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Venez découvrir l&apos;ambiance unique du Ravito et partager votre passion du trail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Nous contacter
            </a>
            <a 
              href="/evenements" 
              className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Découvrir nos événements
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AProposPage; 
