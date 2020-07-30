import {createAction} from '@reduxjs/toolkit';
import {GameMove} from '../domain/domain';

export const start = createAction('start');
export const connected = createAction('connected');
export const update = createAction('update');
export const newMoves = createAction<GameMove[]>('newMoves');
export const newMove = createAction<GameMove>('newMove');
export const resetGame = createAction('resetGame');