import React from 'react';
import { useState } from 'react';
import VolumeCube from './volumeTypes/VolumeCube'
import VolumeSphere from './volumeTypes/VolumeSphere';
import VolumePyramid from './volumeTypes/VolumePyramid';
import VoumeCylinder from './volumeTypes/VoumeCylinder';

const Volume = () => {
    const [volumeSelect, setVolumeSelect] = useState('0')

    function volumeRender () {
        if (volumeSelect === 'cube') {
            return <VolumeCube />
        } else if (volumeSelect === 'sphere') {
            return <VolumeSphere />
        } else if (volumeSelect === 'pyramid') {
            return <VolumePyramid />
        } else if (volumeSelect === 'cylinder') {
            return <VoumeCylinder />
        }
    }

    return (
        <div className="volume-body">
            <div className="volume calc-section">
                <select className="volume-select select-text" value={volumeSelect} onChange={event => setVolumeSelect(event.target.value)}>
                    <option value="cube">Объем куба</option>
                    <option value="sphere">Объем сферы</option>
                    <option value="pyramid">Объем пирамиды</option>
                    <option value="cylinder">Объем цилиндра</option>
                </select>
                <div className="volume-formula">
                    {volumeRender()}
                </div>
            </div>

        </div>
    );
};

export default Volume;