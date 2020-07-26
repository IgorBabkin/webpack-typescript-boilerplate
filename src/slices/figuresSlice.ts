import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {FigureState} from '../components/store';

export const figuresSlice = createSlice<FigureState, SliceCaseReducers<FigureState>>({
    name: 'figures',
    initialState: [],
    reducers: {
        update: (state, {payload}) => payload,
        move: (state, action: PayloadAction<{ from: string, to: string }>) => {
            const {from, to} = action.payload;
            return state.map((item) => {
                if (item.position === from) {
                    return {
                        ...item,
                        position: to,
                    };
                }
                return item;
            })
        }
    },
});