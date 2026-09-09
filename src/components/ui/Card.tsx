import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
};

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
}) => {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm ${
        hoverable ? 'hover:shadow-md hover:border-gray-300 transition-all' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
