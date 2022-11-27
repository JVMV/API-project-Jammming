/* eslint-disable react/prop-types */
import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList.jsx';

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input value="New Playlist" readOnly />
                <TrackList playlistTracks={this.props.playlistTracks} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;