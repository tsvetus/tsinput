import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, forwardRef } from 'react';
import { createLayout } from '../../util';
import Text from '../Text';
import Icon from '../Icon';
const BASE = 'tsi-label';
const CLASS = {
    _: `${BASE} ${BASE}-column`,
    header: {
        _: `${BASE}-header`,
        border: `${BASE}-header-border`
    },
    text: {
        _: `${BASE}-text ${BASE}-text-top`,
        border: `${BASE}-text-border`
    },
    icon: {
        _: `${BASE}-icon ${BASE}-icon-top`,
        border: `${BASE}-icon-border`
    }
};
const Column = forwardRef(({ className, style, layout = '', name, data, label, text, icon, wait, disabled, invalid, children, onClick, onTextClick, onIconClick }, ref) => {
    const [isRightLabel, isBorder] = useMemo(() => [layout.includes('right'), layout.includes('border')], [layout]);
    const [classes, styles] = useMemo(() => createLayout([CLASS, className], [style], {
        'header-border': isBorder,
        'text-border': isBorder,
        'icon-border': isBorder
    }), [className, style]);
    const [textClasses, textStyles] = useMemo(() => createLayout([classes.text, classes.label], [styles.text, styles.label]), [classes, styles]);
    const params = useMemo(() => ({ name, data }), [data, name]);
    const handleClick = onClick
        ? (event) => {
            if (!wait && !disabled) {
                onClick({ ...event, ...params });
            }
        }
        : undefined;
    const handleTextClick = onTextClick
        ? (event) => {
            onTextClick({ ...event, ...params });
        }
        : undefined;
    const handleIconClick = onIconClick
        ? (event) => {
            onIconClick({ ...event, ...params });
        }
        : undefined;
    const labelText = text || label;
    const textComponent = labelText ? (_jsx(Text, { className: textClasses, style: textStyles, name: name, data: data, value: labelText, wait: wait, disabled: disabled, invalid: invalid, onClick: handleTextClick })) : (_jsx("div", {}));
    const iconComponent = icon ? (_jsx(Icon, { className: classes.icon, style: styles.icon, name: name, data: data, icon: icon, wait: wait, disabled: disabled, invalid: invalid, onClick: handleIconClick })) : (_jsx("div", {}));
    const headerComponent = isRightLabel ? (_jsxs("div", { className: classes.header?._, style: styles.header?._, children: [iconComponent, textComponent] })) : (_jsxs("div", { className: classes.header?._, style: styles.header?._, children: [textComponent, iconComponent] }));
    return (_jsxs("div", { ref: ref, className: classes._, style: styles._, onClick: handleClick, children: [headerComponent, children] }));
});
Column.displayName = 'Column';
export default Column;
//# sourceMappingURL=Column.js.map