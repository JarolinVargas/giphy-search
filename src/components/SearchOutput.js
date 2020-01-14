import React from 'react';
import './SearchOutput.scss';
import GifBanner from './GifBanner';

export default function SearchOutput(props) {
    let searchResultsItems = [];
    for( let i = 0; i < props.searchResults.length; i++ ) {
        const item = props.searchResults[i];
        console.log(item)
        searchResultsItems.push(
            <div key={i}><GifBanner gifURL={item.images.downsized_medium.url} url={item.url}/></div>
        );
    }

    return (
        <div id="search-output-container" style={!props.showResults ? {display:'none'} : {display:'grid'}}>
            {searchResultsItems}
        </div>
    )
}
