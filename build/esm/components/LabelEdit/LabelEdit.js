import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { mergeClasses, mergeStyles } from '../../util';
import Label from '../Label';
import Edit from '../Edit';
const LabelEdit = ({ className, style, labelLayout, editLayout, name, data, label, labelIcon, editIcon, wait, invalid, placeholder, children, value, onLabelClick, onLabelIconClick, onEditClick, onEditIconClick, onInputClick, onInputKeyDown, onChange }) => {
    const classes = useMemo(() => mergeClasses(className), [className]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    const labelClass = useMemo(() => mergeClasses(classes.label, classes._), [classes]);
    const labelStyle = useMemo(() => mergeStyles(styles.label, styles._), [styles]);
    return (_jsx(Label, { className: labelClass, style: labelStyle, layout: labelLayout, name: name, data: data, text: label, icon: labelIcon, wait: wait, invalid: invalid, onClick: onLabelClick, onIconClick: onLabelIconClick, children: _jsx(Edit, { className: classes.edit, style: styles.edit, layout: editLayout, name: name, data: data, icon: editIcon, wait: wait, invalid: invalid, placeholder: placeholder, value: value, onClick: onEditClick, onIconClick: onEditIconClick, onInputClick: onInputClick, onInputKeyDown: onInputKeyDown, onChange: onChange, children: children }) }));
};
export default LabelEdit;
