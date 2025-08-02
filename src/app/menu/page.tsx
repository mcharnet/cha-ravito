import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/ui/Hero';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import MenuWithSanity from '@/components/MenuWithSanity';

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <Hero
        title="Notre Menu"
        subtitle="Découvrez nos boissons saines et notre nourriture équilibrée spécialement conçues pour les coureurs de trail."
      />

      <MenuWithSanity />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à récupérer ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Venez nous rejoindre après votre entraînement pour une pause bien méritée.
          </p>
          <Button href="/contact" variant="secondary">
            Réserver une table
          </Button>
        </Container>
      </section>

      <Footer />
    </main>
  );
} 
