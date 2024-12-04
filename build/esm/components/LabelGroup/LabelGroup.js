import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { mergeClasses, mergeStyles, selectItems } from '../../util';
import Group from '../../lib/Group';
import Label from '../Label';
const LabelGroup = ({ className, style, layout = 'border', name, data, label, icon, children, onLabelClick, onIconClick }) => {
    const layoutLabel = useMemo(() => selectItems(layout, ['top', 'border', 'right'], ['top']), [layout]);
    const classes = useMemo(() => mergeClasses(className), [className]);
    const classesLabel = useMemo(() => mergeClasses(classes._, classes.label), [classes]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    const stylesLabel = useMemo(() => mergeStyles(styles._, styles.label), [styles]);
    return (_jsx(Label, { className: classesLabel, style: stylesLabel, layout: layoutLabel, name: name, data: data, text: label, icon: icon, onTextClick: onLabelClick, onIconClick: onIconClick, children: _jsx(Group, { className: classes.group, style: styles.group, children: children }) }));
};
export default LabelGroup;
//# sourceMappingURL=LabelGroup.js.map