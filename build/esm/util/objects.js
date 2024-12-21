const asArray = (source) => (Array.isArray(source) ? source : source ? source.split(' ') : []);
const selectItems = (source, props = [], add = []) => {
    const result = asArray(source).filter(v => props.includes(v));
    for (const a of add) {
        if (!result.includes(a))
            result.push(a);
    }
    return result;
};
export { asArray, selectItems };
//# sourceMappingURL=objects.js.map