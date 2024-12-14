"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const Input_1 = __importDefault(require("../../lib/Input"));
const Icon_1 = __importDefault(require("../Icon"));
const BASE = 'tsi-edit';
const CLASS = {
    _: BASE,
    wait: `${BASE}-wait`,
    invalid: `${BASE}-invalid`,
    disabled: `${BASE}-disabled`,
    input: {
        _: `${BASE}-input`,
        left: `${BASE}-input-left`,
        right: `${BASE}-input-right`
    },
    icon: {
        _: `${BASE}-icon`,
        left: `${BASE}-icon-left`,
        right: `${BASE}-icon-right`
    }
};
const Edit = (0, react_1.forwardRef)(({ className, style, layout = '', name, data, value, icon, wait, disabled, invalid, readOnly, placeholder, children, format, onClick, onKeyDown, onIconClick, onInputClick, onInputKeyDown, onChange }, ref) => {
    var _a, _b;
    const formatter = (0, react_1.useMemo)(() => (0, util_1.getFormatter)(format), []);
    const isRightInput = (0, react_1.useMemo)(() => layout.includes('right'), [layout]);
    const isReadOnly = (0, react_1.useMemo)(() => Boolean(readOnly || wait || disabled), [readOnly, wait, disabled]);
    const [text, internalInvalid] = (0, react_1.useMemo)(() => {
        const state = formatter.processValue(value);
        return [state.text, state.invalid || invalid];
    }, [formatter, value, invalid]);
    const [classes, styles] = (0, react_1.useMemo)(() => (0, util_1.createLayout)([CLASS, className], [style], {
        wait,
        invalid: internalInvalid,
        disabled,
        'input-right': isRightInput,
        'icon-left': isRightInput,
        'input-left': !isRightInput,
        'icon-right': !isRightInput
    }), [className, style, wait, internalInvalid, disabled, isRightInput]);
    const params = (0, react_1.useMemo)(() => ({ name, data }), [data, name]);
    const handleChange = onChange
        ? (event) => {
            if (!isReadOnly) {
                const state = formatter.processText(event.value);
                onChange(Object.assign(Object.assign(Object.assign({}, event), { text: state.text, value: state.value, invalid: state.invalid }), params));
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
    const handleInputClick = onInputClick
        ? (event) => {
            onInputClick(Object.assign(Object.assign({}, event), params));
        }
        : undefined;
    const handleInputKeyDown = onInputKeyDown
        ? (event) => {
            onInputKeyDown(Object.assign(Object.assign({}, event), params));
        }
        : undefined;
    const handleIconClick = onIconClick
        ? (event) => {
            onIconClick(Object.assign(Object.assign({}, event), params));
        }
        : undefined;
    const iconComponent = icon ? ((0, jsx_runtime_1.jsx)(Icon_1.default, { className: classes === null || classes === void 0 ? void 0 : classes.icon, style: styles === null || styles === void 0 ? void 0 : styles.icon, icon: icon, wait: wait, disabled: disabled, invalid: internalInvalid, onClick: handleIconClick })) : undefined;
    const inputComponent = ((0, jsx_runtime_1.jsx)(Input_1.default, { className: (_a = classes === null || classes === void 0 ? void 0 : classes.input) === null || _a === void 0 ? void 0 : _a._, style: (_b = styles === null || styles === void 0 ? void 0 : styles.input) === null || _b === void 0 ? void 0 : _b._, value: text, placeholder: placeholder, readOnly: isReadOnly, name: name, data: data, onChange: handleChange, onClick: handleInputClick, onKeyDown: handleInputKeyDown }));
    return isRightInput ? ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: classes === null || classes === void 0 ? void 0 : classes._, style: styles === null || styles === void 0 ? void 0 : styles._, onClick: handleClick, onKeyDown: handleKeyDown, children: [iconComponent, inputComponent, children] })) : ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: classes === null || classes === void 0 ? void 0 : classes._, style: styles === null || styles === void 0 ? void 0 : styles._, onClick: handleClick, onKeyDown: handleKeyDown, children: [inputComponent, iconComponent, children] }));
});
Edit.displayName = 'Edit';
exports.default = Edit;
//# sourceMappingURL=Edit.js.map