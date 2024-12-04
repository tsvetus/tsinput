import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, forwardRef } from 'react';
import Inline from './Inline';
import Column from './Column';
/**
 * Label component. Provides a simple way to add labels to React components.
 */
const Label = forwardRef(({ className, style, layout = '', name, data, text, icon, wait, invalid, children, onClick, onTextClick, onIconClick }, ref) => {
    const isColumn = useMemo(() => layout.includes('top') || layout.includes('border'), [layout]);
    return isColumn ? (_jsx(Column, { ref: ref, className: className, style: style, layout: layout, name: name, data: data, text: text, icon: icon, wait: wait, invalid: invalid, onClick: onClick, onTextClick: onTextClick, onIconClick: onIconClick, children: children })) : (_jsx(Inline, { ref: ref, className: className, style: style, layout: layout, name: name, data: data, text: text, icon: icon, wait: wait, invalid: invalid, onClick: onClick, onTextClick: onTextClick, onIconClick: onIconClick, children: children }));
});
Label.displayName = 'Label';
export default Label;
//# sourceMappingURL=Label.js.map