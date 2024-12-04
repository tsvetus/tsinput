"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const Overlay_1 = __importDefault(require("../../lib/Overlay"));
const List_1 = __importDefault(require("../../lib/List"));
const Edit_1 = __importDefault(require("../Edit"));
const ListBox = ({ className, style, layout, name, data, value, wait, invalid, readOnly = true, placeholder, valueField = 'value key code id', nameField = 'name label text', options, onClick, onKeyDown, onIconClick, onInputClick, onInputKeyDown, onChange, onSelect }) => {
    const editRef = (0, react_1.useRef)(null);
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(className), [className]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const originalOptions = (0, react_1.useMemo)(() => options || [], [options]);
    const listOptions = (0, react_1.useMemo)(() => {
        const vf = (0, util_1.asArray)(valueField);
        const nf = (0, util_1.asArray)(nameField);
        return originalOptions
            .map((option, index) => {
            if (null === option || undefined === option) {
                return { value: option, name: `${option}`, index };
            }
            else if ('string' === typeof option || 'number' === typeof option) {
                return { value: option, name: `${option}`, index };
            }
            else if ('object' === typeof option) {
                const [v, n] = [vf.find(v => option[v]), nf.find(n => option[n])];
                return v && n ? { value: option[v], name: option[n], index } : null;
            }
            else
                return null;
        })
            .filter(Boolean);
    }, [originalOptions, valueField, nameField]);
    const [optionIndex, optionName] = (0, react_1.useMemo)(() => {
        var _a;
        const index = listOptions.findIndex(v => value === (v === null || v === void 0 ? void 0 : v.value));
        const name = index >= 0 ? (_a = listOptions[index]) === null || _a === void 0 ? void 0 : _a.name : null;
        return [index, 'string' === typeof name ? name : ''];
    }, [value, listOptions]);
    const [showOverlay, setShowOverlay] = (0, react_1.useState)(false);
    const handleKeyDown = (event) => {
        onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event);
        if (!showOverlay && 'Enter' === event.nativeEvent.key) {
            event.nativeEvent.stopPropagation();
            event.nativeEvent.preventDefault();
            setShowOverlay(true);
        }
    };
    const handleIconClick = (event) => {
        onIconClick === null || onIconClick === void 0 ? void 0 : onIconClick(event);
        event.nativeEvent.stopPropagation();
        event.nativeEvent.preventDefault();
        setShowOverlay(!showOverlay);
    };
    const handleInputClick = (event) => {
        onInputClick === null || onInputClick === void 0 ? void 0 : onInputClick(event);
        event.nativeEvent.stopPropagation();
        event.nativeEvent.preventDefault();
        setShowOverlay(!showOverlay);
    };
    const handleListClose = (event) => {
        var _a;
        onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign({}, event), { name,
            data, value: (_a = listOptions[optionIndex]) === null || _a === void 0 ? void 0 : _a.value, option: originalOptions[optionIndex] }));
        setShowOverlay(false);
    };
    const handleListChange = (event) => {
        var _a, _b;
        const newIndex = (_a = event.optionIndex) !== null && _a !== void 0 ? _a : -1;
        const params = Object.assign(Object.assign({}, event), { name,
            data, value: (_b = listOptions[newIndex]) === null || _b === void 0 ? void 0 : _b.value, option: originalOptions[newIndex] });
        if (newIndex >= 0 && newIndex !== optionIndex) {
            onChange === null || onChange === void 0 ? void 0 : onChange(params);
        }
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(params);
        setShowOverlay(false);
    };
    return ((0, jsx_runtime_1.jsx)(Edit_1.default, { ref: editRef, className: classes.edit, style: styles.edit, layout: layout, name: name, data: data, icon: showOverlay ? 'angle-down' : 'angle-up', wait: wait, invalid: invalid, readOnly: readOnly, placeholder: placeholder, value: optionName, onClick: onClick, onKeyDown: handleKeyDown, onIconClick: handleIconClick, onInputClick: handleInputClick, onInputKeyDown: onInputKeyDown, children: (0, jsx_runtime_1.jsx)(Overlay_1.default, { className: classes.overlay, style: styles.overlay, show: showOverlay, onTarget: () => editRef.current, children: (0, jsx_runtime_1.jsx)(List_1.default, { className: classes.list, style: styles.list, optionIndex: optionIndex, options: listOptions, onClose: handleListClose, onChange: handleListChange }) }) }));
};
exports.default = ListBox;
//# sourceMappingURL=ListBox.js.map