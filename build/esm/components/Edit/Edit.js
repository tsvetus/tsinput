import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useCallback, forwardRef } from 'react';
import { mergeClasses, mergeStyles } from '../../util';
import Input from '../../lib/Input';
import Icon from '../Icon';
import useLayout from '../../hooks/useLayout';
const BASE = 'tsi-edit';
const CLASS = {
    _: BASE,
    wait: `${BASE}-wait`,
    invalid: `${BASE}-wait`,
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
    const layoutClasses = useMemo(() => mergeClasses(CLASS, className), [className]);
    const layoutStyles = useMemo(() => mergeStyles(style), [style]);
    const mergeLayout = useCallback((key) => {
        switch (key) {
            case 'wait':
                return wait;
            case 'invalid':
                return invalid;
            case 'input-right':
            case 'icon-left':
                return isRightInput;
            case 'input-left':
            case 'icon-right':
                return !isRightInput;
            default:
                return false;
        }
    }, [wait, invalid, isRightInput]);
    const [classes, styles] = useLayout(layoutClasses, layoutStyles, mergeLayout);
    const params = useMemo(() => ({ name, data }), [data, name]);
    const isReadOnly = useMemo(() => Boolean(readOnly || wait), [readOnly, wait]);
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