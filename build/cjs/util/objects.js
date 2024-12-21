"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectItems = exports.asArray = void 0;
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
//# sourceMappingURL=objects.js.map