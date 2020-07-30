import {combineEpics} from 'redux-observable';
import {AppEpic} from '../store/storeTypes';
import {concatMap, filter, map, switchMap, tap} from 'rxjs/operators';
import {PayloadAction} from '@reduxjs/toolkit';
import {from} from 'rxjs';
import {makeMove, reset} from '../slices/figures/figuresSlice';
import {GameMove} from '../domain/domain';
import {newMove, newMoves, resetGame, start} from './epicActions';

export const openConnection: AppEpic = (action$, state$, {connection}) => {
    return action$.pipe(
        filter(start.match),
        switchMap(() => {
            connection.open();
            return connection.action$;
        })
    )
}

export const movesEpic: AppEpic = (action$, state$, deps) => {
    return action$.pipe(
        filter(newMoves.match),
        concatMap(({payload}: PayloadAction<GameMove[]>) => {
            return from(
                payload.length === 0
                    ? [reset(null)]
                    : payload
                        .filter(({createdAt}) => state$.value.figures.lastMoveTime < createdAt)
                        .map((item) => makeMove(item))
            );
        })
    )
}

export const makeMoveEpic: AppEpic = (action$, state$, {connection}) => {
    return action$.pipe(
        filter(newMove.match),
        tap(({payload}) => {
            connection.sendMove(payload);
        }),
        map(({payload}) => {
            return makeMove(payload);
        }),
    )
}

export const resetGameEpic: AppEpic = (action$, state$, {connection}) => {
    return action$.pipe(
        filter(resetGame.match),
        tap(({payload}) => {
            connection.sendReset();
        }),
        map(({payload}) => {
            return reset(null);
        }),
    )
}

export const rootEpic = combineEpics(
    openConnection,
    movesEpic,
    makeMoveEpic,
    resetGameEpic,
)