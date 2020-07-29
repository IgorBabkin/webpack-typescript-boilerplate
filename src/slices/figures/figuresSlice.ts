import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {FigureState} from '../../components/store';
import {GameMove} from '../../epics/connection/connectionActions';
import {figureInitialState} from './figureInitialState';

export const figuresSlice = createSlice<FigureState, SliceCaseReducers<FigureState>>({
    name: 'figures',
    initialState: {items: figureInitialState, lastMoveTime: 0, lastMoveColor: 'white'},
    reducers: {
        makeMove: (state, action: PayloadAction<GameMove>) => {
            const {from, to, color, time} = action.payload;
            return {
                ...state,
                items: state.items.map((item) => {
                    return item.position === from
                        ? {...item, position: to}
                        : item;
                }),
                lastMoveColor: color,
                lastMoveTime: time,
            }
        }
    },
});

export const {makeMove} = figuresSlice.actions;
