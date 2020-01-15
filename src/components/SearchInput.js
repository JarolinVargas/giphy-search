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
    // search and show results when 'enter' key is pressed
    const keyPress = (event) => {
        if(event.key === 'Enter') {
            props.search(event.currentTarget.value);
            props.showResultsHandle();
        }
    }

    return (
        <motion.input id="search-input" type="text" onKeyPress={keyPress} placeholder="Search all the GIFs" initial="initial" animate={!props.showResults ? 'normal' : 'showResults'} variants={variants}/>
    )
}
