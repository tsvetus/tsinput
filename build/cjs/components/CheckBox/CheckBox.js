"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Label_1 = __importDefault(require("../Label"));
const util_1 = require("../../util");
const BASE = 'tsi-check-box';
const CLASS = {
    _: BASE,
    icon: `${BASE}-icon`
};
const CheckBox = ({ className, style, layout, name, data, label = 'CheckBox:', radio = false, wait, invalid, value, valueChecked = true, valueUnchecked = false, events = 'text icon', onChange }) => {
    const ref = (0, react_1.useRef)(null);
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, className), [className]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const iconSet = (0, react_1.useMemo)(() => (radio ? ['unselected', 'selected'] : ['unchecked', 'checked']), [radio]);
    const icon = (0, react_1.useMemo)(() => (value == valueChecked ? iconSet[1] : iconSet[0]), [iconSet, value, valueChecked]);
    const handleChange = (event) => {
        if (onChange) {
            onChange(Object.assign(Object.assign({}, event), { value: value == valueChecked ? valueUnchecked : valueChecked }));
        }
    };
    const handleTextClick = (event) => {
        if (events.includes('text') || events.includes('label')) {
            handleChange(event);
        }
    };
    const handleIconClick = (event) => {
        if (events.includes('icon')) {
            handleChange(event);
        }
    };
    return ((0, jsx_runtime_1.jsx)(Label_1.default, { ref: ref, className: classes, style: styles, layout: layout, name: name, data: data, label: label, icon: icon, wait: wait, invalid: invalid, onTextClick: handleTextClick, onIconClick: handleIconClick }));
};
exports.default = CheckBox;
//# sourceMappingURL=CheckBox.js.map