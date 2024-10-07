"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const useLayout_1 = __importDefault(require("../../hooks/useLayout"));
const Text_1 = __importDefault(require("../Text"));
const Icon_1 = __importDefault(require("../Icon"));
const BASE = 'tsi-label';
const CLASS = {
    _: `${BASE} ${BASE}-inline`,
    text: {
        _: `${BASE}-text`,
        left: `${BASE}-text-left`,
        right: `${BASE}-text-right`
    },
    icon: {
        _: `${BASE}-icon`,
        left: `${BASE}-icon-left`,
        right: `${BASE}-icon-right`
    }
};
const Inline = (0, react_1.forwardRef)(({ className, style, layout = '', name, data, text, icon, wait, invalid, children, onClick, onTextClick, onIconClick }, ref) => {
    const isRightLabel = (0, react_1.useMemo)(() => layout.includes('right'), [layout]);
    const layoutClasses = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, className), [className]);
    const layoutStyles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const mergeLayout = (0, react_1.useCallback)((key) => {
        switch (key) {
            case 'text-right':
            case 'icon-left':
                return isRightLabel;
            case 'text-left':
            case 'icon-right':
                return !isRightLabel;
            default:
                return false;
        }
    }, [isRightLabel]);
    const [classes, styles] = (0, useLayout_1.default)(layoutClasses, layoutStyles, mergeLayout);
    const params = (0, react_1.useMemo)(() => ({ name, data }), [data, name]);
    const handleClick = onClick
        ? (event) => {
            if (!wait) {
                onClick(Object.assign(Object.assign({}, event), params));
            }
        }
        : undefined;
    const handleTextClick = onTextClick
        ? (event) => {
            onTextClick(Object.assign(Object.assign({}, event), params));
        }
        : undefined;
    const handleIconClick = onIconClick
        ? (event) => {
            onIconClick(Object.assign(Object.assign({}, event), params));
        }
        : undefined;
    const textComponent = text ? ((0, jsx_runtime_1.jsx)(Text_1.default, { className: classes.text, style: styles.text, value: text, wait: wait, invalid: invalid, onClick: handleTextClick })) : null;
    const iconComponent = icon ? ((0, jsx_runtime_1.jsx)(Icon_1.default, { className: classes.icon, style: styles.icon, icon: icon, wait: wait, invalid: invalid, onClick: handleIconClick })) : null;
    return isRightLabel ? ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: classes._, style: styles._, onClick: handleClick, children: [iconComponent, children, textComponent] })) : ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: classes._, style: styles._, onClick: handleClick, children: [textComponent, children, iconComponent] }));
});
Inline.displayName = 'Inline';
exports.default = Inline;
