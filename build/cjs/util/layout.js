"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLayout = void 0;
const strings_1 = require("./strings");
const classes_1 = require("./classes");
const styles_1 = require("./styles");
const collapseClass = (source, schema) => {
    const result = { _: source === null || source === void 0 ? void 0 : source._ };
    for (const key in source) {
        if ('_' !== key) {
            if (source[key] && schema[key]) {
                if ('object' === typeof (schema === null || schema === void 0 ? void 0 : schema[key])) {
                    result[key] = collapseClass(source[key], schema[key]);
                }
                else if (schema[key]) {
                    result._ = (0, strings_1.appendString)(result._, source[key]._);
                }
            }
        }
    }
    return result;
};
const collapseStyle = (source, schema) => {
    const result = { _: source === null || source === void 0 ? void 0 : source._ };
    for (const key in source) {
        if ('_' !== key) {
            if (source[key] && schema[key]) {
                if ('object' === typeof (schema === null || schema === void 0 ? void 0 : schema[key])) {
                    result[key] = collapseStyle(source[key], schema[key]);
                }
                else if (schema[key]) {
                    result._ = Object.assign(Object.assign({}, result._), source[key]._);
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