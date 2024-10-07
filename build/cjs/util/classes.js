"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeClasses = void 0;
const strings_1 = require("./strings");
const normalize = (source) => {
    const result = { _: '' };
    if (source) {
        if ('object' === typeof source) {
            for (const [key, val] of Object.entries(source)) {
                if ('_' === key) {
                    result._ = (0, strings_1.appendString)(result._, normalize(val)._);
                }
                else {
                    result[key] = normalize(val);
                }
            }
        }
        else if ('string' === typeof source) {
            result._ = source.trim();
        }
    }
    return result;
};
const merge = (target, source) => {
    const result = Object.assign(target || { _: '' });
    for (const [key, val] of Object.entries(source)) {
        if ('_' === key) {
            result._ = (0, strings_1.appendString)(result._, val);
        }
        else {
            result[key] = merge(result[key], val);
        }
    }
    return result;
};
const mergeClasses = (...classes) => {
    const normalizedClasses = classes.filter(cls => cls).map(cls => normalize(cls));
    let result = { _: '' };
    for (const cls of normalizedClasses) {
        result = merge(result, cls);
    }
    return result;
};
exports.mergeClasses = mergeClasses;
