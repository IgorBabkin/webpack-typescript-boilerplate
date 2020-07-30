import {repeat} from '../../utils/utils';

const LETTER_A = 65;
const BOARD_SIZE = 8;
const numberToPosition = (i: number) => [
    String.fromCharCode(LETTER_A + i % BOARD_SIZE),
    BOARD_SIZE - Math.floor(i / BOARD_SIZE),
];
const POSITIONS_WHITE = repeat(BOARD_SIZE * BOARD_SIZE).map((key, i) => numberToPosition(i).join(''));

export const isTileOdd = (index: number) => !!(Math.floor(index / BOARD_SIZE) % 2);
export const POSITIONS = {
    'white': POSITIONS_WHITE,
    'black': [...POSITIONS_WHITE].reverse(),
}
export const LETTERS = repeat(BOARD_SIZE).map((key, i) => String.fromCharCode(LETTER_A + i));
export const NUMBERS = repeat(BOARD_SIZE).map((key, i) => i + 1);