import {combineReducers} from '@reduxjs/toolkit';
import {figuresSlice} from './figures/figuresSlice';
import {playerSlice} from './player/playerSlice';

export const rootReducer = combineReducers({
    figures: figuresSlice.reducer,
    player: playerSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;