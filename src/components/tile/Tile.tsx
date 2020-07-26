import React, {FunctionComponent} from 'react';
import cs from 'classnames';
import './tile.scss';
import {useDrop} from 'react-dnd';

interface TileProps {
    black: boolean;
    pos: string;
}

export const Tile: FunctionComponent<TileProps> = ({children, black, pos}) => {
    const [{isOver}, drop] = useDrop({
        accept: 'any',
        drop: (item) => console.log('drop', item, pos),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })
    return (
        <div
            ref={drop}
            className={cs('board-tile', {'board-tile--odd': black, 'board-tile--highlight': isOver})}
        >
            {children}
        </div>
    );
}
