import {FigureColor, FigureType} from '../../domain/domain';

export const CHESS_ICONS = {
    'white': {
        'king': '&#x2654;',
        'queen': '&#x2655;',
        'rook': '&#x2656;',
        'bishop': '&#x2657;',
        'knight': '&#x2658;',
        'pawn': '&#x2659;',
    },
    'black': {
        'king': '&#x265A;',
        'queen': '&#x265B;',
        'rook': '&#x265C;',
        'bishop': '&#x265D;',
        'knight': '&#x265E;',
        'pawn': '&#x265F;',
    },
}

export function getChessIcon(type: FigureType, color: FigureColor): string {
    const icon = CHESS_ICONS[color][type];
    if (!icon) {
        throw new Error(`Wrong arguments: ${type} ${color}`);
    }

    return icon;
}