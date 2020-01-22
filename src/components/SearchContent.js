import React from 'react';
import {motion} from 'framer-motion';
import './SearchContent.scss';
import SearchInput from './SearchInput';
import SearchOutput from './SearchOutput';

const variants = {
    normal: {
        width: 740,
        height: '100%',
        borderRadius: 60,
        backgroundColor: 'rgb(255, 255, 255)',
        paddingLeft: 30,
        paddingRight: 30
    },
    showResults: {
        width: '100vw',
        height: 'calc(100vh - 100px)',
        borderRadius: 0,
        backgroundColor: 'rgb(17, 17, 17)'
    }
}

export default function SearchContent(props) {
    return (
        <motion.main className="search-content-container" animate={!props.showResults ? 'normal' : 'showResults'} variants={variants}>
            <SearchInput search={props.search} showResults={props.showResults} showResultsHandle={props.showResultsHandle}></SearchInput>
            <SearchOutput searchResults={props.searchResults} showResults={props.showResults} searchStatus={props.searchStatus}></SearchOutput>
        </motion.main>
    )
}
