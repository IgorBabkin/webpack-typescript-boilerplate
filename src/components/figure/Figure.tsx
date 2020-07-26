import React, {FunctionComponent} from 'react';
import {FigureColor, FigureType} from '../domain';
import {useDrag} from 'react-dnd';
import cs from 'classnames';
import './figure.scss';
import {CHESS_ICONS} from './icons';
import {FigureDragObject, FigureDropResult} from '../figureDND';

interface FigureProps {
    type: FigureType;
    color: FigureColor;
    onDrop: (target: string) => void;
}

function getChessIcon(type: FigureType, color: FigureColor): string {
    const icon = CHESS_ICONS[color][type];
    if (!icon) {
        throw new Error(`Wrong arguments: ${type} ${color}`);
    }

    return icon;
}

export type FigureCollectedProps = {
    isDragging: boolean;
}

export const Figure: FunctionComponent<FigureProps> = ({type, color, onDrop}) => {
    const [{isDragging}, drag] = useDrag<FigureDragObject, FigureDropResult, FigureCollectedProps>({
        item: {type: 'any'},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        end: (dragObject, monitor) => {
            onDrop(monitor.getDropResult().position);
        }
    });
    return (
        <div
            ref={drag}
            className={cs('board-figure', {'board-figure--dragging': isDragging})}
            dangerouslySetInnerHTML={{__html: getChessIcon(type, color)}}
        />
    )
}