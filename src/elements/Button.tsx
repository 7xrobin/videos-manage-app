import React from 'react';

interface ButtonProps {
  color: 'blueRoyal' | 'redPink';
}

const Button: React.FC<ButtonProps> = ({ children, color }) => {
  return <button className={`text-${color} active:bg-${color} basic-button`}>{children}</button>;
};

export default Button;
