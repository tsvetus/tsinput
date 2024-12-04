import { useEffect } from 'react';
export const useEvents = ({ ref, listen = true, onClick, onOuterClick, onKeyDown }) => {
    useEffect(() => {
        if (listen) {
            const click = (event) => {
                if (onClick) {
                    onClick(event);
                }
                const element = ref?.current;
                if (listen && element && onOuterClick) {
                    onOuterClick(event);
                }
            };
            const keyDown = (event) => {
                if (listen && onKeyDown) {
                    onKeyDown(event);
                }
            };
            if (onClick || onOuterClick)
                document.addEventListener('click', click);
            if (onKeyDown)
                document.addEventListener('keydown', keyDown, { passive: false });
            return () => {
                if (onClick || onOuterClick)
                    document.removeEventListener('click', click);
                if (onKeyDown)
                    document.removeEventListener('keydown', keyDown);
            };
        }
        else
            return () => { };
    }, [listen, ref, onOuterClick, onKeyDown, onClick]);
};
export default useEvents;
//# sourceMappingURL=useEvents.js.map