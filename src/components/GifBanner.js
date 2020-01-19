import React, {useState} from 'react';
import './GifBanner.scss';

export default function GifBanner(props) {
    const [imgLoaded, imgLoading] = useState(false);

    return (
        <div className={`gif-banner${!imgLoaded ? ' img-loading' : ''}`}>
            <img src={props.gifURL} alt={props.alt} onLoad={() => imgLoading(true)}/>
        </div>
    )
}
