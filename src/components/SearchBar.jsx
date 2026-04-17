import React from 'react';
import './SearchBar.css';

export default function SearchBar({ searchQuery, onSearchChange, resultCount }) {
  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className="searchBarWrapper">
      <div className="searchBarContainer">
        <input
          type="text"
          placeholder="Rechercher par titre, description ou note..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="searchBarInput"
        />
        <span className="searchIcon">🔍</span>
        <button 
          className="clearButton" 
          onClick={handleClear}
          aria-label="Effacer la recherche"
        >
          ✕
        </button>
      </div>
      <div className="resultInfo">
        <span>{resultCount}</span> film{resultCount !== 1 ? 's' : ''} trouvé{resultCount !== 1 ? 's' : ''}
      </div>
    </div>
  );
}
