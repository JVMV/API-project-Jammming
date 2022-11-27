/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import SearchResults from '../SearchResults/SearchResults.jsx';
import Playlist from '../Playlist/Playlist.jsx';

function App() {
  const [searchResults, setSearchResults] = useState([{
    name: 'test', 
    artist: 'test', 
    album: 'test', 
    id: 'test'
  }]);
  const [playlistName, setPlaylistName] = useState(null);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = track => {
    if(!playlistTracks.find(track => track.id === track.id))
      setPlaylistTracks(playlistTracks.concat(track))
  }
  
  const removeTrack = tracks => {
    const filtered = playlistTracks.filter(track => track.id !== tracks.id)
    return setPlaylistTracks(filtered)
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults 
          searchResults={searchResults} 
          setSearchResults={setSearchResults}
          onAdd={addTrack}
          />
          <Playlist 
          playlistName={playlistName} setPlaylistName={setPlaylistName}
          playlistTracks={playlistTracks} setPlaylistTracks={setPlaylistTracks}
          onRemove={removeTrack}
           />
        </div>
      </div>
    </div>
  );
}

export default App;
