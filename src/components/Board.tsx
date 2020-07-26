import React, {FunctionComponent, useMemo} from 'react';
import './board.scss';
import {repeat} from '../utils';
import {FigureColor, FigureType} from './domain';
import {Dictionary} from './types';
import {Figure} from './figure/Figure';
import {Tile} from './tile/Tile';
import {shallowEqual, useDispatch, useSelector, useStore} from 'react-redux';
import {figuresSlice} from '../slices/figuresSlice';
import {AppState} from './store';

const LETTER_A = 65;
const BOARD_SIZE = 8;
const isTileOdd = (index: number) => !!(Math.floor(index / BOARD_SIZE) % 2);
export const numberToPosition = (i: number) => [
    String.fromCharCode(LETTER_A + i % BOARD_SIZE),
    BOARD_SIZE - Math.floor(i / BOARD_SIZE),
];
const POSITIONS = repeat(BOARD_SIZE * BOARD_SIZE).map((key, i) => numberToPosition(i).join(''));

interface FigureItem {
    color: FigureColor,
    type: FigureType;
}

interface BoardProps {
    // figures: Dictionary<FigureItem>;
}

export const Board: FunctionComponent<BoardProps> = () => {
    const dispatch = useDispatch();
    const figures = useSelector<AppState, Dictionary<FigureItem>>(state => {
        return state.figures.reduce((acc, item) => {
            acc[item.position] = item;
            return acc;
        }, {})
    }, shallowEqual);
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
                {POSITIONS.map((position, i) => (
                    <Tile key={position} position={position} black={isTileOdd(i)}>
                        {figures[position] && (
                            <Figure
                                {...figures[position]}
                                onDrop={(targetPosition) => dispatch(figuresSlice.actions.move({
                                    from: position,
                                    to: targetPosition,
                                }))}
                            />
                        )}
                    </Tile>
                ))}
            </div>
        </div>
    );
}