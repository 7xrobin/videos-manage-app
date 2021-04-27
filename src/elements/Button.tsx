import React from 'react';

interface ButtonProps {
  //   type: 'edit' | 'delete';
  color: string;
}

const Button: React.FC<ButtonProps> = ({ children, color }) => {
  return (
    <>
      {/* { type === 'edit' && ( */}
      <div className={`border-2 border-${color}`}>{children}</div>
      {/* )} */}
    </>
  );
};

export default Button;
