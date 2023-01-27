import React from 'react';
import "../../../UI/input.css"

const RangeChoice = ({mm, sm, m, km}) => {
    return (
        <div className="convert-values convert-data">
            <div className="convert-item">Миллиметры: {mm}</div>
            <div className="convert-item">Сантиметры: {sm}</div>
            <div className="convert-item">Метры: {m}</div>
            <div className="convert-item">Километры: {km}</div>
        </div>
    );
};

export default RangeChoice;