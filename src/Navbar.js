import React from 'react';

const Navbar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <nav className="navbar">
      <div className="logo">Pokedex</div>
      <div className="search-bar">
        <input type="text" placeholder="Search Pokemon..." onChange={handleSearch} />
      </div>
    </nav>
  );
}

export default Navbar;
