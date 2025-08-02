import { cn } from '../../lib/utils';

interface HeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function Hero({ title, subtitle, className }: HeroProps) {
  return (
    <section className={cn('py-20 bg-background-primary', className)}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
          {title}
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
} 
