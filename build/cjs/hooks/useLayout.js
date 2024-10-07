"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const util_1 = require("../util");
const collapseClass = (source, check, preffix = '') => {
    const result = { _: source === null || source === void 0 ? void 0 : source._ };
    for (const key in source) {
        if ('_' !== key) {
            const child = source[key];
            const node = preffix ? `${preffix}-${key}` : key;
            if (1 < Object.keys(child).length) {
                result[key] = collapseClass(child, check, node);
            }
            else if (check(node)) {
                result._ = (0, util_1.appendString)(result._, child._);
            }
        }
    }
    return result;
};
const collapseStyle = (source, check, preffix = '') => {
    const result = { _: source === null || source === void 0 ? void 0 : source._ };
    for (const key in source) {
        if ('_' !== key) {
            const child = source[key];
            const node = preffix ? `${preffix}-${key}` : key;
            if (1 < Object.keys(child).length) {
                result[key] = collapseStyle(child, check, node);
            }
            else if (check(node)) {
                result._ = Object.assign(Object.assign({}, result._), child._);
            }
        }
    }
    return result;
};
const useLayout = (baseClass, baseStyle, check) => {
    const classes = (0, react_1.useMemo)(() => collapseClass(baseClass, check), [baseClass, check]);
    const styles = (0, react_1.useMemo)(() => collapseStyle(baseStyle, check), [baseStyle, check]);
    return [classes, styles];
};
exports.default = useLayout;
