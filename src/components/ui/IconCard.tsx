import { cn } from '../../lib/utils';

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg?: 'blue' | 'green' | 'amber' | 'orange' | 'yellow' | 'primary' | 'secondary' | 'accent';
  className?: string;
}

const iconBgStyles = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  amber: 'bg-amber-100 text-amber-600',
  orange: 'bg-orange-100 text-orange-600',
  yellow: 'bg-yellow-100 text-yellow-600',
  primary: 'bg-primary-100 text-primary-500',
  secondary: 'bg-secondary-100 text-secondary-500',
  accent: 'bg-accent-100 text-accent-500',
};

export default function IconCard({ 
  icon, 
  title, 
  description, 
  iconBg = 'primary',
  className 
}: IconCardProps) {
  return (
    <div className={cn('text-center p-6', className)}>
      <div className={cn(
        'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
        iconBgStyles[iconBg]
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
} 
