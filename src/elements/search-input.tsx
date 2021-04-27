import React from 'react';

interface SearchInputProps {
  searchText: string;
  setSearchText: Function;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchText, setSearchText }) => {
  return (
    <div>
      <label htmlFor="search" className="text-white mb-2 md:m-2">
        Search:
      </label>
      <input
        type="text"
        id="search"
        name="search"
        className="mr-1 p-1"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
