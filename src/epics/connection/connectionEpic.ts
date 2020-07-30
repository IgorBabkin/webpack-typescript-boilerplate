import {AppEpic} from '../../components/store';
import {concatMap, filter, ignoreElements, map, switchMap, tap} from 'rxjs/operators';
import {GameMove, newMove, newMoves, start} from './connectionActions';
import {from} from 'rxjs';
import {makeMove} from '../../slices/figures/figuresSlice';
import {PayloadAction} from '@reduxjs/toolkit';

export const connectionEpic: AppEpic = (action$, state$, {connection}) => {
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
            return from(payload.filter(({createdAt}) => {
                return state$.value.figures.lastMoveTime < createdAt;
            }).map((item) => makeMove(item)));
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