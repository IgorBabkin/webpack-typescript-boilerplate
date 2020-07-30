import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {AnyAction, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {rootReducer, RootState} from '../slices/rootReducer';
import {Dependencies} from '../components/store';
import {connectionEpic, makeMoveEpic, movesEpic} from '../epics/connection/connectionEpic';

export function createStore(dependencies: Dependencies) {
    const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, RootState, Dependencies>({
        dependencies
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

    return store;
}
