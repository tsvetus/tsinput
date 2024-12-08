import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useState, useMemo, useCallback } from 'react';
import { mergeClasses, mergeStyles, asArray } from '../../util';
import Overlay from '../../lib/Overlay';
import List from '../../lib/List';
import Edit from '../Edit';
const ListBox = ({ className, style, layout, name, data, value, wait, disabled, invalid, readOnly = false, placeholder, valueField = 'value key code id', nameField = 'name label text caption', options, onClick, onKeyDown, onIconClick, onInputClick, onInputKeyDown, onChange, onSelect }) => {
    const editRef = useRef(null);
    const classes = useMemo(() => mergeClasses(className), [className]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    const originalOptions = useMemo(() => options || [], [options]);
    const getOriginalOption = useCallback((value) => {
        const fields = asArray(valueField);
        return originalOptions.find(option => {
            if (option && 'object' === typeof option) {
                const field = fields.find(f => option[f]);
                return field ? value === option[field] : false;
            }
            else {
                return value === option;
            }
        });
    }, [originalOptions]);
    const listOptions = useMemo(() => {
        const vf = asArray(valueField);
        const nf = asArray(nameField);
        return originalOptions
            .map((option, index) => {
            if (null === option) {
                return { value: option, name: `null`, index };
            }
            else if (undefined === option) {
                return { value: option, name: `undefined`, index };
            }
            else if ('string' === typeof option || 'number' === typeof option) {
                return { value: option, name: `${option}`, index };
            }
            else if ('object' === typeof option) {
                const [v, n] = [vf.find(v => option[v]), nf.find(n => option[n])];
                return v && n ? { value: option[v], name: option[n], index } : null;
            }
            else
                return null;
        })
            .filter(Boolean);
    }, [originalOptions, valueField, nameField]);
    const [optionIndex, optionName] = useMemo(() => {
        const index = listOptions.findIndex(v => value === v?.value);
        const name = index >= 0 ? listOptions[index]?.name : null;
        return [index, 'string' === typeof name ? name : ''];
    }, [value, listOptions]);
    const canShowOverlay = !readOnly && listOptions.length > 0 && !wait && !disabled;
    const [showOverlay, setShowOverlay] = useState(false);
    if (!canShowOverlay && showOverlay) {
        setShowOverlay(false);
    }
    const handleKeyDown = (event) => {
        onKeyDown?.(event);
        if (!showOverlay && 'Enter' === event.nativeEvent.key) {
            event.nativeEvent.stopPropagation();
            event.nativeEvent.preventDefault();
            setShowOverlay(true);
        }
    };
    const handleIconClick = (event) => {
        onIconClick?.(event);
        event.nativeEvent.stopPropagation();
        event.nativeEvent.preventDefault();
        setShowOverlay(!showOverlay);
    };
    const handleInputClick = (event) => {
        onInputClick?.(event);
        event.nativeEvent.stopPropagation();
        event.nativeEvent.preventDefault();
        setShowOverlay(!showOverlay);
    };
    const handleListClose = (event) => {
        const newValue = listOptions[optionIndex]?.value;
        const newOption = getOriginalOption(newValue);
        onChange?.({
            ...event,
            name,
            data,
            value: newValue,
            option: newOption
        });
        setShowOverlay(false);
    };
    const handleListChange = (event) => {
        const newIndex = event.optionIndex ?? -1;
        const newValue = listOptions[newIndex]?.value;
        const newOption = getOriginalOption(newValue);
        const params = {
            ...event,
            name,
            data,
            value: newValue,
            option: newOption
        };
        if (newIndex >= 0 && newIndex !== optionIndex) {
            onChange?.(params);
        }
        onSelect?.(params);
        setShowOverlay(false);
    };
    return (_jsx(Edit, { ref: editRef, className: classes._, style: styles._, layout: layout, name: name, data: data, icon: showOverlay ? 'angle-up' : 'angle-down', wait: wait, invalid: invalid, disabled: disabled, readOnly: true, placeholder: placeholder, value: optionName, onClick: onClick, onKeyDown: handleKeyDown, onIconClick: handleIconClick, onInputClick: handleInputClick, onInputKeyDown: onInputKeyDown, children: _jsx(Overlay, { className: classes.overlay, style: styles.overlay, show: showOverlay, onTarget: () => editRef.current, children: _jsx(List, { className: classes.list, style: styles.list, optionIndex: optionIndex, options: listOptions, onClose: handleListClose, onChange: handleListChange }) }) }));
};
export default ListBox;
//# sourceMappingURL=ListBox.js.map