import './app.scss';
import * as React from 'react';
import {render} from 'react-dom';
import {Board} from './components/Board';
import {DndProvider} from 'react-dnd';
import {Provider} from 'react-redux';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {AnyAction, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {Dependencies} from './components/store';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {Connection} from './services/Connection';
import {start} from './epics/connection/connectionActions';
import {connectionEpic, makeMoveEpic, movesEpic} from './epics/connection/connectionEpic';
import {rootReducer, RootState} from './slices/rootReducer';
import {TestConnection} from './services/TestConnection';

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, RootState, Dependencies>({
    dependencies: {
        connection: new TestConnection(),
    },
});
const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [...getDefaultMiddleware(), epicMiddleware],
});
epicMiddleware.run(combineEpics(
    connectionEpic,
    movesEpic,
    makeMoveEpic,
));

store.dispatch(start());

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
