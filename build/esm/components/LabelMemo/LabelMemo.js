import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { mergeClasses, mergeStyles, selectItems } from '../../util';
import Label from '../Label';
import Memo from '../Memo';
const LabelMemo = ({ className, style, layout = 'border', name, data, label, icon, wait, invalid, readOnly, placeholder, value, onLabelClick, onIconClick, onChange, onMemoClick, onMemoKeyDown }) => {
    const layoutLabel = useMemo(() => selectItems(layout, ['top', 'border', 'right'], ['top']), [layout]);
    const classes = useMemo(() => mergeClasses(className), [className]);
    const classesLabel = useMemo(() => mergeClasses(classes._, classes.label), [classes]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    const stylesLabel = useMemo(() => mergeStyles(styles._, styles.label), [styles]);
    return (_jsx(Label, { className: classesLabel, style: stylesLabel, layout: layoutLabel, name: name, data: data, text: label, icon: icon, wait: wait, invalid: invalid, onTextClick: onLabelClick, onIconClick: onIconClick, children: _jsx(Memo, { className: classes.memo, style: styles.memo, name: name, data: data, wait: wait, invalid: invalid, placeholder: placeholder, readOnly: readOnly, value: value, onChange: onChange, onClick: onMemoClick, onKeyDown: onMemoKeyDown }) }));
};
export default LabelMemo;
//# sourceMappingURL=LabelMemo.js.map