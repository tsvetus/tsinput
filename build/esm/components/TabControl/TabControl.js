import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { mergeClasses, mergeStyles } from '../../util';
const BASE = 'tsi-tab-control';
const CLASS = {
    _: BASE,
    header: `${BASE}-header`,
    tab: {
        _: `${BASE}-tab`,
        active: `${BASE}-tab-active`
    },
    content: `${BASE}-content`
};
const TabControl = ({ className, style, name, data, options = [], value, onChange }) => {
    const classes = useMemo(() => mergeClasses(CLASS, className), [className]);
    const styles = useMemo(() => mergeStyles(style), [style]);
    const params = useMemo(() => ({ name, data }), [data, name]);
    const activeIndex = useMemo(() => (options ? options.findIndex(v => value === (v.key || v.id || v.value || null)) : -1), [options, value]);
    const activeOption = useMemo(() => (activeIndex >= 0 ? options[activeIndex] : null), [activeIndex, options]);
    const handleClick = (optionIndex) => (event) => {
        if (activeIndex !== optionIndex && onChange) {
            const option = options[optionIndex];
            onChange({
                ...event,
                ...params,
                optionIndex,
                option,
                value: option.key || option.id || option.value || null
            });
        }
    };
    const tabsComponent = options.map((v, i) => {
        const caption = v.caption || v.name || v.label || null;
        if (activeIndex === i) {
            const tabClass = mergeClasses(classes.tab, classes.tab?.active);
            const tabStyle = mergeStyles(styles.tab, styles.tab?.active);
            return (_jsx("div", { className: tabClass?._, style: tabStyle?._, onClick: handleClick(i), children: caption }, i));
        }
        else {
            return (_jsx("div", { className: classes.tab?._, style: styles.tab?._, onClick: handleClick(i), children: caption }, i));
        }
    });
    const contentComponent = activeOption?.render ? (_jsx("div", { className: classes.content?._, style: styles.content?._, children: activeOption.render() })) : null;
    return (_jsxs("div", { className: classes._, style: styles._, children: [_jsx("div", { className: classes.header?._, style: styles.header?._, children: tabsComponent }), contentComponent] }));
};
export default TabControl;
