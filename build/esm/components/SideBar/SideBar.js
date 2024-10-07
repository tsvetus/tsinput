import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useMemo, useEffect, forwardRef } from 'react';
import Icon from '../Icon';
import { mergeClasses, mergeStyles, findElement, initRefs } from '../../util';
const BASE = 'tsi-side-bar';
const CLASS = {
    _: BASE,
    header: `${BASE}-header`,
    title: `${BASE}-title`,
    close: `${BASE}-close`,
    content: `${BASE}-content`,
    footer: `${BASE}-footer`
};
const SideBar = forwardRef(({ className, style, name, data, show, title, children, content, footer, transition = '0.5s', width = '12em', onClose }, extRef) => {
    const mounted = useRef(false);
    const intRef = useRef(null);
    const topRef = useRef(null);
    const docRef = useRef(null);
    const classes = useMemo(() => mergeClasses(CLASS, className), [className]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    const cssTransition = useMemo(() => {
        const number = Number(transition || 0);
        return number >= 0 ? `${number}s` : `${transition || 0}`;
    }, [transition]);
    const cssWidth = useMemo(() => {
        const number = Number(width || 0);
        return number >= 0 ? `${number}px` : `${width || 0}`;
    }, [width]);
    const handleClose = onClose
        ? (event) => {
            onClose(event);
        }
        : undefined;
    useEffect(() => {
        if (!mounted.current) {
            topRef.current = findElement('tsi-top-bar');
            docRef.current = findElement('tsi-content');
        }
    }, []);
    useEffect(() => {
        if (!mounted.current && intRef.current) {
            intRef.current.style.width = show ? cssWidth : '0';
            if (topRef.current) {
                const rect = topRef.current.getBoundingClientRect();
                intRef.current.style.top = `${rect.height}px`;
            }
            if (docRef.current) {
                const rect = intRef.current.getBoundingClientRect();
                docRef.current.style.marginLeft = `${rect.width}px`;
            }
            intRef.current.style.visibility = 'visible';
        }
    }, [show, cssWidth]);
    useEffect(() => {
        if (mounted.current && intRef.current) {
            intRef.current.style.transition = cssTransition;
            if (docRef.current) {
                docRef.current.style.transition = cssTransition;
            }
            if (show) {
                intRef.current.style.width = cssWidth;
                if (docRef?.current) {
                    docRef.current.style.marginLeft = cssWidth;
                }
            }
            else {
                intRef.current.style.width = '0';
                if (docRef?.current) {
                    docRef.current.style.marginLeft = '0';
                }
            }
        }
    }, [show, cssTransition, cssWidth]);
    useEffect(() => {
        mounted.current = true;
    }, []);
    return (_jsxs("div", { ref: initRefs(intRef, extRef), className: classes._, style: styles._, children: [_jsxs("div", { className: classes.header?._, style: styles.header?._, children: [_jsx("div", { className: classes.title?._, style: styles.title?._, children: title }), _jsx(Icon, { className: classes.close?._, style: styles.close?._, name: name, data: data, icon: 'close', onClick: handleClose })] }), children || content ? (_jsxs("div", { className: classes.content?._, style: styles.content?._, children: [children, content] })) : null, footer ? (_jsx("div", { className: classes.footer?._, style: styles.footer?._, children: footer })) : null] }));
});
SideBar.displayName = 'SideBar';
export default SideBar;
