import {createSlice, SliceCaseReducers} from '@reduxjs/toolkit';
import {PlayerState} from '../../components/store';

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