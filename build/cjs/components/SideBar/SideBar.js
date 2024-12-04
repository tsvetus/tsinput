"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Icon_1 = __importDefault(require("../Icon"));
const util_1 = require("../../util");
const BASE = 'tsi-side-bar';
const CLASS = {
    _: BASE,
    header: `${BASE}-header`,
    title: `${BASE}-title`,
    close: `${BASE}-close`,
    content: `${BASE}-content`,
    footer: `${BASE}-footer`
};
const SideBar = (0, react_1.forwardRef)(({ className, style, name, data, show, title, children, content, footer, transition = '0.5s', width = '12em', onClose }, extRef) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const mounted = (0, react_1.useRef)(false);
    const intRef = (0, react_1.useRef)(null);
    const topRef = (0, react_1.useRef)(null);
    const docRef = (0, react_1.useRef)(null);
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, className), [className]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const cssTransition = (0, react_1.useMemo)(() => {
        const number = Number(transition || 0);
        return number >= 0 ? `${number}s` : `${transition || 0}`;
    }, [transition]);
    const cssWidth = (0, react_1.useMemo)(() => {
        const number = Number(width || 0);
        return number >= 0 ? `${number}px` : `${width || 0}`;
    }, [width]);
    const handleClose = onClose
        ? (event) => {
            onClose(event);
        }
        : undefined;
    (0, react_1.useEffect)(() => {
        if (!mounted.current) {
            topRef.current = (0, util_1.findElement)('tsi-top-bar');
            docRef.current = (0, util_1.findElement)('tsi-content');
        }
    }, []);
    (0, react_1.useEffect)(() => {
        if (!mounted.current && intRef.current) {
            intRef.current.style.width = show ? cssWidth : '0';
            if (topRef.current) {
                const rect = topRef.current.getBoundingClientRect();
                intRef.current.style.top = `${rect.height}px`;
            }
            if (docRef.current) {
                const rect = intRef.current.getBoundingClientRect();
                docRef.current.style.marginLeft = `${rect.width}px`;
            }
            intRef.current.style.visibility = 'visible';
        }
    }, [show, cssWidth]);
    (0, react_1.useEffect)(() => {
        if (mounted.current && intRef.current) {
            intRef.current.style.transition = cssTransition;
            if (docRef.current) {
                docRef.current.style.transition = cssTransition;
            }
            if (show) {
                intRef.current.style.width = cssWidth;
                if (docRef === null || docRef === void 0 ? void 0 : docRef.current) {
                    docRef.current.style.marginLeft = cssWidth;
                }
            }
            else {
                intRef.current.style.width = '0';
                if (docRef === null || docRef === void 0 ? void 0 : docRef.current) {
                    docRef.current.style.marginLeft = '0';
                }
            }
        }
    }, [show, cssTransition, cssWidth]);
    (0, react_1.useEffect)(() => {
        mounted.current = true;
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { ref: (0, util_1.initRefs)(intRef, extRef), className: classes._, style: styles._, children: [(0, jsx_runtime_1.jsxs)("div", { className: (_a = classes.header) === null || _a === void 0 ? void 0 : _a._, style: (_b = styles.header) === null || _b === void 0 ? void 0 : _b._, children: [(0, jsx_runtime_1.jsx)("div", { className: (_c = classes.title) === null || _c === void 0 ? void 0 : _c._, style: (_d = styles.title) === null || _d === void 0 ? void 0 : _d._, children: title }), (0, jsx_runtime_1.jsx)(Icon_1.default, { className: (_e = classes.close) === null || _e === void 0 ? void 0 : _e._, style: (_f = styles.close) === null || _f === void 0 ? void 0 : _f._, name: name, data: data, icon: 'close', onClick: handleClose })] }), children || content ? ((0, jsx_runtime_1.jsxs)("div", { className: (_g = classes.content) === null || _g === void 0 ? void 0 : _g._, style: (_h = styles.content) === null || _h === void 0 ? void 0 : _h._, children: [children, content] })) : null, footer ? ((0, jsx_runtime_1.jsx)("div", { className: (_j = classes.footer) === null || _j === void 0 ? void 0 : _j._, style: (_k = styles.footer) === null || _k === void 0 ? void 0 : _k._, children: footer })) : null] }));
});
SideBar.displayName = 'SideBar';
exports.default = SideBar;
//# sourceMappingURL=SideBar.js.map