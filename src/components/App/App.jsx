import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import SearchResults from '../SearchResults/SearchResults.jsx';
import Playlist from '../Playlist/Playlist.jsx';

function App() {
  const [searchResults, setSearchResults] = useState([{name: 'test', artist: 'test', album: 'test', id: 'test'}]);

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} setSearchResults={setSearchResults} />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
