import {createSlice, SliceCaseReducers} from '@reduxjs/toolkit';
import {PlayerState} from '../../store/storeTypes';
import {shallowEqual, useSelector} from 'react-redux';
import {RootState} from '../rootReducer';
import {FigureColor} from '../../domain/domain';

export const playerSlice = createSlice<PlayerState, SliceCaseReducers<PlayerState>>({
    name: 'player',
    initialState: {color: 'white'},
    reducers: {
        updatePlayer: (state, {payload}) => {
            return {
                ...state,
                ...payload,
            }
        },
    },
});

export const {updatePlayer} = playerSlice.actions;
export const usePlayerColorSelector = () => {
    return useSelector<RootState, FigureColor>(s => s.player.color, shallowEqual);
}
