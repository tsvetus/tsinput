import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, forwardRef } from 'react';
import { createLayout } from '../../util';
import Input from '../../lib/Input';
import Icon from '../Icon';
const BASE = 'tsi-edit';
const CLASS = {
    _: BASE,
    wait: `${BASE}-wait`,
    invalid: `${BASE}-invalid`,
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
const Edit = forwardRef(({ className, style, layout = '', name, data, value, icon, wait, invalid, readOnly, placeholder, children, onClick, onKeyDown, onIconClick, onInputClick, onInputKeyDown, onChange }, ref) => {
    const isRightInput = useMemo(() => layout.includes('right'), [layout]);
    const isReadOnly = useMemo(() => Boolean(readOnly || wait), [readOnly, wait]);
    const [classes, styles] = useMemo(() => createLayout([CLASS, className], [style], {
        wait: wait,
        invalid: invalid,
        'input-right': isRightInput,
        'icon-left': isRightInput,
        'input-left': !isRightInput,
        'icon-right': !isRightInput
    }), [className, style]);
    const params = useMemo(() => ({ name, data }), [data, name]);
    const handleChange = onChange
        ? (event) => {
            if (!isReadOnly) {
                onChange({ ...event, ...params });
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
    const iconComponent = icon ? (_jsx(Icon, { className: classes?.icon, style: styles?.icon, icon: icon, wait: wait, invalid: invalid, onClick: handleIconClick })) : undefined;
    const inputComponent = (_jsx(Input, { className: classes?.input?._, style: styles?.input?._, value: `${value ?? ''}`, placeholder: placeholder, readOnly: isReadOnly, name: name, data: data, onChange: handleChange, onClick: handleInputClick, onKeyDown: handleInputKeyDown }));
    return isRightInput ? (_jsxs("div", { ref: ref, className: classes?._, style: styles?._, onClick: handleClick, onKeyDown: handleKeyDown, children: [iconComponent, inputComponent, children] })) : (_jsxs("div", { ref: ref, className: classes?._, style: styles?._, onClick: handleClick, onKeyDown: handleKeyDown, children: [inputComponent, iconComponent, children] }));
});
Edit.displayName = 'Edit';
export default Edit;
//# sourceMappingURL=Edit.js.map