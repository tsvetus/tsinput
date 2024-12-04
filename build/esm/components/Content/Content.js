import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useMemo, forwardRef, useEffect } from 'react';
import { findElement, initRefs, mergeClasses, mergeStyles } from '../../util';
const BASE = 'tsi-content';
const CLASS = {
    _: `${BASE}`
};
const Content = forwardRef(({ className, style, children }, extRef) => {
    const mounted = useRef(false);
    const selfRef = useRef(null);
    const topRef = useRef(null);
    const classes = useMemo(() => mergeClasses(CLASS, className), [className]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    useEffect(() => {
        if (!mounted.current) {
            topRef.current = findElement('tsi-top-bar');
        }
    }, []);
    useEffect(() => {
        if (!mounted.current) {
            if (selfRef.current) {
                if (topRef.current) {
                    const rect = topRef.current?.getBoundingClientRect();
                    selfRef.current.style.top = `${rect.height}px`;
                }
                selfRef.current.style.visibility = 'visible';
            }
        }
    }, []);
    useEffect(() => {
        mounted.current = true;
    }, []);
    return (_jsx("div", { ref: initRefs(selfRef, extRef), className: classes._, style: styles._, children: children }));
});
Content.displayName = 'Content';
export default Content;
//# sourceMappingURL=Content.js.map