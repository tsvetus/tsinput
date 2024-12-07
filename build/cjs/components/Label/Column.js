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
    _: `${BASE} ${BASE}-column`,
    header: {
        _: `${BASE}-header`,
        border: `${BASE}-header-border`
    },
    text: {
        _: `${BASE}-text ${BASE}-text-top`,
        border: `${BASE}-text-border`
    },
    icon: {
        _: `${BASE}-icon ${BASE}-icon-top`,
        border: `${BASE}-icon-border`
    }
};
const Column = (0, react_1.forwardRef)(({ className, style, layout = '', name, data, label, text, icon, wait, invalid, children, onClick, onTextClick, onIconClick }, ref) => {
    var _a, _b, _c, _d;
    const [isRightLabel, isBorder] = (0, react_1.useMemo)(() => [layout.includes('right'), layout.includes('border')], [layout]);
    const [classes, styles] = (0, react_1.useMemo)(() => (0, util_1.createLayout)([CLASS, className], [style], {
        'header-border': isBorder,
        'text-border': isBorder,
        'icon-border': isBorder
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
    const textComponent = labelText ? ((0, jsx_runtime_1.jsx)(Text_1.default, { className: textClasses, style: textStyles, name: name, data: data, value: labelText, wait: wait, invalid: invalid, onClick: handleTextClick })) : ((0, jsx_runtime_1.jsx)("div", {}));
    const iconComponent = icon ? ((0, jsx_runtime_1.jsx)(Icon_1.default, { className: classes.icon, style: styles.icon, name: name, data: data, icon: icon, wait: wait, invalid: invalid, onClick: handleIconClick })) : ((0, jsx_runtime_1.jsx)("div", {}));
    const headerComponent = isRightLabel ? ((0, jsx_runtime_1.jsxs)("div", { className: (_a = classes.header) === null || _a === void 0 ? void 0 : _a._, style: (_b = styles.header) === null || _b === void 0 ? void 0 : _b._, children: [iconComponent, textComponent] })) : ((0, jsx_runtime_1.jsxs)("div", { className: (_c = classes.header) === null || _c === void 0 ? void 0 : _c._, style: (_d = styles.header) === null || _d === void 0 ? void 0 : _d._, children: [textComponent, iconComponent] }));
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: classes._, style: styles._, onClick: handleClick, children: [headerComponent, children] }));
});
Column.displayName = 'Column';
exports.default = Column;
//# sourceMappingURL=Column.js.map