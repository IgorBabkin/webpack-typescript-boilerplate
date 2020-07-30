import {createAction} from '@reduxjs/toolkit';
import {FigureColor} from '../../components/domain';

export type GameMove = {
    from: string;
    to: string;
    color: FigureColor;
    createdAt: number;
}

export const start = createAction('start');
export const connected = createAction('connected');
export const update = createAction('update');
export const newMoves = createAction<GameMove[]>('newMoves');
export const newMove = createAction<GameMove>('newMove');