import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useCallback, forwardRef } from 'react';
import Textarea from '../../lib/Textarea';
import { mergeClasses, mergeStyles } from '../../util';
import useLayout from '../../hooks/useLayout';
const BASE = 'tsi-memo';
const CLASS = {
    _: `${BASE}`,
    invalid: `${BASE}-invalid`,
    wait: `${BASE}-wait`
};
const Memo = forwardRef(({ className, style, name, data, value, placeholder, readOnly, wait, invalid, onChange, onClick, onKeyDown }, ref) => {
    const layoutClasses = useMemo(() => mergeClasses(CLASS, className), [className]);
    const layoutStyles = useMemo(() => mergeStyles(style), [style]);
    const mergeLayout = useCallback((key) => {
        switch (key) {
            case 'wait':
                return wait;
            case 'invalid':
                return invalid;
            default:
                return false;
        }
    }, [wait, invalid]);
    const [classes, styles] = useLayout(layoutClasses, layoutStyles, mergeLayout);
    const params = useMemo(() => ({ name, data }), [data, name]);
    const isReadOnly = useMemo(() => Boolean(readOnly || wait || !onChange), [onChange, readOnly, wait]);
    const handleChange = onChange
        ? (event) => {
            if (!isReadOnly) {
                onChange({ ...event, ...params, value: event.target.value });
            }
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
    return (_jsx(Textarea, { ref: ref, className: classes, style: styles, value: value, placeholder: placeholder, readOnly: isReadOnly, onChange: handleChange, onClick: handleClick, onKeyDown: handleKeyDown }));
});
Memo.displayName = 'Memo';
export default Memo;
//# sourceMappingURL=Memo.js.map