"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Page = ({ options = [], value }) => {
    const activeIndex = (0, react_1.useMemo)(() => (options ? options.findIndex(v => value === ((v === null || v === void 0 ? void 0 : v.key) || (v === null || v === void 0 ? void 0 : v.id) || (v === null || v === void 0 ? void 0 : v.value) || null)) : -1), [options, value]);
    const activeOption = (0, react_1.useMemo)(() => (activeIndex >= 0 ? options[activeIndex] : null), [activeIndex, options]);
    return (activeOption === null || activeOption === void 0 ? void 0 : activeOption.render) ? activeOption.render() : null;
};
exports.default = Page;
//# sourceMappingURL=Page.js.map