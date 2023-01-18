import React from 'react';
import './style.css'

const Subtitle = ({ children }) => {
    return (
        <h4 className='subtitle'>
            {children}
        </h4>
    );
}

export default Subtitle;
