"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
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
    const [classes, styles] = (0, react_1.useMemo)(() => (0, util_1.createLayout)([CLASS, baseClass || BASE, icon ? `${BASE}-${icon}` : null, className], [style], {
        active,
        wait,
        invalid,
        disabled
    }), [baseClass, icon, className, style, active, wait, invalid, disabled]);
    const params = (0, react_1.useMemo)(() => ({ name, data, value: icon, icon }), [icon, data, name]);
    const handleClick = onClick
        ? (event) => {
            if (!wait && !disabled) {
                onClick(Object.assign(Object.assign({}, event), params));
            }
        }
        : undefined;
    const handleKeyDown = onKeyDown
        ? (event) => {
            if (!wait && !disabled) {
                onKeyDown(Object.assign(Object.assign({}, event), params));
            }
        }
        : undefined;
    return (0, jsx_runtime_1.jsx)("i", { className: classes._, style: styles._, onClick: handleClick, onKeyDown: handleKeyDown });
};
exports.default = Icon;
//# sourceMappingURL=Icon.js.map