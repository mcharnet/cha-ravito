import { Layout } from '@/components/organisms/Layout';
import { getAllData } from '@/hooks/useSanityData';

const ReserverPage = async () => {
  const data = await getAllData();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Réserver une table
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Réservez votre table au Ravito et profitez de notre ambiance trail unique après votre session.
          </p>
        </div>
      </section>

      {/* Formulaire de réservation */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Informations */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Informations de réservation
                </h2>
                <div className="space-y-6 text-lg text-gray-600">
                  <p>
                    Réservez votre table en ligne et profitez de notre ambiance trail unique. 
                    Nous vous accueillons dans un cadre convivial pour vous ressourcer après l&apos;effort.
                  </p>
                  <p>
                    Nos tables sont disponibles pour des groupes de 2 à 8 personnes. 
                    Pour des groupes plus importants, contactez-nous directement.
                  </p>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-orange-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Horaires d&apos;ouverture</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Lundi - Vendredi</span>
                    <span className="text-gray-600">7h00 - 20h00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Samedi - Dimanche</span>
                    <span className="text-gray-600">8h00 - 22h00</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-orange-200">
                  <p className="text-sm text-gray-600">
                    Réservation recommandée pour les weekends et les événements spéciaux.
                  </p>
                </div>
              </div>

              {/* Avantages */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pourquoi réserver ?</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Table garantie à votre arrivée</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Service personnalisé</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Ambiance trail unique</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Produits frais et équilibrés</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Réserver maintenant
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Heure *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="">Choisir une heure</option>
                      <option value="07:00">07h00</option>
                      <option value="08:00">08h00</option>
                      <option value="09:00">09h00</option>
                      <option value="10:00">10h00</option>
                      <option value="11:00">11h00</option>
                      <option value="12:00">12h00</option>
                      <option value="13:00">13h00</option>
                      <option value="14:00">14h00</option>
                      <option value="15:00">15h00</option>
                      <option value="16:00">16h00</option>
                      <option value="17:00">17h00</option>
                      <option value="18:00">18h00</option>
                      <option value="19:00">19h00</option>
                      <option value="20:00">20h00</option>
                      <option value="21:00">21h00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de personnes *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Choisir le nombre</option>
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="5">5 personnes</option>
                    <option value="6">6 personnes</option>
                    <option value="7">7 personnes</option>
                    <option value="8">8 personnes</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-2">
                    Occasion
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Choisir une occasion</option>
                    <option value="post-trail">Après trail</option>
                    <option value="meeting">Réunion</option>
                    <option value="celebration">Célébration</option>
                    <option value="casual">Casual</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                    Demandes spéciales
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                    placeholder="Allergies, préférences alimentaires, demandes particulières..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-4 px-8 rounded-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
                >
                  Confirmer la réservation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Informations supplémentaires */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Informations importantes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir pour une réservation réussie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Annulation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Annulation</h3>
                <p className="text-gray-600">
                  Annulation gratuite jusqu&apos;à 2h avant votre réservation. Contactez-nous par téléphone.
                </p>
              </div>
            </div>

            {/* Retard */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Retard</h3>
                <p className="text-gray-600">
                  Nous gardons votre table 15 minutes après l&apos;heure de réservation. Prévenez-nous en cas de retard.
                </p>
              </div>
            </div>

            {/* Groupes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Groupes</h3>
                <p className="text-gray-600">
                  Pour des groupes de plus de 8 personnes, contactez-nous directement pour organiser votre événement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à nous rejoindre ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Réservez votre table et profitez de notre ambiance trail unique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/menu" 
              className="bg-white text-orange-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Voir notre menu
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReserverPage; 
