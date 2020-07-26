import './app.scss';
import * as React from 'react';
import {render} from 'react-dom';
import {Board} from './components/Board';
import {DndProvider} from 'react-dnd';
import {Provider} from 'react-redux';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {AppState} from './components/store';
import {figuresSlice} from './slices/figuresSlice';
import {figureInitialState} from './slices/figureInitialState';


const rootReducer = combineReducers<AppState>({
    figures: figuresSlice.reducer,
});
const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

store.dispatch(figuresSlice.actions.update(figureInitialState));

render(
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
            <div className="app">
                <Board />
            </div>
        </DndProvider>
    </Provider>,
    document.getElementById('root'),
)

if (module.hot) {
    module.hot.accept();
}
