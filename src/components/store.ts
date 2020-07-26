import {FigureItem} from './domain';

export type FigureState = FigureItem[];
export interface AppState {
    figures: FigureItem[];
}