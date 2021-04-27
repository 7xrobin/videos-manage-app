import React from 'react';
import FloatButton from '../elements/float-button';

interface ToolbarProps {}

const Toolbar: React.FC<ToolbarProps> = () => {
  return (
    <div className="toolbar">
      <h3 className="text-white text-2xl">Videos</h3>
      <div className="toolbar-actions">
        <input type="text" id="search" name="search" />
        <FloatButton>ADD VIDEO</FloatButton>
      </div>
    </div>
  );
};

export default Toolbar;
