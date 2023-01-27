import React from 'react';
import "../../../UI/input.css"

const WeightChoice = ({mg, g, kg, t}) => {
    return (
        <div className="convert-values convert-data">
            <div className="convert-item">Миллиграммы: {mg}</div>
            <div className="convert-item">Граммы: {g}</div>
            <div className="convert-item">Килограммы: {kg}</div>
            <div className="convert-item">Тонны: {t}</div>
        </div>
    );
};

export default WeightChoice;