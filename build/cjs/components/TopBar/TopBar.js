"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Icon_1 = __importDefault(require("../Icon"));
const util_1 = require("../../util");
const BASE = 'tsi-top-bar';
const CLASS = {
    _: BASE,
    icon: `${BASE}-icon`,
    left: `${BASE}-left`,
    center: `${BASE}-center`,
    right: `${BASE}-right`
};
const TopBar = (0, react_1.forwardRef)(({ className, style, name, data, icon = 'burger', onIconClick }, extRef) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const selfRef = (0, react_1.useRef)(null);
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, className), [className]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const handleIconClick = onIconClick
        ? (event) => {
            onIconClick(event);
        }
        : undefined;
    return ((0, jsx_runtime_1.jsxs)("div", { ref: (0, util_1.initRefs)(selfRef, extRef), className: classes._, style: styles._, children: [(0, jsx_runtime_1.jsx)("div", { className: (_a = classes.left) === null || _a === void 0 ? void 0 : _a._, style: (_b = styles.left) === null || _b === void 0 ? void 0 : _b._, children: (0, jsx_runtime_1.jsx)(Icon_1.default, { className: (_c = classes.icon) === null || _c === void 0 ? void 0 : _c._, style: (_d = styles.icon) === null || _d === void 0 ? void 0 : _d._, name: name, data: data, icon: icon, onClick: handleIconClick }) }), (0, jsx_runtime_1.jsx)("div", { className: (_e = classes.center) === null || _e === void 0 ? void 0 : _e._, style: (_f = styles.center) === null || _f === void 0 ? void 0 : _f._ }), (0, jsx_runtime_1.jsx)("div", { className: (_g = classes.right) === null || _g === void 0 ? void 0 : _g._, style: (_h = styles.right) === null || _h === void 0 ? void 0 : _h._ })] }));
});
TopBar.displayName = 'TopBar';
exports.default = TopBar;
//# sourceMappingURL=TopBar.js.map