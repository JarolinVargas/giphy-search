import React from 'react';
import './SearchOutput.scss';
import GifBanner from './GifBanner';
import Notice from './Notice';

export default function SearchOutput(props) {
    const invalidResults = props.searchStatus !== null && props.searchResults.length === 0;  // if search status has a message, and number of searchResults items is '0', something went wrong
    
    let searchResultsItems = [];
    if( !invalidResults ) {
        for( let i = 0; i < props.searchResults.length; i++ ) {
            const item = props.searchResults[i];
            searchResultsItems.push(
                <div key={i}><GifBanner gifURL={item.images.downsized_medium.url} alt={item.slug}/></div>
            );
        }
    }

    // toggle between display 'grid' and 'block' styles to avoid showing message as part of grid item.
    return (
        <div id="search-output-container" style={!props.showResults ? {display:'none'} : {display: !invalidResults ? 'grid' : 'block'}}>
            {invalidResults ? <Notice message={props.searchStatus}></Notice> : searchResultsItems}
        </div>
    )
}
