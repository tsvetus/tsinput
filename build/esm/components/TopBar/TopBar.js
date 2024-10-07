import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useMemo, forwardRef } from 'react';
import Icon from '../Icon';
import { mergeClasses, mergeStyles, initRefs } from '../../util';
const BASE = 'tsi-top-bar';
const CLASS = {
    _: BASE,
    icon: `${BASE}-icon`,
    left: `${BASE}-left`,
    center: `${BASE}-center`,
    right: `${BASE}-right`
};
const TopBar = forwardRef(({ className, style, name, data, icon = 'burger', onIconClick }, extRef) => {
    const selfRef = useRef(null);
    const classes = useMemo(() => mergeClasses(CLASS, className), [className]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    const handleIconClick = onIconClick
        ? (event) => {
            onIconClick(event);
        }
        : undefined;
    return (_jsxs("div", { ref: initRefs(selfRef, extRef), className: classes._, style: styles._, children: [_jsx("div", { className: classes.left?._, style: styles.left?._, children: _jsx(Icon, { className: classes.icon?._, style: styles.icon?._, name: name, data: data, icon: icon, onClick: handleIconClick }) }), _jsx("div", { className: classes.center?._, style: styles.center?._ }), _jsx("div", { className: classes.right?._, style: styles.right?._ })] }));
});
TopBar.displayName = 'TopBar';
export default TopBar;
