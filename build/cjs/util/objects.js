"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = exports.selectItems = exports.asArray = exports.selectProps = void 0;
const selectProps = (obj, props) => {
    if (obj && props) {
        const result = {};
        for (const [key, val] of Object.entries(obj)) {
            if (props.includes(key)) {
                result[key] = val;
            }
        }
        return result;
    }
    else {
        return obj || {};
    }
};
exports.selectProps = selectProps;
const asArray = (source) => (Array.isArray(source) ? source : source ? source.split(' ') : []);
exports.asArray = asArray;
const selectItems = (source, props = [], add = []) => {
    const result = asArray(source).filter(v => props.includes(v));
    for (const a of add) {
        if (!result.includes(a))
            result.push(a);
    }
    return result;
};
exports.selectItems = selectItems;
const stringify = (obj, props) => {
    return JSON.stringify(selectProps(obj, props));
};
exports.stringify = stringify;
