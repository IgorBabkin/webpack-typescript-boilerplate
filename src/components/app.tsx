import * as React from 'react';
import {FunctionComponent} from 'react';
import {Board} from './board/Board';
import './app.scss';
import {useDispatch} from 'react-redux';
import {updatePlayer, usePlayerColorSelector} from 'slices/player/playerSlice';
import {newMove} from '../epics/connection/connectionActions';
import {ColorSelector} from './colorSelector/ColorSelector';
import {useFiguresSelector} from '../slices/figures/figuresSlice';

export const App: FunctionComponent = () => {
    const color = usePlayerColorSelector();
    const dispatch = useDispatch();
    const figures = useFiguresSelector();
    return (
        <div className="app">
            <div className="app__color-selector">
                <ColorSelector
                    value={color}
                    onChange={(value) => dispatch(updatePlayer({color: value}))}
                />
            </div>
            <Board
                color={color}
                figures={figures}
                onMove={(move) => dispatch(newMove(move))}
            />
        </div>
    );
}
