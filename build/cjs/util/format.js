"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormatter = void 0;
const getFormatter = (format) => {
    const hasEmptyValue = format && 'emptyValue' in format;
    const hasRegexp = format && 'regexp' in format;
    const state = {
        text: '',
        value: hasEmptyValue ? format === null || format === void 0 ? void 0 : format.emptyValue : '',
        invalid: false
    };
    const textInvalid = (text) => {
        var _a;
        if (format) {
            if (format.required) {
                if (!text || text.trim() === '') {
                    state.invalid = true;
                    return state.invalid;
                }
            }
            if (hasRegexp && !((_a = format.regexp) === null || _a === void 0 ? void 0 : _a.test(text || ''))) {
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
        state.text = hasEmptyValue && format.emptyValue === value ? '' : (value === null || value === void 0 ? void 0 : value.toString()) || '';
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
exports.getFormatter = getFormatter;
//# sourceMappingURL=format.js.map