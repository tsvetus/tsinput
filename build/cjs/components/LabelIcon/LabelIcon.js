"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Label_1 = __importDefault(require("../Label"));
const Icon_1 = __importDefault(require("../Icon"));
const LabelIcon = ({ className, style, label, icon }) => {
    return ((0, jsx_runtime_1.jsx)(Label_1.default, Object.assign({ className: className, style: style }, label, { children: (0, jsx_runtime_1.jsx)(Icon_1.default, Object.assign({}, icon)) })));
};
exports.default = LabelIcon;
//# sourceMappingURL=LabelIcon.js.map