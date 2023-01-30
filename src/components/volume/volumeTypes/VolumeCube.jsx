import React from 'react';
import { useState } from 'react';

const VolumeCude = () => {
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

            <div className='select-text'>{volume * volume * volume}</div>
        </div>
    );
};

export default VolumeCude;