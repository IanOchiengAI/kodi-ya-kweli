import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'green' | 'red' | 'amber' | 'blue' | 'gray';
  size?: 'sm' | 'md';
  className?: string;
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gray',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    red: 'bg-rose-50 text-rose-700 border-rose-200',
    amber: 'bg-amber-50 text-amber-800 border-amber-200',
    blue: 'bg-sky-50 text-sky-700 border-sky-200',
    gray: 'bg-gray-100 text-gray-700 border-gray-200',
  }[variant];

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs md:text-sm px-2.5 py-1',
  }[size];

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${variantStyles} ${sizeStyles} ${className}`}
    >
      {children}
    </span>
  );
};
