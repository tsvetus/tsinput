"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const Label_1 = __importDefault(require("../Label"));
const Edit_1 = __importDefault(require("../Edit"));
const LabelEdit = ({ className, style, labelLayout, editLayout, name, data, label, labelIcon, editIcon, wait, invalid, placeholder, children, value, onLabelClick, onLabelIconClick, onEditClick, onEditIconClick, onInputClick, onInputKeyDown, onChange }) => {
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(className), [className]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const labelClass = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(classes.label, classes._), [classes]);
    const labelStyle = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(styles.label, styles._), [styles]);
    return ((0, jsx_runtime_1.jsx)(Label_1.default, { className: labelClass, style: labelStyle, layout: labelLayout, name: name, data: data, text: label, icon: labelIcon, wait: wait, invalid: invalid, onClick: onLabelClick, onIconClick: onLabelIconClick, children: (0, jsx_runtime_1.jsx)(Edit_1.default, { className: classes.edit, style: styles.edit, layout: editLayout, name: name, data: data, icon: editIcon, wait: wait, invalid: invalid, placeholder: placeholder, value: value, onClick: onEditClick, onIconClick: onEditIconClick, onInputClick: onInputClick, onInputKeyDown: onInputKeyDown, onChange: onChange, children: children }) }));
};
exports.default = LabelEdit;
//# sourceMappingURL=LabelEdit.js.map