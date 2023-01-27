import React from 'react';
import { useState } from 'react';
import '../../UI/input.css'
import RangeChoice from './selectRange/RangeChoice';

const Range = () => {
    const [inputRange, setInputRange] = useState('1')

    const [selectRange, setRange] = useState('mm')

    const choiceRender = () => {
        if (selectRange === 'mm') {
            return <RangeChoice mm={(inputRange * 1).toFixed(6)*1} sm={(inputRange * 0.1).toFixed(6)*1} m={(inputRange * 0.001).toFixed(6)*1} km={(inputRange * 0.000001).toFixed(10)*1} />
        } else if (selectRange === 'cm'){
            return <RangeChoice mm={(inputRange * 0.1).toFixed(6)*1} sm={(inputRange * 1).toFixed(6)*1} m={(inputRange * 0.01).toFixed(6)*1} km={(inputRange * 0.00001).toFixed(6)*1} />
        } else if (selectRange === 'm'){
            return <RangeChoice mm={(inputRange * 1000).toFixed(6)*1} sm={(inputRange * 100).toFixed(6)*1} m={(inputRange * 1).toFixed(6)*1} km={(inputRange * 0.001).toFixed(6)*1} />
        } else if (selectRange === 'km'){
            return <RangeChoice mm={(inputRange * 1000000).toFixed(6)*1} sm={(inputRange * 100000).toFixed(6)*1} m={(inputRange * 1000).toFixed(6)*1} km={(inputRange * 1).toFixed(6)*1} />
        }
    }
        return (
            <div className="range calc-section">
                <input
                    type="number"
                    maxLength="12"
                    className="data input-style"
                    onChange={event => setInputRange(event.target.value)}
                    value={inputRange}
                />
                <select className="data-select select-text"  value={selectRange} onChange={event => setRange(event.target.value)}>
                    <option value="mm" >Миллиметры</option>
                    <option value="cm">Сантиметры</option>
                    <option value="m">Метры</option>
                    <option value="km">Километры</option>
                </select>
                    {choiceRender()}
            </div>
        );
    };

export default Range;