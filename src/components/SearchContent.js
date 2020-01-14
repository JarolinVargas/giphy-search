import React from 'react';
import './SearchContent.scss';
import SearchInput from './SearchInput';
import SearchOutput from './SearchOutput';

export default function SearchContent() {
    return (
        <main id="search-content-container">
            <SearchInput></SearchInput>
            <SearchOutput></SearchOutput>
        </main>
    )
}
