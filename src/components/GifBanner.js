import React from 'react';
import './GifBanner.scss';

export default function GifBanner(props) {
    return (
        <div className="gif-banner">
            <img src={props.gifURL} alt={'sdf'}/>
        </div>
    )
}
