const findElement = (className) => {
    const element = document.getElementsByClassName(className);
    return element?.[0];
};
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
export { findElement, initRefs };
//# sourceMappingURL=elements.js.map