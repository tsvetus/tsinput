"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const Label_1 = __importDefault(require("../Label"));
const Icon_1 = __importDefault(require("../Icon"));
/** Label icon component */
const LabelIcon = ({ className, style, name, data, wait, invalid, label, icon }) => {
    // Restructure classes and styles
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(className), [className]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    // Construct props for Label component
    // Use root classes and styles for Label component
    const labelProps = (0, react_1.useMemo)(() => {
        const labelClass = (0, util_1.mergeClasses)(classes === null || classes === void 0 ? void 0 : classes._, classes === null || classes === void 0 ? void 0 : classes.label);
        const labelStyle = (0, util_1.mergeClasses)(styles === null || styles === void 0 ? void 0 : styles._, styles === null || styles === void 0 ? void 0 : styles.label);
        return Object.assign({ className: labelClass, style: labelStyle, name, data, wait, invalid }, label);
    }, [classes, styles, name, data, wait, invalid, label]);
    // Construct props for Icon component
    const iconProps = (0, react_1.useMemo)(() => {
        return Object.assign({ className: classes === null || classes === void 0 ? void 0 : classes.icon, style: styles === null || styles === void 0 ? void 0 : styles.icon, name, data, wait, invalid }, icon);
    }, [classes, styles, name, data, wait, invalid, icon]);
    // Render LabelIcon component
    return ((0, jsx_runtime_1.jsx)(Label_1.default, Object.assign({}, labelProps, { children: (0, jsx_runtime_1.jsx)(Icon_1.default, Object.assign({}, iconProps)) })));
};
exports.default = LabelIcon;
//# sourceMappingURL=LabelIcon.js.map