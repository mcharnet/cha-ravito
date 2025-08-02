import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Page non trouvée
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas.
          </p>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 
