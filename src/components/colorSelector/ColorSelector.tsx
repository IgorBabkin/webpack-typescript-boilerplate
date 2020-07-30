import * as React from 'react';
import {FunctionComponent} from 'react';
import {FigureColor} from '../../domain/domain';
import './colorSelector.scss';
import cn from 'classnames';

interface ColorSelectorProps {
    value: FigureColor;
    onChange: (value: FigureColor) => void;
    className?: string;
}

export const ColorSelector: FunctionComponent<ColorSelectorProps> = ({value, onChange, className}) => {
    return (
        <select
            name="color"
            id="color"
            value={value}
            className={cn('color-selector', className)}
            onChange={({target}) => onChange(target.value as FigureColor)}
        >
            <option value="white">white</option>
            <option value="black">black</option>
        </select>
    )
};
