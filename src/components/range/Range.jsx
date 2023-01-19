import React from 'react';
import { useState } from 'react';
import './range.css'
import RangeChoice from './selectRange/RangeChoice';

const Range = () => {
    const [inputRange, setInputRange] = useState('0')

    const [selectRange, setRange] = useState('mm')

    const choiceRender = () => {
        if (selectRange === 'mm') {
            return <RangeChoice mm={inputRange * 1} sm={inputRange * 0.1} m={inputRange * 0.001} km={inputRange * 0.000001} />
        } else if (selectRange === 'cm'){
            return <RangeChoice mm={inputRange * 0.1} sm={inputRange * 1} m={inputRange * 0.01} km={inputRange * 0.00001} />
        } else if (selectRange === 'm'){
            return <RangeChoice mm={inputRange * 1000} sm={inputRange * 100} m={inputRange * 1} km={inputRange * 0.001} />
        } else if (selectRange === 'km'){
            return <RangeChoice mm={inputRange * 1000000} sm={inputRange * 100000} m={inputRange * 1000} km={inputRange * 1} />
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
                <select className="data-select"  value={selectRange} onChange={event => setRange(event.target.value)}>
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