"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const BASE = 'tsi-text';
const CLASS = {
    _: BASE,
    invalid: `${BASE}-invalid`,
    wait: `${BASE}-wait`
};
const Text = ({ className, style, name, data, wait, invalid, value, onClick, onKeyDown }) => {
    const [classes, styles] = (0, react_1.useMemo)(() => (0, util_1.createLayout)([CLASS, className], [style], {
        wait: wait,
        invalid: invalid
    }), [className, style]);
    const params = (0, react_1.useMemo)(() => ({ name, data }), [data, name]);
    const handleClick = onClick
        ? (event) => {
            if (!wait) {
                onClick(Object.assign(Object.assign({}, event), params));
            }
        }
        : undefined;
    const handleKeyDown = onKeyDown
        ? (event) => {
            if (!wait) {
                onKeyDown(Object.assign(Object.assign({}, event), params));
            }
        }
        : undefined;
    return ((0, jsx_runtime_1.jsx)("div", { className: classes._, style: styles._, onClick: handleClick, onKeyDown: handleKeyDown, children: value }));
};
exports.default = Text;
//# sourceMappingURL=Text.js.map