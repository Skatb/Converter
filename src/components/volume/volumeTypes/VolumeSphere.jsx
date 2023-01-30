import React from 'react';
import { useState } from 'react';

const VolumeSphere = () => {
    const [volume, setVolume] = useState('10')
    return (
        <div>
            <input
                type="text"
                maxLength="12"
                className="data input-style"
                onChange={event => setVolume(event.target.value)}
                value={volume}
            />
            <div className='select-text'>{((4/3)*3.1415*(volume*volume*volume)).toFixed(4)}</div>
        </div>
    );
};

export default VolumeSphere;