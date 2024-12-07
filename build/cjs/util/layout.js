"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLayout = void 0;
const strings_1 = require("./strings");
const classes_1 = require("./classes");
const styles_1 = require("./styles");
const collapseClass = (source, schema, preffix = '') => {
    const result = { _: source === null || source === void 0 ? void 0 : source._ };
    for (const key in source) {
        if ('_' !== key) {
            const child = source[key];
            if (child) {
                const node = preffix ? `${preffix}-${key}` : key;
                if (node in schema) {
                    if (schema[node]) {
                        result._ = (0, strings_1.appendString)(result._, child._);
                    }
                }
                else {
                    result[key] = collapseClass(child, schema, node);
                }
            }
        }
    }
    return result;
};
const collapseStyle = (source, schema, preffix = '') => {
    const result = { _: source === null || source === void 0 ? void 0 : source._ };
    for (const key in source) {
        if ('_' !== key) {
            const child = source[key];
            if (child) {
                const node = preffix ? `${preffix}-${key}` : key;
                if (node in schema) {
                    if (schema[node]) {
                        result._ = Object.assign(Object.assign({}, result._), child._);
                    }
                }
                else {
                    result[key] = collapseStyle(child, schema, node);
                }
            }
        }
    }
    return result;
};
const createLayout = (classes, styles, schema, callback) => {
    const mergedClasses = (0, classes_1.mergeClasses)(...classes);
    const mergedStyles = (0, styles_1.mergeStyles)(...styles);
    if (schema) {
        const collapsedClasses = collapseClass(mergedClasses, schema);
        const collapsedStyles = collapseStyle(mergedStyles, schema);
        if (callback) {
            callback(collapsedClasses, collapsedStyles);
        }
        return [collapsedClasses, collapsedStyles];
    }
    else {
        if (callback) {
            callback(mergedClasses, mergedStyles);
        }
        return [mergedClasses, mergedStyles];
    }
};
exports.createLayout = createLayout;
//# sourceMappingURL=layout.js.map