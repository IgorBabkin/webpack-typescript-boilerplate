import {IConnection} from './IConnection';
import io from 'socket.io-client';
import {Subject} from 'rxjs';
import {AnyAction} from '@reduxjs/toolkit';
import {connected, newMoves} from '../epics/epicActions';
import {GameMove} from '../domain/domain';

export class Connection implements IConnection {
    public action$ = new Subject<AnyAction>();
    private connection: SocketIOClient.Socket;

    constructor() {
    }

    open() {
        this.connection = io('http://localhost:80', {});
        this.connection.on('connect', () => {
           this.action$.next(connected())
        });
        this.connection.on('moves', (moves) => {
            this.action$.next(newMoves(moves))
        });
    }

    close() {

    }

    sendMove(payload: GameMove): void {
        this.connection.emit('makeMove', payload);
    }

    sendReset(): void {
        this.connection.emit('resetGame');
    }
}