const appendString = (target, string) => {
    const suffix = (string ?? '').trim();
    if (suffix) {
        return target ? `${target} ${suffix}` : suffix;
    }
    else {
        return target;
    }
};
export { appendString };
