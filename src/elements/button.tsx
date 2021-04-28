import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'blueRoyal' | 'redPink' | 'greenMoving';
}

const Button: React.FC<ButtonProps> = ({ children, color, onClick }) => {
  return (
    <button onClick={onClick} className={`text-${color} active:bg-${color} basic-button`}>
      {children}
    </button>
  );
};

export default Button;
