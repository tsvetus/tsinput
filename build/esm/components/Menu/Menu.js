import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { mergeClasses, mergeStyles } from '../../util';
import MenuItem from '../MenuItem';
const BASE = 'tsi-menu';
const CLASS = {
    _: BASE
};
const Menu = ({ className, style, name, data, options, onItemClick, onItemKeyDown }) => {
    const classes = useMemo(() => mergeClasses(CLASS, className), [className]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    const params = useMemo(() => ({ name, data }), [data, name]);
    const handleClick = onItemClick
        ? (event) => {
            onItemClick({ ...event, ...params });
        }
        : undefined;
    const handleKeyDown = onItemKeyDown
        ? (event) => {
            onItemKeyDown({ ...event, ...params });
        }
        : undefined;
    const optionsComponent = options
        ? options.map((option, index) => (_jsx(MenuItem, { name: name, value: option.key, onClick: handleClick, onKeyDown: handleKeyDown, children: option.name || option.key || '' }, index)))
        : null;
    return (_jsx("div", { className: classes._, style: styles._, children: optionsComponent }));
};
export default Menu;
//# sourceMappingURL=Menu.js.map