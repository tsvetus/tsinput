"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const Group_1 = __importDefault(require("../../lib/Group"));
const Label_1 = __importDefault(require("../Label"));
const LabelGroup = ({ className, style, layout = 'border', name, data, label, icon, children, onLabelClick, onIconClick }) => {
    const layoutLabel = (0, react_1.useMemo)(() => (0, util_1.selectItems)(layout, ['top', 'border', 'right'], ['top']), [layout]);
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(className), [className]);
    const classesLabel = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(classes._, classes.label), [classes]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const stylesLabel = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(styles._, styles.label), [styles]);
    return ((0, jsx_runtime_1.jsx)(Label_1.default, { className: classesLabel, style: stylesLabel, layout: layoutLabel, name: name, data: data, text: label, icon: icon, onTextClick: onLabelClick, onIconClick: onIconClick, children: (0, jsx_runtime_1.jsx)(Group_1.default, { className: classes.group, style: styles.group, children: children }) }));
};
exports.default = LabelGroup;
//# sourceMappingURL=LabelGroup.js.map