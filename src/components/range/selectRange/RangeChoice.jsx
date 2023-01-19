import React from 'react';

const RangeChoice = ({mm, sm, m, km}) => {
    return (
        <div className="convert-values">
            <div className="convert-item">Миллиметры: {mm}</div>
            <div className="convert-item">Сантиметры: {sm}</div>
            <div className="convert-item">Метры: {m}</div>
            <div className="convert-item">Километры: {km}</div>
        </div>
    );
};

export default RangeChoice;