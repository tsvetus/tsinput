import { RefObject } from 'react';
interface UseEventsProps {
    ref?: RefObject<HTMLElement>;
    listen?: boolean;
    onClick?: (event: MouseEvent) => void;
    onOuterClick?: (event: MouseEvent) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
}
export declare const useEvents: ({ ref, listen, onClick, onOuterClick, onKeyDown }: UseEventsProps) => void;
export default useEvents;
