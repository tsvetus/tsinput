"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const useLayout_1 = __importDefault(require("../../hooks/useLayout"));
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
    const layoutClasses = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, baseClass || BASE, icon ? `${BASE}-${icon}` : null, className), [baseClass, className, icon]);
    const layoutStyles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const mergeLayout = (0, react_1.useCallback)((key) => {
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
    const [classes, styles] = (0, useLayout_1.default)(layoutClasses, layoutStyles, mergeLayout);
    const params = (0, react_1.useMemo)(() => ({ name, data, value: icon, icon }), [icon, data, name]);
    const handleClick = onClick
        ? (event) => {
            if (!wait) {
                onClick(Object.assign(Object.assign({}, event), params));
            }
        }
        : undefined;
    const handleKeyDown = onKeyDown
        ? (event) => {
            if (!wait) {
                onKeyDown(Object.assign(Object.assign({}, event), params));
            }
        }
        : undefined;
    return (0, jsx_runtime_1.jsx)("i", { className: classes._, style: styles._, onClick: handleClick, onKeyDown: handleKeyDown });
};
exports.default = Icon;
//# sourceMappingURL=Icon.js.map