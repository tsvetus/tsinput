import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, forwardRef } from 'react';
import { createLayout, getFormatter } from '../../util';
import Input from '../../lib/Input';
import Icon from '../Icon';
const BASE = 'tsi-edit';
const CLASS = {
    _: BASE,
    wait: `${BASE}-wait`,
    invalid: `${BASE}-invalid`,
    disabled: `${BASE}-disabled`,
    input: {
        _: `${BASE}-input`,
        left: `${BASE}-input-left`,
        right: `${BASE}-input-right`
    },
    icon: {
        _: `${BASE}-icon`,
        left: `${BASE}-icon-left`,
        right: `${BASE}-icon-right`
    }
};
const Edit = forwardRef(({ className, style, layout = '', name, data, value, icon, wait, disabled, invalid, readOnly, placeholder, children, format, onClick, onKeyDown, onIconClick, onInputClick, onInputKeyDown, onChange }, ref) => {
    const formatter = useMemo(() => getFormatter(format), []);
    const isRightInput = useMemo(() => layout.includes('right'), [layout]);
    const isReadOnly = useMemo(() => Boolean(readOnly || wait || disabled), [readOnly, wait, disabled]);
    const [text, internalInvalid] = useMemo(() => {
        const state = formatter.processValue(value);
        return [state.text, state.invalid || invalid];
    }, [formatter, value, invalid]);
    const [classes, styles] = useMemo(() => createLayout([CLASS, className], [style], {
        wait,
        invalid: internalInvalid,
        disabled,
        'input-right': isRightInput,
        'icon-left': isRightInput,
        'input-left': !isRightInput,
        'icon-right': !isRightInput
    }), [className, style, wait, internalInvalid, disabled, isRightInput]);
    const params = useMemo(() => ({ name, data }), [data, name]);
    const handleChange = onChange
        ? (event) => {
            if (!isReadOnly) {
                const state = formatter.processText(event.value);
                onChange({ ...event, text: state.text, value: state.value, invalid: state.invalid, ...params });
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
    const handleInputClick = onInputClick
        ? (event) => {
            onInputClick({ ...event, ...params });
        }
        : undefined;
    const handleInputKeyDown = onInputKeyDown
        ? (event) => {
            onInputKeyDown({ ...event, ...params });
        }
        : undefined;
    const handleIconClick = onIconClick
        ? (event) => {
            onIconClick({ ...event, ...params });
        }
        : undefined;
    const iconComponent = icon ? (_jsx(Icon, { className: classes?.icon, style: styles?.icon, icon: icon, wait: wait, disabled: disabled, invalid: internalInvalid, onClick: handleIconClick })) : undefined;
    const inputComponent = (_jsx(Input, { className: classes?.input?._, style: styles?.input?._, value: text, placeholder: placeholder, readOnly: isReadOnly, name: name, data: data, onChange: handleChange, onClick: handleInputClick, onKeyDown: handleInputKeyDown }));
    return isRightInput ? (_jsxs("div", { ref: ref, className: classes?._, style: styles?._, onClick: handleClick, onKeyDown: handleKeyDown, children: [iconComponent, inputComponent, children] })) : (_jsxs("div", { ref: ref, className: classes?._, style: styles?._, onClick: handleClick, onKeyDown: handleKeyDown, children: [inputComponent, iconComponent, children] }));
});
Edit.displayName = 'Edit';
export default Edit;
//# sourceMappingURL=Edit.js.map