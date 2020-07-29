import {IConnection} from './IConnection';
import {Subject} from 'rxjs';
import {AnyAction} from '@reduxjs/toolkit';
import {connected, GameMove, newMoves} from '../epics/connection/connectionActions';

export class TestConnection implements IConnection {
    action$ = new Subject<AnyAction>();

    close(): void {
    }

    open(): void {
        setTimeout(() => {
            this.action$.next(connected())
        }, 1000);

        setTimeout(() => {
            this.action$.next(newMoves([
                {
                    from: 'A2',
                    to: 'A3',
                    color: 'white',
                    time: Date.now(),
                },
                {
                    from: 'B2',
                    to: 'B3',
                    color: 'white',
                    time: Date.now(),
                }
            ]))
        }, 3000);
    }

    sendMove(payload: GameMove): void {
        console.log('SEND MOVE', JSON.stringify(payload));
    }

}