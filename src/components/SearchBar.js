import React from 'react'

function SearchBar({value,onChange,className}) {
    //render search input field
  return (
    <input
      type="search"
      value={value}
      onChange={onChange}
      placeholder="Search transactions..."
      className={className}
    />

  );
}
export default SearchBar;