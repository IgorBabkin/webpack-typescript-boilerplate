import React, {FunctionComponent} from 'react';
import './board.scss';
import cn from 'classnames';
import {FigureColor, FigureType} from '../domain';
import {GameMove} from '../../epics/connection/connectionActions';
import {Tile} from '../tile/Tile';
import {Figure} from '../figure/Figure';
import {Dictionary} from '../types';
import {isTileOdd, LETTERS, NUMBERS, POSITIONS} from './boardHelpers';

interface BoardProps {
    color: FigureColor;
    figures: Dictionary<{
        color: FigureColor,
        type: FigureType;
    }>;
    onMove: (move: GameMove) => void;
}

export const Board: FunctionComponent<BoardProps> = ({figures, color, onMove}) => {
    return (
        <div className='board'>
            <div className='board-letters board__letters board__letters--top'>
                {LETTERS.map((i,) => (<div key={i}>{i}</div>))}
            </div>
            <div className='board-letters board__letters board__letters--bottom'>
                {LETTERS.map((i,) => (<div key={i}>{i}</div>))}
            </div>
            <div
                className={cn('board-numbers board__numbers board__numbers--left', {'board-numbers--reverted': color === 'white'})}
            >
                {NUMBERS.map((i) => (<div key={i}>{i}</div>))}
            </div>
            <div
                className={cn('board-numbers board__numbers board__numbers--right', {'board-numbers--reverted': color === 'white'})}
            >
                {NUMBERS.map((i) => (<div key={i}>{i}</div>))}
            </div>
            <div className='board-grid board__grid'>
                {POSITIONS[color].map((position, i) => (
                    <Tile key={position} position={position} black={isTileOdd(i)}>
                        {figures[position] && (
                            <Figure
                                {...figures[position]}
                                onDrop={(targetPosition) => onMove({
                                    from: position,
                                    to: targetPosition,
                                    color: 'white',
                                    createdAt: Date.now(),
                                })}
                            />
                        )}
                    </Tile>
                ))}
            </div>
        </div>
    );
}