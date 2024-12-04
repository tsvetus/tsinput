"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeStyles = void 0;
const normalize = (source) => {
    const result = { _: undefined };
    if (source) {
        if ('object' === typeof source) {
            for (const [key, val] of Object.entries(source)) {
                if ('_' === key) {
                    result._ = Object.assign(Object.assign({}, result._), normalize(val)._);
                }
                else if ('string' === typeof val) {
                    result._ = Object.assign(Object.assign({}, result._), { [key]: val });
                }
                else {
                    result[key] = normalize(val);
                }
            }
        }
    }
    return result;
};
const merge = (target, source) => {
    const result = Object.assign(target || {});
    for (const [key, val] of Object.entries(source)) {
        if ('_' === key) {
            result._ = Object.assign(Object.assign({}, result._), val);
        }
        else {
            result[key] = merge(result[key], val);
        }
    }
    return result;
};
const mergeStyles = (...styles) => {
    const normalizedStyles = styles.filter(sty => sty).map(sty => normalize(sty));
    let result = { _: undefined };
    for (const sty of normalizedStyles) {
        result = merge(result, sty);
    }
    return result;
};
exports.mergeStyles = mergeStyles;
//# sourceMappingURL=styles.js.map