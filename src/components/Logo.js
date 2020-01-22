import React from 'react';
import {motion} from 'framer-motion';
import './Logo.scss';
import logoSVG from '../assets/giphy-logo.svg';

const variants = {
    normal: {height: 61},
    shrink: {
        height: 30, 
        marginBottom: 0,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        margin: 'auto'
    }
}

export default function Logo(props) {
    return (
        <motion.img className="logo" src={logoSVG} alt="Giphy" animate={!props.showResults ? 'normal' : 'shrink'} variants={variants}/>
    )
}
