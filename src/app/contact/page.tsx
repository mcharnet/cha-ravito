import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/ui/Hero';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <Hero
        title="Contactez-nous"
        subtitle="Venez nous rencontrer ou prenez contact avec nous pour toute question."
      />

      <Contact />

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prêt à nous rejoindre ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Venez découvrir notre ambiance trail et notre communauté passionnée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/menu" variant="primary">
              Voir notre menu
            </Button>
            <Button href="/events" variant="secondary">
              Nos événements
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
} 
