import React, {FunctionComponent} from 'react';
import './board.scss';
import cs from 'classnames';
import {repeat} from '../utils';
import {FigureColor, FigureType} from './domain';
import {Dictionary} from './types';
import {Figure} from './Figure';

const LETTER_A = 65;
const BOARD_SIZE = 8;
const isTileOdd = (index: number) => Math.floor(index / BOARD_SIZE) % 2;
const numberToPosition = (i: number) => [
    String.fromCharCode(LETTER_A + i % BOARD_SIZE),
    BOARD_SIZE - Math.floor(i / BOARD_SIZE),
];
const POSITIONS = repeat(BOARD_SIZE * BOARD_SIZE).map((key, i) => numberToPosition(i).join(''));

interface FigureItem {
    color: FigureColor,
    type: FigureType;
}

interface BoardProps {
    figures: Dictionary<FigureItem>;
}

export const Board: FunctionComponent<BoardProps> = ({figures}) => {
    return (
        <div className='board'>
            <div className='board-letters board__letters'>
                {repeat(BOARD_SIZE).map((key, i) => (
                    <div key={key}>{String.fromCharCode(LETTER_A + i)}</div>
                ))}
            </div>
            <div className="board-numbers board__numbers">
                {repeat(BOARD_SIZE).map((key, i) => (
                    <div key={key}>{i + 1}</div>
                ))}
            </div>
            <div className='board-grid board__grid'>
                {POSITIONS.map((pos, i) => (
                    <div
                        key={pos}
                        className={cs('board-tile', {'board-tile--odd': isTileOdd(i)})}
                    >
                        {figures[pos] && (
                            <Figure {...figures[pos]} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}