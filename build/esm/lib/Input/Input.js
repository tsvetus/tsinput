import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, forwardRef } from 'react';
import { mergeClasses, mergeStyles } from '../../util';
const BASE = 'tsi-input';
const CLASS = {
    _: BASE
};
const Input = forwardRef(({ className, style, name, data, value = '', readOnly, placeholder, onChange, onClick, onKeyDown }, ref) => {
    const classes = useMemo(() => mergeClasses(CLASS, className), [className]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    const params = useMemo(() => ({ name, data }), [data, name]);
    const handleChange = onChange
        ? (event) => {
            onChange({ ...event, ...params, value: event.target.value });
        }
        : undefined;
    const handleClick = onClick
        ? (event) => {
            onClick({ ...event, ...params });
        }
        : undefined;
    const handleKeyDown = onKeyDown
        ? (event) => {
            onKeyDown({ ...event, ...params });
        }
        : undefined;
    return (_jsx("input", { ref: ref, className: classes._, style: styles._, type: 'text', value: value || '', readOnly: readOnly, placeholder: placeholder, onChange: handleChange, onClick: handleClick, onKeyDown: handleKeyDown }));
});
Input.displayName = 'Input';
export default Input;
//# sourceMappingURL=Input.js.map