import React from 'react';
import './Logo.scss';
import logoSVG from '../assets/giphy-logo.svg';

export default function Logo() {
    return (
        <img id="logo" src={logoSVG} alt="Giphy" width="300"/>
    )
}
