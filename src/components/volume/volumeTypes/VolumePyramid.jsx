import React from 'react';
import { useState } from 'react';

const VolumePyramid = () => {
    const [volume, setVolume] = useState('10')

    const [height, setHeight] = useState('10')
    return (
        <div>
            <input
                type="text"
                maxLength="12"
                className="data input-style"
                onChange={event => setVolume(event.target.value)}
                value={volume}
            />
            <input
                type="text"
                maxLength="12"
                className="data input-style"
                onChange={event => setHeight(event.target.value)}
                value={height}
            />

            <div className='select-text'>{(1/3*volume*height).toFixed(3)}</div>
        </div>
    );
};

export default VolumePyramid;