"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Inline_1 = __importDefault(require("./Inline"));
const Column_1 = __importDefault(require("./Column"));
/**
 * Label component. Provides a simple way to add labels to React components.
 */
const Label = (0, react_1.forwardRef)(({ className, style, layout = '', name, data, text = 'Label:', icon, wait, invalid, children, onClick, onTextClick, onIconClick }, ref) => {
    const isColumn = (0, react_1.useMemo)(() => layout.includes('top') || layout.includes('border'), [layout]);
    return isColumn ? ((0, jsx_runtime_1.jsx)(Column_1.default, { ref: ref, className: className, style: style, layout: layout, name: name, data: data, text: text, icon: icon, wait: wait, invalid: invalid, onClick: onClick, onTextClick: onTextClick, onIconClick: onIconClick, children: children })) : ((0, jsx_runtime_1.jsx)(Inline_1.default, { ref: ref, className: className, style: style, layout: layout, name: name, data: data, text: text, icon: icon, wait: wait, invalid: invalid, onClick: onClick, onTextClick: onTextClick, onIconClick: onIconClick, children: children }));
});
Label.displayName = 'Label';
exports.default = Label;
//# sourceMappingURL=Label.js.map