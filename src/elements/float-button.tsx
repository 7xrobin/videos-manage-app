import React from 'react';

interface FloatButtonProps {}

const FloatButton: React.FC<FloatButtonProps> = ({ children }) => {
  return <button className="shadow-md bg-greenLight active:bg-greenMoving active:border-0 p-4">{children}</button>;
};

export default FloatButton;
