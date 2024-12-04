import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { mergeClasses, mergeStyles } from '../../util';
const BASE = 'tsi-group';
const CLASS = {
    _: BASE
};
const Group = ({ className, style, children }) => {
    const classes = useMemo(() => mergeClasses(CLASS, className), [className]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    return (_jsx("div", { className: classes._, style: styles._, children: children }));
};
export default Group;
//# sourceMappingURL=Group.js.map