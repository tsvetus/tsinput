import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useCallback } from 'react';
import { mergeClasses, mergeStyles } from '../../util';
import useLayout from '../../hooks/useLayout';
const BASE = 'tsi-text';
const CLASS = {
    _: BASE,
    invalid: `${BASE}-invalid`,
    wait: `${BASE}-wait`
};
const Text = ({ className, style, name, data, wait, invalid, value, onClick, onKeyDown }) => {
    const layoutClasses = useMemo(() => mergeClasses(CLASS, className), [className]);
    const layoutStyles = useMemo(() => mergeStyles(style), [style]);
    const mergeLayout = useCallback((key) => {
        switch (key) {
            case 'wait':
                return wait;
            case 'invalid':
                return invalid;
            default:
                return false;
        }
    }, [wait, invalid]);
    const [classes, styles] = useLayout(layoutClasses, layoutStyles, mergeLayout);
    const params = useMemo(() => ({ name, data }), [data, name]);
    const handleClick = onClick
        ? (event) => {
            if (!wait) {
                onClick({ ...event, ...params });
            }
        }
        : undefined;
    const handleKeyDown = onKeyDown
        ? (event) => {
            if (!wait) {
                onKeyDown({ ...event, ...params });
            }
        }
        : undefined;
    return (_jsx("div", { className: classes._, style: styles._, onClick: handleClick, onKeyDown: handleKeyDown, children: value }));
};
export default Text;
//# sourceMappingURL=Text.js.map