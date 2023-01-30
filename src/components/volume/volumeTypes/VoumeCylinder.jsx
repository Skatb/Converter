import React from 'react';
import { useState } from 'react';

const VoumeCylinder = () => {
    const [height, setHeight] = useState('10')

    const [radius, setRadius] = useState('10')
    return (
        <div>
            <input
                type="text"
                maxLength="12"
                className="data input-style"
                onChange={event => setHeight(event.target.value)}
                value={height}
            />
            <input
                type="text"
                maxLength="12"
                className="data input-style"
                onChange={event => setRadius(event.target.value)}
                value={radius}
            />

            <div className='select-text'>{(3.1415*(radius*radius)*height).toFixed(3)}</div>
        </div>
    );
};

export default VoumeCylinder;