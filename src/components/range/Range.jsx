import React from 'react';
import { useState } from 'react';
import './range.css'
import RangeMm from './selectRange/RangeMm';
import RangeSm from './selectRange/RangeSm';

const Range = () => {
    const [inputRange, setInputRange] = useState('')

    const [selectRange, setRange] = useState('')

    function choiceSelect () {
        if (selectRange === 'cm') {
            setRange(selectRange)
        }
    }
    return (
        <div className="range">
            <input
                type="number"
                maxLength="12"
                className="data"
                onChange={event => setInputRange(event.target.value)}
                value={inputRange}
            />
            <select className="data-select" value={selectRange} onChange={event => setRange(event.target.value)}>
                <option value="mm">Миллиметры</option>
                <option value="cm">Сантиметры</option>
                <option value="m">Метры</option>
                <option value="km">Километры</option>
            </select>
            <div className="convert-values" >
                <RangeSm mm={inputRange*1} sm={inputRange*0.1} m={inputRange*0.01} km={inputRange*0.0001}/>
            </div>

        </div>
    );
};

export default Range;