import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { createLayout } from '../../util';
const BASE = 'tsi-text';
const CLASS = {
    _: BASE,
    invalid: `${BASE}-invalid`,
    wait: `${BASE}-wait`,
    disabled: `${BASE}-disabled`
};
const Text = ({ className, style, name, data, wait, invalid, disabled, value, onClick, onKeyDown }) => {
    const [classes, styles] = useMemo(() => createLayout([CLASS, className], [style], {
        wait,
        invalid,
        disabled
    }), [className, style, wait, invalid, disabled]);
    const params = useMemo(() => ({ name, data }), [data, name]);
    const handleClick = onClick
        ? (event) => {
            if (!wait) {
                onClick({ ...event, ...params });
            }
        }
        : undefined;
    const handleKeyDown = onKeyDown
        ? (event) => {
            if (!wait) {
                onKeyDown({ ...event, ...params });
            }
        }
        : undefined;
    return (_jsx("div", { className: classes._, style: styles._, onClick: handleClick, onKeyDown: handleKeyDown, children: value }));
};
export default Text;
//# sourceMappingURL=Text.js.map