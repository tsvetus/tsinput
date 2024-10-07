"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const BASE = 'tsi-group';
const CLASS = {
    _: BASE
};
const Group = ({ className, style, children }) => {
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, className), [className]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    return ((0, jsx_runtime_1.jsx)("div", { className: classes._, style: styles._, children: children }));
};
exports.default = Group;
