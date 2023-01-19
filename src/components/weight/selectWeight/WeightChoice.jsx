import React from 'react';

const WeightChoice = ({mg, g, kg, t}) => {
    return (
        <div className="convert-values">
            <div className="convert-item">Миллиграммы: {mg}</div>
            <div className="convert-item">Граммы: {g}</div>
            <div className="convert-item">Килограммы: {kg}</div>
            <div className="convert-item">Тонны: {t}</div>
        </div>
    );
};

export default WeightChoice;