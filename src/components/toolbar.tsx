import React from 'react';

interface ToolbarProps {}

const Toolbar: React.FC<ToolbarProps> = ({ children }) => {
  return <div className="bg-green-50 shadow-sm px-5 py-3">{children}</div>;
};

export default Toolbar;
