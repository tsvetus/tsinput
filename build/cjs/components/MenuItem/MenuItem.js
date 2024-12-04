"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const BASE = 'tsi-menu-item';
const CLASS = {
    _: BASE
};
const MenuItem = ({ className, style, name, data, value, children, onClick, onKeyDown }) => {
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, className), [className]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const params = (0, react_1.useMemo)(() => ({ name, data, value }), [data, name, value]);
    const handleClick = onClick
        ? (event) => {
            onClick(Object.assign(Object.assign({}, event), params));
        }
        : undefined;
    const handleKeyDown = onKeyDown
        ? (event) => {
            onKeyDown(Object.assign(Object.assign({}, event), params));
        }
        : undefined;
    return ((0, jsx_runtime_1.jsx)("div", { className: classes._, style: styles._, onClick: handleClick, onKeyDown: handleKeyDown, children: children }));
};
exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map