"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Textarea_1 = __importDefault(require("../../lib/Textarea"));
const util_1 = require("../../util");
const BASE = 'tsi-memo';
const CLASS = {
    _: `${BASE}`,
    invalid: `${BASE}-invalid`,
    wait: `${BASE}-wait`
};
const Memo = (0, react_1.forwardRef)(({ className, style, name, data, value, placeholder, readOnly, wait, invalid, onChange, onClick, onKeyDown }, ref) => {
    const isReadOnly = (0, react_1.useMemo)(() => Boolean(readOnly || wait || !onChange), [onChange, readOnly, wait]);
    const [classes, styles] = (0, react_1.useMemo)(() => (0, util_1.createLayout)([CLASS, className], [style], {
        wait: wait,
        invalid: invalid
    }), [className, style]);
    const params = (0, react_1.useMemo)(() => ({ name, data }), [data, name]);
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
//# sourceMappingURL=Memo.js.map