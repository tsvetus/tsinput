"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Label_1 = __importDefault(require("../Label"));
const util_1 = require("../../util");
const CLASS = 'tsi-check-box';
const LabelCheckBox = ({ className, style, layout, name, data, label, radio = false, wait, invalid, value, valueChecked = true, valueUnchecked = false, events = 'text icon', onChange }) => {
    const ref = (0, react_1.useRef)(null);
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, className), [className]);
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
    (0, react_1.useEffect)(() => {
        var _a;
        if ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.parentNode) {
            const siblings = Array.from(ref.current.parentNode.children).filter(c => { var _a; return c.nodeType === 1 && c !== ref.current && ((_a = c.classList) === null || _a === void 0 ? void 0 : _a.contains(CLASS)); });
            console.log(siblings);
        }
    }, []);
    return ((0, jsx_runtime_1.jsx)(Label_1.default, { ref: ref, className: classes, style: style, layout: layout, name: name, data: data, text: label, icon: icon, wait: wait, invalid: invalid, onTextClick: handleTextClick, onIconClick: handleIconClick }));
};
exports.default = LabelCheckBox;
//# sourceMappingURL=LabelCheckBox.js.map