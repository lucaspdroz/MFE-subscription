import React from 'react';
import './style.css'

const Input = ({ type = "text", placeholder, value, ...props }) => {
    return (
        <input
            className='input'
            type={type}
            placeholder={placeholder}
            value={value}
            {...props}
        />
    );
}

export default Input;
