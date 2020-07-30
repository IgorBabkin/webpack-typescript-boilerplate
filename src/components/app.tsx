import * as React from 'react';
import {FunctionComponent} from 'react';
import {Board} from './board/Board';
import './app.scss';
import {useDispatch} from 'react-redux';
import {updatePlayer, usePlayerColorSelector} from 'slices/player/playerSlice';
import {ColorSelector} from './colorSelector/ColorSelector';
import {useFiguresSelector} from '../slices/figures/figuresSlice';
import {newMove, resetGame} from '../epics/epicActions';
import cn from 'classnames';

export const App: FunctionComponent = () => {
    const color = usePlayerColorSelector();
    const dispatch = useDispatch();
    const figures = useFiguresSelector();
    return (
        <div className="app">
            <div className="app__controls">
                <ColorSelector
                    className={cn('app__control')}
                    value={color}
                    onChange={(value) => dispatch(updatePlayer({color: value}))}
                />
                <button className='app__control' onClick={() => dispatch(resetGame())}>Reset</button>
            </div>
            <Board
                color={color}
                figures={figures}
                onMove={(move) => dispatch(newMove(move))}
            />
        </div>
    );
}
