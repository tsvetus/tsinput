"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const BASE = 'tsi-textarea';
const CLASS = {
    _: BASE
};
const Textarea = (0, react_1.forwardRef)(({ className, style, name, data, value, readOnly, placeholder, onChange, onClick, onKeyDown }, ref) => {
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, className), [className]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const params = (0, react_1.useMemo)(() => ({ name, data }), [name, data]);
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
    return ((0, jsx_runtime_1.jsx)("textarea", { ref: ref, className: classes._, style: styles._, value: value, readOnly: readOnly, placeholder: placeholder, onChange: handleChange, onClick: handleClick, onKeyDown: handleKeyDown }));
});
Textarea.displayName = 'Textarea';
exports.default = Textarea;
