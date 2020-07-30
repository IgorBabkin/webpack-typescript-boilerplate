import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {FigureState} from '../../store/storeTypes';
import {figureInitialState} from './figureInitialState';
import {shallowEqual, useSelector} from 'react-redux';
import {RootState} from '../rootReducer';
import {Dictionary} from '../../utils/types';
import {FigureItem, GameMove} from '../../domain/domain';

const initialState: FigureState = {items: figureInitialState, lastMoveTime: 0, lastMoveColor: 'white'};
export const figuresSlice = createSlice<FigureState, SliceCaseReducers<FigureState>>({
    name: 'figures',
    initialState,
    reducers: {
        reset: (state) => initialState,
        makeMove: (state, action: PayloadAction<GameMove>) => {
            const {from, to, color, createdAt} = action.payload;
            return {
                ...state,
                items: state.items.filter((item) => {
                    return item.position !== to;
                }).map((item) => {
                    return item.position === from
                        ? {...item, position: to}
                        : item;
                }),
                lastMoveColor: color,
                lastMoveTime: createdAt,
            }
        }
    },
});

export const {makeMove, reset} = figuresSlice.actions;

export const useFiguresSelector = () => {
    return useSelector<RootState, Dictionary<FigureItem>>(state => {
        return state.figures.items.reduce((acc, item) => {
            acc[item.position] = item;
            return acc;
        }, {})
    }, shallowEqual);
};
