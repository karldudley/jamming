// src/App.js
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Spotify from './util/Spotify';

const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [playlistName, setPlaylistName] = useState('New Playlist');
    const [playlistTracks, setPlaylistTracks] = useState([]);

    const addTrack = (track) => {
        if (!playlistTracks.find((t) => t.id === track.id)) {
            setPlaylistTracks([...playlistTracks, track]);
        }
    };

    const removeTrack = (track) => {
        setPlaylistTracks(playlistTracks.filter((t) => t.id !== track.id));
    };

    const updatePlaylistName = (name) => {
        setPlaylistName(name);
    };

    const savePlaylist = () => {
        const trackURIs = playlistTracks.map((track) => track.uri);
        Spotify.savePlaylist(playlistName, trackURIs).then(() => {
            setPlaylistName('New Playlist');
            setPlaylistTracks([]);
        });
    };

    const search = (term) => {
        Spotify.search(term).then((results) => setSearchResults(results));
    };

    return (
        <div>
            <h1>
                Ja<span className="highlight">mmm</span>ing
            </h1>
            <div className="App">
                <SearchBar onSearch={search} />
                <div className="App-playlist">
                    <SearchResults
                        searchResults={searchResults}
                        onAdd={addTrack}
                    />
                    <Playlist
                        playlistName={playlistName}
                        playlistTracks={playlistTracks}
                        onRemove={removeTrack}
                        onNameChange={updatePlaylistName}
                        onSave={savePlaylist}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
