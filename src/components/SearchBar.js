import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form action="/zoeken" method="get" autoComplete="off">
    <div role="search" className="searchInputContainer">
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="search"
        id="header-search"
        placeholder="Zoek op trefwoord"
        className="searchInput"
        name="zoekterm"
      />
      <button
        className="btn btn-primary ml-2"
        style={{ height: '34px', lineHeight: '18px', marginTop: '-4px' }}
        type="submit">
        Zoeken
      </button>
    </div>
  </form>
);

export default SearchBar;
