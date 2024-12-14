const getFormatter = (format) => {
    const hasEmptyValue = format && 'emptyValue' in format;
    const hasRegexp = format && 'regexp' in format;
    const state = {
        text: '',
        value: hasEmptyValue ? format?.emptyValue : '',
        invalid: false
    };
    const textInvalid = (text) => {
        if (format) {
            if (format.required) {
                if (!text || text.trim() === '') {
                    state.invalid = true;
                    return state.invalid;
                }
            }
            if (hasRegexp && !format.regexp?.test(text || '')) {
                state.invalid = true;
                return state.invalid;
            }
        }
        state.invalid = false;
        return state.invalid;
    };
    const processText = (text) => {
        state.text = text || '';
        state.value = !text && hasEmptyValue ? format.emptyValue : text;
        state.invalid = textInvalid(state.text);
        return state;
    };
    const processValue = (value) => {
        state.text = hasEmptyValue && format.emptyValue === value ? '' : value?.toString() || '';
        state.value = value;
        state.invalid = textInvalid(state.text);
        return state;
    };
    return {
        processText,
        processValue,
        state
    };
};
export { getFormatter };
//# sourceMappingURL=format.js.map