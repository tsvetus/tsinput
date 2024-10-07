"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const BASE = 'tsi-content';
const CLASS = {
    _: `${BASE}`
};
const Content = (0, react_1.forwardRef)(({ className, style, children }, extRef) => {
    const mounted = (0, react_1.useRef)(false);
    const selfRef = (0, react_1.useRef)(null);
    const topRef = (0, react_1.useRef)(null);
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, className), [className]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    (0, react_1.useEffect)(() => {
        if (!mounted.current) {
            topRef.current = (0, util_1.findElement)('tsi-top-bar');
        }
    }, []);
    (0, react_1.useEffect)(() => {
        var _a;
        if (!mounted.current) {
            if (selfRef.current) {
                if (topRef.current) {
                    const rect = (_a = topRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
                    selfRef.current.style.top = `${rect.height}px`;
                }
                selfRef.current.style.visibility = 'visible';
            }
        }
    }, []);
    (0, react_1.useEffect)(() => {
        mounted.current = true;
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { ref: (0, util_1.initRefs)(selfRef, extRef), className: classes._, style: styles._, children: children }));
});
Content.displayName = 'Content';
exports.default = Content;
