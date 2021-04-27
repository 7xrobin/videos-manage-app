import React from 'react';
import FloatButton from '../elements/float-button';
import SearchInput from '../elements/search-input';

interface ToolbarProps {
  searchText: string;
  setSearchText: Function;
}

const Toolbar: React.FC<ToolbarProps> = ({ searchText, setSearchText }) => {
  return (
    <div className="toolbar">
      <h3 className="text-white text-2xl">Videos</h3>
      <div className="toolbar-actions">
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
        <FloatButton>ADD VIDEO</FloatButton>
      </div>
    </div>
  );
};

export default Toolbar;
