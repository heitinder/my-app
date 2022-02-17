import React from 'react';
import './Textfield.css';

const Textfield = () => {
    const handleChange = (event) => {
        console.log(event.target.value);
    }
    return <>
        <input type='text' onChange={handleChange}></input>
    </>
}

export default Textfield;