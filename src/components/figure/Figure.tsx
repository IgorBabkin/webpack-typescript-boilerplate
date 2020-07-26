import React, {FunctionComponent} from 'react';
import {FigureColor, FigureType} from '../domain';
import {useDrag} from 'react-dnd';
import cs from 'classnames';
import './figure.scss';
import {CHESS_ICONS} from './icons';

interface FigureProps {
    type: FigureType;
    color: FigureColor;
    pos: string;
}

function getChessIcon(type: FigureType, color: FigureColor): string {
    const icon = CHESS_ICONS[color][type];
    if (!icon) {
        throw new Error(`Wrong arguments: ${type} ${color}`);
    }

    return icon;
}

export const Figure: FunctionComponent<FigureProps> = ({type, color, pos}) => {
    const [{isDragging}, drag] = useDrag({
        item: {type: 'any', pos},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    return (
        <div
            ref={drag}
            className={cs('board-figure', {'board-figure--dragging': isDragging})}
            dangerouslySetInnerHTML={{__html: getChessIcon(type, color)}}
        />
    )
}