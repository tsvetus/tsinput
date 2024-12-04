"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRefs = exports.findElement = void 0;
const findElement = (className) => {
    const element = document.getElementsByClassName(className);
    return element === null || element === void 0 ? void 0 : element[0];
};
exports.findElement = findElement;
const initRefs = (...refs) => (element) => {
    refs.forEach(ref => {
        if (ref) {
            const legacyRef = ref;
            const objectRef = ref;
            if ('current' in objectRef) {
                objectRef.current = element;
            }
            else if (legacyRef) {
                legacyRef(element);
            }
        }
    });
};
exports.initRefs = initRefs;
//# sourceMappingURL=elements.js.map