import React from 'react';
import {motion} from 'framer-motion';
import './SearchInput.scss';

const variants = {
    normal: {
        height: '100%'
    },
    showResults: {
        height: 70,
        color: 'rgb(255, 255, 255, 1)',
        borderBottom: 'solid 1px rgb(255, 255, 255, 0.3)',
        textAlign: 'left'
    }
}

export default function SearchInput(props) {
    return (
        <motion.input id="search-input" type="text" onFocus={props.showResultsHandle} placeholder="Search all the GIFs and stickers" animate={!props.showResults ? 'normal' : 'showResults'} variants={variants}/>
    )
}
