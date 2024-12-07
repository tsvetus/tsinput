"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
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
const Inline = (0, react_1.forwardRef)(({ className, style, layout = '', name, data, label, text, icon, wait, invalid, children, onClick, onTextClick, onIconClick }, ref) => {
    const isRightLabel = (0, react_1.useMemo)(() => layout.includes('right'), [layout]);
    const [classes, styles] = (0, react_1.useMemo)(() => (0, util_1.createLayout)([CLASS, className], [style], {
        'text-right': isRightLabel,
        'icon-left': isRightLabel,
        'text-left': !isRightLabel,
        'icon-right': !isRightLabel
    }), [className, style]);
    const [textClasses, textStyles] = (0, react_1.useMemo)(() => (0, util_1.createLayout)([classes.text, classes.label], [styles.text, styles.label]), [classes, styles]);
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
    const labelText = text || label;
    const textComponent = labelText ? ((0, jsx_runtime_1.jsx)(Text_1.default, { className: textClasses, style: textStyles, name: name, data: data, value: labelText, wait: wait, invalid: invalid, onClick: handleTextClick })) : null;
    const iconComponent = icon ? ((0, jsx_runtime_1.jsx)(Icon_1.default, { className: classes.icon, style: styles.icon, name: name, data: data, icon: icon, wait: wait, invalid: invalid, onClick: handleIconClick })) : null;
    return isRightLabel ? ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: classes._, style: styles._, onClick: handleClick, children: [iconComponent, children, textComponent] })) : ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: classes._, style: styles._, onClick: handleClick, children: [textComponent, children, iconComponent] }));
});
Inline.displayName = 'Inline';
exports.default = Inline;
//# sourceMappingURL=Inline.js.map