import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { mergeClasses, mergeStyles } from '../../util';
const BASE = 'tsi-menu-item';
const CLASS = {
    _: BASE
};
const MenuItem = ({ className, style, name, data, value, children, onClick, onKeyDown }) => {
    const classes = useMemo(() => mergeClasses(CLASS, className), [className]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    const params = useMemo(() => ({ name, data, value }), [data, name, value]);
    const handleClick = onClick
        ? (event) => {
            onClick({ ...event, ...params });
        }
        : undefined;
    const handleKeyDown = onKeyDown
        ? (event) => {
            onKeyDown({ ...event, ...params });
        }
        : undefined;
    return (_jsx("div", { className: classes._, style: styles._, onClick: handleClick, onKeyDown: handleKeyDown, children: children }));
};
export default MenuItem;
