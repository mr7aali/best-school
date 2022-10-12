import React from 'react';
import './Total.css'
const Total = ({ name, total }) => {
    return (
        <div className='total-div'>
            <h1>{name} has {total} question</h1>
         
        </div>
    );
};

export default Total;