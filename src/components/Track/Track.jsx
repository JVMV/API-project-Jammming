/* eslint-disable react/prop-types */
import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props)
        this.addTrack = this.addTrack.bind(this)
        this.removeTrack = this.removeTrack.bind(this)
    }
    addTrack(track) {
        this.props.onAdd(track)
    }
    removeTrack(track) {
        this.props.onRemove(track)
    }
    render() {
        const { name, artist, album } = this.props.track;
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{name}</h3>
                    <p>{artist} | {album} </p>
                </div>
                {this.props.onAdd
                ? <button className="Track-action" onClick={() => this.addTrack(this.props.track)}>+</button>
                : <button className="Track-action" onClick={() => this.removeTrack(this.props.track)}>-</button>}
            </div>
        )
    }
}

export default Track;