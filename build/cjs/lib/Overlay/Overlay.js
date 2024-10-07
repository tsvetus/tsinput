"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_transition_group_1 = require("react-transition-group");
const util_1 = require("../../util");
const BASE = 'tsi-overlay';
const CLASS = {
    _: BASE
};
const Overlay = ({ className, style, name, data, offset = 0, timeout = 350, show, persistent, children, onEnter, onExit, onTarget }) => {
    const ref = (0, react_1.useRef)(null);
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, className), [className]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const params = (0, react_1.useMemo)(() => ({ name, data }), [name, data]);
    const handleEnter = () => {
        const target = onTarget === null || onTarget === void 0 ? void 0 : onTarget();
        if (target && ref.current) {
            const rect = target.getBoundingClientRect();
            ref.current.style.left = `${0}px`;
            ref.current.style.right = `${0}px`;
            ref.current.style.top = `${rect.height + offset}px`;
        }
    };
    const handleEntered = () => {
        onEnter === null || onEnter === void 0 ? void 0 : onEnter(Object.assign({}, params));
    };
    const handleExited = () => {
        onExit === null || onExit === void 0 ? void 0 : onExit(Object.assign({}, params));
    };
    return ((0, jsx_runtime_1.jsx)(react_transition_group_1.CSSTransition, { nodeRef: ref, in: show, timeout: timeout, classNames: BASE, unmountOnExit: !persistent, onEnter: handleEnter, onEntered: handleEntered, onExited: handleExited, children: (0, jsx_runtime_1.jsx)("div", { ref: ref, className: classes._, style: styles._, children: children }) }));
};
exports.default = Overlay;
