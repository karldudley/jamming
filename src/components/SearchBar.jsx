// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const search = () => {
        onSearch(term);
    };

    return (
        <div className="SearchBar">
            <input
                placeholder="Enter A Song, Album, or Artist"
                value={term}
                onChange={handleTermChange}
            />
            <button onClick={search}>SEARCH</button>
        </div>
    );
};

export default SearchBar;
