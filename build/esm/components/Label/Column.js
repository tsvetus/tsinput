import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useCallback, forwardRef } from 'react';
import { mergeClasses, mergeStyles } from '../../util';
import useLayout from '../../hooks/useLayout';
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
const Column = forwardRef(({ className, style, layout = '', name, data, text, icon, wait, invalid, children, onClick, onTextClick, onIconClick }, ref) => {
    const isRightLabel = useMemo(() => layout.includes('right'), [layout]);
    const isBorder = useMemo(() => layout.includes('border'), [layout]);
    const layoutClasses = useMemo(() => mergeClasses(CLASS, className), [className]);
    const layoutStyles = useMemo(() => mergeStyles(style), [style]);
    const mergeLayout = useCallback((key) => {
        switch (key) {
            case 'header-border':
            case 'text-border':
            case 'icon-border':
                return isBorder;
            default:
                return false;
        }
    }, [isBorder]);
    const [classes, styles] = useLayout(layoutClasses, layoutStyles, mergeLayout);
    const params = useMemo(() => ({ name, data }), [data, name]);
    const handleClick = onClick
        ? (event) => {
            if (!wait) {
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
    const textComponent = text ? (_jsx(Text, { className: classes.text, style: styles.text, value: text, wait: wait, invalid: invalid, onClick: handleTextClick })) : (_jsx("div", {}));
    const iconComponent = icon ? (_jsx(Icon, { className: classes.icon, style: styles.icon, icon: icon, wait: wait, invalid: invalid, onClick: handleIconClick })) : (_jsx("div", {}));
    const headerComponent = isRightLabel ? (_jsxs("div", { className: classes.header?._, style: styles.header?._, children: [iconComponent, textComponent] })) : (_jsxs("div", { className: classes.header?._, style: styles.header?._, children: [textComponent, iconComponent] }));
    return (_jsxs("div", { ref: ref, className: classes._, style: styles._, onClick: handleClick, children: [headerComponent, children] }));
});
Column.displayName = 'Column';
export default Column;
//# sourceMappingURL=Column.js.map