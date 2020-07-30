import {useDrag, useDrop} from 'react-dnd';
import {FigureDragObject, FigureDropResult} from './figureDND';

export const useItemDrag = (onDrop: (target: string) => void) => {
    return useDrag<FigureDragObject, FigureDropResult, { isDragging: boolean; }>({
        item: {type: 'any'},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        end: (dragObject, monitor) => {
            onDrop(monitor.getDropResult().position);
        }
    });
}

export const useItemDrop = (position: string) => {
    return useDrop<FigureDragObject, FigureDropResult, { isOver: boolean; }>({
        accept: 'any',
        drop: (item) => ({position}),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    });
}