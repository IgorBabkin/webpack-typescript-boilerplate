import {IConnection} from './IConnection';
import {Subject} from 'rxjs';
import {AnyAction} from '@reduxjs/toolkit';
import {connected, newMoves} from '../epics/epicActions';
import {GameMove} from '../domain/domain';

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
                    createdAt: Date.now(),
                },
                {
                    from: 'B2',
                    to: 'B3',
                    color: 'white',
                    createdAt: Date.now(),
                }
            ]))
        }, 3000);
    }

    sendMove(payload: GameMove): void {
        console.log('SEND MOVE', JSON.stringify(payload));
    }

    sendReset(): void {
        console.log('SEND RESET');
    }

}