import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { mergeClasses, mergeStyles } from '../../util';
import Label from '../Label';
import Icon from '../Icon';
/** Label icon component */
const LabelIcon = ({ className, style, name, data, wait, invalid, label, icon }) => {
    // Restructure classes and styles
    const classes = useMemo(() => mergeClasses(className), [className]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    // Construct props for Label component
    // Use root classes and styles for Label component
    const labelProps = useMemo(() => {
        const labelClass = mergeClasses(classes?._, classes?.label);
        const labelStyle = mergeClasses(styles?._, styles?.label);
        return { className: labelClass, style: labelStyle, name, data, wait, invalid, ...label };
    }, [classes, styles, name, data, wait, invalid, label]);
    // Construct props for Icon component
    const iconProps = useMemo(() => {
        return { className: classes?.icon, style: styles?.icon, name, data, wait, invalid, ...icon };
    }, [classes, styles, name, data, wait, invalid, icon]);
    // Render LabelIcon component
    return (_jsx(Label, { ...labelProps, children: _jsx(Icon, { ...iconProps }) }));
};
export default LabelIcon;
//# sourceMappingURL=LabelIcon.js.map