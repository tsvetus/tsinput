"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Textarea_1 = __importDefault(require("../../lib/Textarea"));
const util_1 = require("../../util");
const useLayout_1 = __importDefault(require("../../hooks/useLayout"));
const BASE = 'tsi-memo';
const CLASS = {
    _: `${BASE}`,
    invalid: `${BASE}-invalid`,
    wait: `${BASE}-wait`
};
const Memo = (0, react_1.forwardRef)(({ className, style, name, data, value, placeholder, readOnly, wait, invalid, onChange, onClick, onKeyDown }, ref) => {
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
    const isReadOnly = (0, react_1.useMemo)(() => Boolean(readOnly || wait || !onChange), [onChange, readOnly, wait]);
    const handleChange = onChange
        ? (event) => {
            if (!isReadOnly) {
                onChange(Object.assign(Object.assign(Object.assign({}, event), params), { value: event.target.value }));
            }
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
    return ((0, jsx_runtime_1.jsx)(Textarea_1.default, { ref: ref, className: classes, style: styles, value: value, placeholder: placeholder, readOnly: isReadOnly, onChange: handleChange, onClick: handleClick, onKeyDown: handleKeyDown }));
});
Memo.displayName = 'Memo';
exports.default = Memo;
