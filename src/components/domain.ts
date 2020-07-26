export type FigureType = 'bishop' | 'rook' | 'knight' | 'queen' | 'pawn' | 'king';
export type FigureColor = 'white' | 'black';
export type FigureItem = {
    color: FigureColor;
    type: FigureType;
    position: string;
}