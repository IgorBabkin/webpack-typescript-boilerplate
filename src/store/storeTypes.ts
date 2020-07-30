import {FigureColor, FigureItem} from '../domain/domain';
import {Epic} from 'redux-observable';
import {AnyAction} from '@reduxjs/toolkit';
import {IConnection} from '../services/IConnection';

export type FigureState = {
    items: FigureItem[];
    lastMoveTime: number;
    lastMoveColor: FigureColor;
};
export type PlayerState = {
    color: FigureColor;
};
export interface AppState {
    figures: FigureState;
    player: PlayerState;
}

export interface Dependencies {
    connection: IConnection;
}

export type AppEpic = Epic<AnyAction, AnyAction, AppState, Dependencies>;