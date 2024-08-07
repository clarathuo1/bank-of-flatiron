import React from 'react'

function SearchBar({value,onChange}) {
    //render search input field
  return (
    <input
      type="search"
      value={value}
      onChange={onChange}
      placeholder="Search transactions..."
    />

  );
}
export default SearchBar;