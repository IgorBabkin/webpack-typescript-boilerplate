import {createEpicMiddleware} from 'redux-observable';
import {AnyAction, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {rootReducer, RootState} from '../slices/rootReducer';
import {Dependencies} from './storeTypes';
import {rootEpic} from '../epics/rootEpic';

export function createStore(dependencies: Dependencies) {
    const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, RootState, Dependencies>({
        dependencies
    });

    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: [...getDefaultMiddleware(), epicMiddleware],
    });

    epicMiddleware.run(rootEpic);

    return store;
}
