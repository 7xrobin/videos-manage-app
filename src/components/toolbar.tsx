import React from 'react';
import FloatButton from '../elements/float-button';
import SearchInput from '../elements/search-input';

interface ToolbarProps {
  searchText: string;
  setSearchText: Function;
  setAddVideoOpen: Function;
}

const Toolbar: React.FC<ToolbarProps> = ({ setAddVideoOpen, searchText, setSearchText }) => {
  return (
    <div className="toolbar">
      <h3 className="text-white text-2xl">Videos</h3>
      <div className="toolbar-actions">
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
        <FloatButton
          onClick={() => {
            setAddVideoOpen(true);
          }}>
          ADD VIDEO
        </FloatButton>
      </div>
    </div>
  );
};

export default Toolbar;
