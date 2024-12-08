import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, forwardRef } from 'react';
import { createLayout } from '../../util';
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
const Inline = forwardRef(({ className, style, layout = '', name, data, label, text, icon, wait, disabled, invalid, children, onClick, onTextClick, onIconClick }, ref) => {
    const isRightLabel = useMemo(() => layout.includes('right'), [layout]);
    const [classes, styles] = useMemo(() => createLayout([CLASS, className], [style], {
        'text-right': isRightLabel,
        'icon-left': isRightLabel,
        'text-left': !isRightLabel,
        'icon-right': !isRightLabel
    }), [className, isRightLabel, style]);
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
    const textComponent = labelText ? (_jsx(Text, { className: textClasses, style: textStyles, name: name, data: data, value: labelText, wait: wait, disabled: disabled, invalid: invalid, onClick: handleTextClick })) : null;
    const iconComponent = icon ? (_jsx(Icon, { className: classes.icon, style: styles.icon, name: name, data: data, icon: icon, wait: wait, disabled: disabled, invalid: invalid, onClick: handleIconClick })) : null;
    return isRightLabel ? (_jsxs("div", { ref: ref, className: classes._, style: styles._, onClick: handleClick, children: [iconComponent, children, textComponent] })) : (_jsxs("div", { ref: ref, className: classes._, style: styles._, onClick: handleClick, children: [textComponent, children, iconComponent] }));
});
Inline.displayName = 'Inline';
export default Inline;
//# sourceMappingURL=Inline.js.map