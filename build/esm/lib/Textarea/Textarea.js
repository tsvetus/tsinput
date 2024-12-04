import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, forwardRef } from 'react';
import { mergeClasses, mergeStyles } from '../../util';
const BASE = 'tsi-textarea';
const CLASS = {
    _: BASE
};
const Textarea = forwardRef(({ className, style, name, data, value, readOnly, placeholder, onChange, onClick, onKeyDown }, ref) => {
    const classes = useMemo(() => mergeClasses(CLASS, className), [className]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    const params = useMemo(() => ({ name, data }), [name, data]);
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
    return (_jsx("textarea", { ref: ref, className: classes._, style: styles._, value: value, readOnly: readOnly, placeholder: placeholder, onChange: handleChange, onClick: handleClick, onKeyDown: handleKeyDown }));
});
Textarea.displayName = 'Textarea';
export default Textarea;
//# sourceMappingURL=Textarea.js.map