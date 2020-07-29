import {Observable} from 'rxjs';
import {AnyAction} from '@reduxjs/toolkit';
import {GameMove} from '../epics/connection/connectionActions';

export interface IConnection {
    action$: Observable<AnyAction>;

    open(): void;

    close(): void;

    sendMove(payload: GameMove): void;
}
