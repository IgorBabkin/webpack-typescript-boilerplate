import React, {FunctionComponent} from 'react';
import cs from 'classnames';
import './tile.scss';
import {useItemDrop} from '../dnd';

interface TileProps {
    black: boolean;
    position: string;
}

export const Tile: FunctionComponent<TileProps> = ({children, black, position}) => {
    const [{isOver}, drop] = useItemDrop(position);
    return (
        <div
            ref={drop}
            className={cs('board-tile', {'board-tile--odd': black, 'board-tile--highlight': isOver})}
        >
            {children}
        </div>
    );
}
