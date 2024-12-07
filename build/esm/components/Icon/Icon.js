import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { createLayout } from '../../util';
const BASE = 'tsi-icon';
const CLASS = {
    _: '',
    active: `${BASE}-active`,
    invalid: `${BASE}-invalid`,
    wait: `${BASE}-wait`,
    disabled: `${BASE}-disabled`
};
/**
 * Icon component.
 * Provides a simple way to add icons to React application. Requires pre-installation of icon fonts.
 * Instructions for installing and generating fonts are contained in the documentation.
 */
const Icon = ({ className, style, icon = 'tsinput', name, data, baseClass = BASE, wait, invalid, disabled, onClick, onKeyDown }) => {
    const active = Boolean(onClick && !wait && !disabled);
    const [classes, styles] = useMemo(() => createLayout([CLASS, baseClass || BASE, icon ? `${BASE}-${icon}` : null, className], [style], {
        active,
        wait,
        invalid,
        disabled
    }), [className, style, icon, active, wait, invalid, disabled]);
    const params = useMemo(() => ({ name, data, value: icon, icon }), [icon, data, name]);
    const handleClick = onClick
        ? (event) => {
            if (!wait && !disabled) {
                onClick({ ...event, ...params });
            }
        }
        : undefined;
    const handleKeyDown = onKeyDown
        ? (event) => {
            if (!wait && !disabled) {
                onKeyDown({ ...event, ...params });
            }
        }
        : undefined;
    return _jsx("i", { className: classes._, style: styles._, onClick: handleClick, onKeyDown: handleKeyDown });
};
export default Icon;
//# sourceMappingURL=Icon.js.map