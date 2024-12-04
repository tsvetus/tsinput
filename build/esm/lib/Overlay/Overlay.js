import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { mergeClasses, mergeStyles } from '../../util';
const BASE = 'tsi-overlay';
const CLASS = {
    _: BASE
};
const Overlay = ({ className, style, name, data, offset = 0, timeout = 350, show, persistent, children, onEnter, onExit, onTarget }) => {
    const ref = useRef(null);
    const classes = useMemo(() => mergeClasses(CLASS, className), [className]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    const params = useMemo(() => ({ name, data }), [name, data]);
    const handleEnter = () => {
        const target = onTarget?.();
        if (target && ref.current) {
            const rect = target.getBoundingClientRect();
            ref.current.style.left = `${0}px`;
            ref.current.style.right = `${0}px`;
            ref.current.style.top = `${rect.height + offset}px`;
        }
    };
    const handleEntered = () => {
        onEnter?.({ ...params });
    };
    const handleExited = () => {
        onExit?.({ ...params });
    };
    return (_jsx(CSSTransition, { nodeRef: ref, in: show, timeout: timeout, classNames: BASE, unmountOnExit: !persistent, onEnter: handleEnter, onEntered: handleEntered, onExited: handleExited, children: _jsx("div", { ref: ref, className: classes._, style: styles._, children: children }) }));
};
export default Overlay;
//# sourceMappingURL=Overlay.js.map