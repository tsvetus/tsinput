import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useRef } from 'react';
import Label from '../Label';
import { mergeClasses, mergeStyles } from '../../util';
const BASE = 'tsi-check-box';
const CLASS = {
    _: BASE,
    icon: `${BASE}-icon`
};
const CheckBox = ({ className, style, layout, name, data, label = 'CheckBox:', radio = false, wait, disabled, invalid, value, valueChecked = true, valueUnchecked = false, events = 'text icon', onChange }) => {
    const ref = useRef(null);
    const classes = useMemo(() => mergeClasses(CLASS, className), [className]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    const iconSet = useMemo(() => (radio ? ['unselected', 'selected'] : ['unchecked', 'checked']), [radio]);
    const icon = useMemo(() => (value == valueChecked ? iconSet[1] : iconSet[0]), [iconSet, value, valueChecked]);
    const handleChange = (event) => {
        if (onChange && !wait && !disabled) {
            onChange({ ...event, value: value == valueChecked ? valueUnchecked : valueChecked });
        }
    };
    const handleTextClick = (event) => {
        if (events.includes('text') || events.includes('label')) {
            handleChange(event);
        }
    };
    const handleIconClick = (event) => {
        if (events.includes('icon')) {
            handleChange(event);
        }
    };
    return (_jsx(Label, { ref: ref, className: classes, style: styles, layout: layout, name: name, data: data, label: label, icon: icon, wait: wait, disabled: disabled, invalid: invalid, onTextClick: handleTextClick, onIconClick: handleIconClick }));
};
export default CheckBox;
//# sourceMappingURL=CheckBox.js.map