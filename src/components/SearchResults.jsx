// src/components/SearchResults.js
import React from 'react';
import TrackList from './TrackList';

const SearchResults = ({ searchResults, onAdd }) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
        </div>
    );
};

export default SearchResults;
