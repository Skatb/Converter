import React from 'react';
import './range.css'

const range = () => {
  
    return (
        <div className="range">
            <input type="text" maxlength="12" class="data"/>
            <select data-input-data="" class="data-select">
                <option value="mm" selected>Миллиметры</option>
                <option value="cm">Сантиметры</option>
                <option value="m">Метры</option>
                <option value="km">Километры</option>
            </select>
            <div class="convert-values">
                <div class="convert-item">Миллиметры: 0</div>
                <div class="convert-item">Сантиметры: 0</div>
                <div class="convert-item">Метры: 0</div>
                <div class="convert-item">Километры: 0</div>
            </div>
        </div>
    );
};

export default range;