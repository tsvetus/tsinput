import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, forwardRef } from 'react';
import Textarea from '../../lib/Textarea';
import { createLayout } from '../../util';
const BASE = 'tsi-memo';
const CLASS = {
    _: `${BASE}`,
    invalid: `${BASE}-invalid`,
    wait: `${BASE}-wait`
};
const Memo = forwardRef(({ className, style, name, data, value, placeholder, readOnly, wait, invalid, disabled, onChange, onClick, onKeyDown }, ref) => {
    const isReadOnly = useMemo(() => Boolean(readOnly || wait || !onChange), [onChange, readOnly, wait]);
    const [classes, styles] = useMemo(() => createLayout([CLASS, className], [style], {
        wait,
        invalid,
        disabled
    }), [className, style, wait, invalid, disabled]);
    const params = useMemo(() => ({ name, data }), [data, name]);
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