/* eslint-disable react/prop-types */
import React from 'react';
import './TrackList.css';
import Track from '../Track/Track.jsx';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks
                ? this.props.tracks.map(track => <Track key={track.id} track={track} onAdd={this.props.onAdd} />) 
                : null}
            </div>
        )
    }
}

export default TrackList;