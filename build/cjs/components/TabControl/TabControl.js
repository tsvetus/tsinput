"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const BASE = 'tsi-tab-control';
const CLASS = {
    _: BASE,
    header: `${BASE}-header`,
    tab: {
        _: `${BASE}-tab`,
        active: `${BASE}-tab-active`
    },
    content: `${BASE}-content`
};
const TabControl = ({ className, style, name, data, options = [], value, onChange }) => {
    var _a, _b, _c, _d;
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, className), [className]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const params = (0, react_1.useMemo)(() => ({ name, data }), [data, name]);
    const activeIndex = (0, react_1.useMemo)(() => (options ? options.findIndex(v => value === (v.key || v.id || v.value || null)) : -1), [options, value]);
    const activeOption = (0, react_1.useMemo)(() => (activeIndex >= 0 ? options[activeIndex] : null), [activeIndex, options]);
    const handleClick = (optionIndex) => (event) => {
        if (activeIndex !== optionIndex && onChange) {
            const option = options[optionIndex];
            onChange(Object.assign(Object.assign(Object.assign({}, event), params), { optionIndex,
                option, value: option.key || option.id || option.value || null }));
        }
    };
    const tabsComponent = options.map((v, i) => {
        var _a, _b, _c, _d;
        const caption = v.caption || v.name || v.label || null;
        if (activeIndex === i) {
            const tabClass = (0, util_1.mergeClasses)(classes.tab, (_a = classes.tab) === null || _a === void 0 ? void 0 : _a.active);
            const tabStyle = (0, util_1.mergeStyles)(styles.tab, (_b = styles.tab) === null || _b === void 0 ? void 0 : _b.active);
            return ((0, jsx_runtime_1.jsx)("div", { className: tabClass === null || tabClass === void 0 ? void 0 : tabClass._, style: tabStyle === null || tabStyle === void 0 ? void 0 : tabStyle._, onClick: handleClick(i), children: caption }, i));
        }
        else {
            return ((0, jsx_runtime_1.jsx)("div", { className: (_c = classes.tab) === null || _c === void 0 ? void 0 : _c._, style: (_d = styles.tab) === null || _d === void 0 ? void 0 : _d._, onClick: handleClick(i), children: caption }, i));
        }
    });
    const contentComponent = (activeOption === null || activeOption === void 0 ? void 0 : activeOption.render) ? ((0, jsx_runtime_1.jsx)("div", { className: (_a = classes.content) === null || _a === void 0 ? void 0 : _a._, style: (_b = styles.content) === null || _b === void 0 ? void 0 : _b._, children: activeOption.render() })) : null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: classes._, style: styles._, children: [(0, jsx_runtime_1.jsx)("div", { className: (_c = classes.header) === null || _c === void 0 ? void 0 : _c._, style: (_d = styles.header) === null || _d === void 0 ? void 0 : _d._, children: tabsComponent }), contentComponent] }));
};
exports.default = TabControl;
//# sourceMappingURL=TabControl.js.map