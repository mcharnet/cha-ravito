import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg p-6 shadow-sm border border-gray-200',
        hover && 'hover:shadow-lg transition-shadow',
        className
      )}
    >
      {children}
    </div>
  );
} 
