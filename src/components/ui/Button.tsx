import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-brand-green text-white hover:bg-brand-green-light focus:ring-brand-green shadow-sm',
    secondary: 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200 focus:ring-emerald-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-300',
    danger: 'bg-brand-red text-white hover:bg-red-700 focus:ring-brand-red',
  }[variant];

  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2.5',
    lg: 'text-base px-6 py-3 font-semibold',
  }[size];

  const width = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${base} ${variants} ${sizes} ${width} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
