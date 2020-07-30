import * as React from 'react';
import {FunctionComponent} from 'react';
import {FigureColor} from '../domain';
import './colorSelector.scss';

interface ColorSelectorProps {
    value: FigureColor;
    onChange: (value: FigureColor) => void;
}

export const ColorSelector: FunctionComponent<ColorSelectorProps> = ({value, onChange}) => {
    return (
        <select
            name="color"
            id="color"
            value={value}
            className='color-selector'
            onChange={({target}) => onChange(target.value as FigureColor)}
        >
            <option value="white">white</option>
            <option value="black">black</option>
        </select>
    )
};
