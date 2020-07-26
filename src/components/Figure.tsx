import React, {FunctionComponent} from 'react';
import {FigureColor, FigureType} from './domain';

interface FigureProps {
    type: FigureType;
    color: FigureColor;
}

const icons = {
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

function getChessIcon(type: FigureType, color: FigureColor): string {
    const icon = icons[color][type];
    if (!icon) {
        throw new Error(`Wrong arguments: ${type} ${color}`);
    }

    return icon;
}

export const Figure: FunctionComponent<FigureProps> = ({type, color}) => {
    return (
        <div dangerouslySetInnerHTML={{__html: getChessIcon(type, color)}}/>
    )
}