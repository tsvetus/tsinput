"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const BASE = 'tsi-input';
const CLASS = {
    _: BASE
};
const Input = (0, react_1.forwardRef)(({ className, style, name, data, value = '', readOnly, placeholder, onChange, onClick, onKeyDown }, ref) => {
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, className), [className]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const params = (0, react_1.useMemo)(() => ({ name, data }), [data, name]);
    const handleChange = onChange
        ? (event) => {
            onChange(Object.assign(Object.assign(Object.assign({}, event), params), { value: event.target.value }));
        }
        : undefined;
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
    return ((0, jsx_runtime_1.jsx)("input", { ref: ref, className: classes._, style: styles._, type: 'text', value: value || '', readOnly: readOnly, placeholder: placeholder, onChange: handleChange, onClick: handleClick, onKeyDown: handleKeyDown }));
});
Input.displayName = 'Input';
exports.default = Input;
