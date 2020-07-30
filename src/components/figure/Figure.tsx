import React, {FunctionComponent} from 'react';
import {FigureColor, FigureType} from '../../domain/domain';
import cn from 'classnames';
import './figure.scss';
import {getChessIcon} from './icons';
import {useItemDrag} from '../dnd';

interface FigureProps {
    type: FigureType;
    color: FigureColor;
    onDrop: (target: string) => void;
}

export const Figure: FunctionComponent<FigureProps> = ({type, color, onDrop}) => {
    const [{isDragging}, drag] = useItemDrag(onDrop);
    return (
        <div
            ref={drag}
            className={cn('board-figure', {'board-figure--dragging': isDragging})}
            dangerouslySetInnerHTML={{__html: getChessIcon(type, color)}}
        />
    )
}