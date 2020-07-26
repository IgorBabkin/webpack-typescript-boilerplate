import React, {FunctionComponent} from 'react';
import './board.scss';
import cs from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const repeat = (n: number) => Object.keys(Array.from(new Array(n)))

export const Board: FunctionComponent = ({}) => {
    return (
        <div className='board'>
            <div className='board-letters board__letters'>
                {repeat(8).map((key, i) => (
                    <div key={key}>{String.fromCharCode(65 + i)}</div>
                ))}
            </div>
            <div className="board-numbers board__numbers">
                {repeat(8).map((key, i) => (
                    <div key={key}>{i + 1}</div>
                ))}
            </div>
            <div className='board-grid board__grid'>
                {repeat(64).map((key, i) => (
                    <div
                        key={key}
                        className={cs('board-tile', {'board-tile--odd': Math.floor(i / 8) % 2})}
                    >
                        <FontAwesomeIcon icon={["fas", "chess-bishop"]} />
                    </div>
                ))}
            </div>
        </div>
    );
}