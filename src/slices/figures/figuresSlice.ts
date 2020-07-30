import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {FigureState} from '../../components/store';
import {GameMove} from '../../epics/connection/connectionActions';
import {figureInitialState} from './figureInitialState';
import {shallowEqual, useSelector} from 'react-redux';
import {RootState} from '../rootReducer';
import {Dictionary} from '../../components/types';
import {FigureItem} from '../../components/domain';

export const figuresSlice = createSlice<FigureState, SliceCaseReducers<FigureState>>({
    name: 'figures',
    initialState: {items: figureInitialState, lastMoveTime: 0, lastMoveColor: 'white'},
    reducers: {
        makeMove: (state, action: PayloadAction<GameMove>) => {
            const {from, to, color, createdAt} = action.payload;
            return {
                ...state,
                items: state.items.map((item) => {
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

export const {makeMove} = figuresSlice.actions;

export const useFiguresSelector = () => {
    return useSelector<RootState, Dictionary<FigureItem>>(state => {
        return state.figures.items.reduce((acc, item) => {
            acc[item.position] = item;
            return acc;
        }, {})
    }, shallowEqual);
};
