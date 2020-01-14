import React from 'react';
import {motion} from 'framer-motion';
import './SearchContent.scss';
import SearchInput from './SearchInput';
import SearchOutput from './SearchOutput';

const variants = {
    normal: {
        width: 740,
        borderRadius: 60,
        backgroundColor: 'rgb(255, 255, 255)',
        paddingLeft: 30,
        paddingRight: 30
    },
    shrink: { // rename
        width: '100vw',
        borderRadius: 0,
        backgroundColor: 'rgb(17, 17, 17)'
    }
}

export default function SearchContent(props) {
    return (
        <motion.main id="search-content-container" animate={!props.showResults ? 'normal' : 'shrink'} variants={variants}>
            <SearchInput showResults={props.showResults} showResultsHandle={props.showResultsHandle}></SearchInput>
        </motion.main>
    )
}
