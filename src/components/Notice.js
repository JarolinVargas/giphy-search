import React from 'react';
import './Notice.scss';

export default function Notice(props) {
    return (
        <div className="notice">
            {props.message}
        </div>
    )
}
