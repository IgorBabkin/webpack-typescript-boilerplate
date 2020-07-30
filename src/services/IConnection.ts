import {Observable} from 'rxjs';
import {AnyAction} from '@reduxjs/toolkit';
import {GameMove} from '../domain/domain';

export interface IConnection {
    action$: Observable<AnyAction>;

    open(): void;

    close(): void;

    sendMove(payload: GameMove): void;

    sendReset(): void;
}
