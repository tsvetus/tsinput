"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendString = void 0;
const appendString = (target, string) => {
    const suffix = (string !== null && string !== void 0 ? string : '').trim();
    if (suffix) {
        return target ? `${target} ${suffix}` : suffix;
    }
    else {
        return target;
    }
};
exports.appendString = appendString;
