import React, {FunctionComponent} from 'react';
import cs from 'classnames';
import './tile.scss';
import {useDrop} from 'react-dnd';
import {FigureDragObject, FigureDropResult} from '../figureDND';

interface TileProps {
    black: boolean;
    position: string;
}

export type FigureCollectedProps = {
    isOver: boolean;
}

export const Tile: FunctionComponent<TileProps> = ({children, black, position}) => {
    const [{isOver}, drop] = useDrop<FigureDragObject, FigureDropResult, FigureCollectedProps>({
        accept: 'any',
        drop: (item) => {
            console.log('drop', item, position);
            return {position};
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    });
    return (
        <div
            ref={drop}
            className={cs('board-tile', {'board-tile--odd': black, 'board-tile--highlight': isOver})}
        >
            {children}
        </div>
    );
}
