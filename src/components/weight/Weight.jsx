import React from 'react';
import { useState } from 'react';
import WeightChoice from './selectWeight/WeightChoice';
import '../../UI/input.css'

const Weight = () => {
    const [inputWeight, setInputWeight] = useState('0')

    const [selectWeight, setWeight] = useState('mg')

    const weightRender = () => {
        if (selectWeight === 'mg') {
            return <WeightChoice mg={inputWeight * 1} g={inputWeight * 1000} kg={inputWeight * 0.000001} t={inputWeight * 0.000000001} />
        } else if (selectWeight === 'g'){
            return <WeightChoice mg={inputWeight * 1000} g={inputWeight * 1} kg={inputWeight * 0.001} t={inputWeight * 0.000001} />
        } else if (selectWeight === 'kg'){
            return <WeightChoice mg={inputWeight * 1000000} g={inputWeight * 1000} kg={inputWeight * 1} t={inputWeight * 0.001} />
        } else if (selectWeight === 't'){
            return <WeightChoice mg={inputWeight * 1000000000} g={inputWeight * 1000000} kg={inputWeight * 1000} t={inputWeight * 1} />
        }
    }
        return (
            <div className="weight calc-section">
                <input
                    type="number data-input"
                    maxLength="12"
                    className="data input-style" 
                    onChange={event => setInputWeight(event.target.value)}
                    value={inputWeight}
                />
                <select className="data-select select-text"  value={selectWeight} onChange={event => setWeight(event.target.value)}>
                    <option value="mg" >Миллиграммы</option>
                    <option value="g">Граммы</option>
                    <option value="kg">Килограммы</option>
                    <option value="t">Тонны</option>
                </select>
                    {weightRender()}
            </div>
        );
    };

export default Weight;