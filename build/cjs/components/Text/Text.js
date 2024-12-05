"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const useLayout_1 = __importDefault(require("../../hooks/useLayout"));
const BASE = 'tsi-text';
const CLASS = {
    _: BASE,
    invalid: `${BASE}-invalid`,
    wait: `${BASE}-wait`
};
const Text = ({ className, style, name, data, wait, invalid, value, onClick, onKeyDown }) => {
    const layoutClasses = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, className), [className]);
    const layoutStyles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const mergeLayout = (0, react_1.useCallback)((key) => {
        switch (key) {
            case 'wait':
                return wait;
            case 'invalid':
                return invalid;
            default:
                return false;
        }
    }, [wait, invalid]);
    const [classes, styles] = (0, useLayout_1.default)(layoutClasses, layoutStyles, mergeLayout);
    const params = (0, react_1.useMemo)(() => ({ name, data }), [data, name]);
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
    return ((0, jsx_runtime_1.jsx)("div", { className: classes._, style: styles._, onClick: handleClick, onKeyDown: handleKeyDown, children: value }));
};
exports.default = Text;
//# sourceMappingURL=Text.js.map