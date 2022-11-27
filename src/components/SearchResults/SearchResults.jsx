/* eslint-disable react/prop-types */
import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList.jsx';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList 
                tracks={this.props.searchResults} 
                onAdd={this.props.onAdd} 
                isRemoval={false}
                 />
            </div>
        )
    }
}

export default SearchResults;