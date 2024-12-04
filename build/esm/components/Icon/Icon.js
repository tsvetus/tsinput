import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useCallback } from 'react';
import { mergeClasses, mergeStyles } from '../../util';
import useLayout from '../../hooks/useLayout';
const BASE = 'tsi-icon';
const CLASS = {
    _: '',
    active: `${BASE}-active`,
    invalid: `${BASE}-invalid`,
    wait: `${BASE}-wait`
};
/**
 * Icon component.
 * Provides a simple way to add icons to React application. Requires pre-installation of icon fonts.
 * Instructions for installing and generating fonts are contained in the documentation.
 */
const Icon = ({ className, style, icon = 'tsinput', name, data, baseClass = BASE, wait, invalid, onClick, onKeyDown }) => {
    const active = Boolean(onClick);
    const layoutClasses = useMemo(() => mergeClasses(CLASS, baseClass || BASE, icon ? `${BASE}-${icon}` : null, className), [baseClass, className, icon]);
    const layoutStyles = useMemo(() => mergeStyles(style), [style]);
    const mergeLayout = useCallback((key) => {
        switch (key) {
            case 'active':
                return active;
            case 'wait':
                return wait;
            case 'invalid':
                return invalid;
            default:
                return false;
        }
    }, [active, wait, invalid]);
    const [classes, styles] = useLayout(layoutClasses, layoutStyles, mergeLayout);
    const params = useMemo(() => ({ name, data, value: icon, icon }), [icon, data, name]);
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
    return _jsx("i", { className: classes._, style: styles._, onClick: handleClick, onKeyDown: handleKeyDown });
};
export default Icon;
//# sourceMappingURL=Icon.js.map