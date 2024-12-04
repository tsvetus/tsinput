"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const MenuItem_1 = __importDefault(require("../MenuItem"));
const BASE = 'tsi-menu';
const CLASS = {
    _: BASE
};
const Menu = ({ className, style, name, data, options, onItemClick, onItemKeyDown }) => {
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, className), [className]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const params = (0, react_1.useMemo)(() => ({ name, data }), [data, name]);
    const handleClick = onItemClick
        ? (event) => {
            onItemClick(Object.assign(Object.assign({}, event), params));
        }
        : undefined;
    const handleKeyDown = onItemKeyDown
        ? (event) => {
            onItemKeyDown(Object.assign(Object.assign({}, event), params));
        }
        : undefined;
    const optionsComponent = options
        ? options.map((option, index) => ((0, jsx_runtime_1.jsx)(MenuItem_1.default, { name: name, value: option.key, onClick: handleClick, onKeyDown: handleKeyDown, children: option.name || option.key || '' }, index)))
        : null;
    return ((0, jsx_runtime_1.jsx)("div", { className: classes._, style: styles._, children: optionsComponent }));
};
exports.default = Menu;
//# sourceMappingURL=Menu.js.map