import './app.scss';
import * as React from 'react';
import {render} from 'react-dom';
import {Board} from './components/Board';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

render(
    <DndProvider backend={HTML5Backend}>
        <div className="app">
            <Board figures={{
                'A1': {type: 'rook', color: 'white'},
                'B1': {type: 'knight', color: 'white'},
                'C1': {type: 'bishop', color: 'white'},
                'D1': {type: 'king', color: 'white'},
                'E1': {type: 'queen', color: 'white'},
                'F1': {type: 'bishop', color: 'white'},
                'G1': {type: 'knight', color: 'white'},
                'H1': {type: 'rook', color: 'white'},
                'A2': {type: 'pawn', color: 'white'},
                'B2': {type: 'pawn', color: 'white'},
                'C2': {type: 'pawn', color: 'white'},
                'D2': {type: 'pawn', color: 'white'},
                'E2': {type: 'pawn', color: 'white'},
                'F2': {type: 'pawn', color: 'white'},
                'G2': {type: 'pawn', color: 'white'},
                'H2': {type: 'pawn', color: 'white'},

                'A8': {type: 'rook', color: 'black'},
                'B8': {type: 'knight', color: 'black'},
                'C8': {type: 'bishop', color: 'black'},
                'D8': {type: 'king', color: 'black'},
                'E8': {type: 'queen', color: 'black'},
                'F8': {type: 'bishop', color: 'black'},
                'G8': {type: 'knight', color: 'black'},
                'H8': {type: 'rook', color: 'black'},
                'A7': {type: 'pawn', color: 'black'},
                'B7': {type: 'pawn', color: 'black'},
                'C7': {type: 'pawn', color: 'black'},
                'D7': {type: 'pawn', color: 'black'},
                'E7': {type: 'pawn', color: 'black'},
                'F7': {type: 'pawn', color: 'black'},
                'G7': {type: 'pawn', color: 'black'},
                'H7': {type: 'pawn', color: 'black'},
            }}/>
        </div>
    </DndProvider>,
    document.getElementById('root'),
)

if (module.hot) {
    module.hot.accept();
}
