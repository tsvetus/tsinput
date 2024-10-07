import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useCallback, forwardRef } from 'react';
import { mergeClasses, mergeStyles } from '../../util';
import useLayout from '../../hooks/useLayout';
import Text from '../Text';
import Icon from '../Icon';
const BASE = 'tsi-label';
const CLASS = {
    _: `${BASE} ${BASE}-inline`,
    text: {
        _: `${BASE}-text`,
        left: `${BASE}-text-left`,
        right: `${BASE}-text-right`
    },
    icon: {
        _: `${BASE}-icon`,
        left: `${BASE}-icon-left`,
        right: `${BASE}-icon-right`
    }
};
const Inline = forwardRef(({ className, style, layout = '', name, data, text, icon, wait, invalid, children, onClick, onTextClick, onIconClick }, ref) => {
    const isRightLabel = useMemo(() => layout.includes('right'), [layout]);
    const layoutClasses = useMemo(() => mergeClasses(CLASS, className), [className]);
    const layoutStyles = useMemo(() => mergeStyles(style), [style]);
    const mergeLayout = useCallback((key) => {
        switch (key) {
            case 'text-right':
            case 'icon-left':
                return isRightLabel;
            case 'text-left':
            case 'icon-right':
                return !isRightLabel;
            default:
                return false;
        }
    }, [isRightLabel]);
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
    const textComponent = text ? (_jsx(Text, { className: classes.text, style: styles.text, value: text, wait: wait, invalid: invalid, onClick: handleTextClick })) : null;
    const iconComponent = icon ? (_jsx(Icon, { className: classes.icon, style: styles.icon, icon: icon, wait: wait, invalid: invalid, onClick: handleIconClick })) : null;
    return isRightLabel ? (_jsxs("div", { ref: ref, className: classes._, style: styles._, onClick: handleClick, children: [iconComponent, children, textComponent] })) : (_jsxs("div", { ref: ref, className: classes._, style: styles._, onClick: handleClick, children: [textComponent, children, iconComponent] }));
});
Inline.displayName = 'Inline';
export default Inline;
