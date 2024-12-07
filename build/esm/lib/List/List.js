import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, forwardRef, useState, useRef } from 'react';
import { useEvents } from '../../hooks';
import { createLayout, initRefs } from '../../util';
const BASE = 'tsi-list';
const CLASS = {
    _: BASE,
    items: {
        _: `${BASE}-items`,
        item: {
            _: `${BASE}-items-item`,
            selected: `${BASE}-items-item-selected`,
            focused: `${BASE}-items-item-focused`
        }
    }
};
const List = forwardRef(({ className, style, name, data, options = [], optionIndex, onChange, onClose, onClick, onKeyDown }, extRef) => {
    const intRef = useRef(null);
    const [classes, styles] = useMemo(() => createLayout([CLASS, className], [style]), [className, style]);
    const [selectedClasses, selectedStyles] = useMemo(() => createLayout([classes?.items?.item?._, classes?.items?.item?.selected], [styles?.items?.item?._, styles?.items?.item?.selected]), [classes, styles]);
    const [focusedClasses, focusedStyles] = useMemo(() => createLayout([classes?.items?.item?._, classes?.items?.item?.focused], [styles?.items?.item?._, styles?.items?.item?.focused]), [classes, styles]);
    const params = useMemo(() => ({ name, data }), [data, name]);
    const itemsCount = useMemo(() => options?.length || 0, [options]);
    const [focusIndex, setFocusIndex] = useState(optionIndex ?? -1);
    const stepRef = useRef();
    stepRef.current = (event, step) => {
        event.preventDefault();
        event.stopPropagation();
        const newIndex = focusIndex + step;
        if (newIndex >= 0 && newIndex < itemsCount)
            setFocusIndex(newIndex);
    };
    const changeRef = useRef();
    changeRef.current = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (options && focusIndex >= 0 && focusIndex < itemsCount && onChange) {
            onChange({ ...event, ...params, optionIndex: focusIndex, option: options[focusIndex] });
        }
    };
    const closeRef = useRef();
    closeRef.current = event => {
        event.preventDefault();
        event.stopPropagation();
        onClose?.({ ...event, ...params });
    };
    const handleItemClick = (index) => (event) => {
        event.nativeEvent.preventDefault();
        event.nativeEvent.stopPropagation();
        onChange?.({ ...event, ...params, optionIndex: index, option: options[index] });
    };
    const handleListClick = onClick
        ? (event) => {
            onClick({ ...event, ...params });
        }
        : undefined;
    const handleListKeyDown = onKeyDown
        ? (event) => {
            onKeyDown({ ...event, ...params });
        }
        : undefined;
    useEvents({
        ref: intRef,
        listen: true,
        onOuterClick: event => {
            closeRef.current?.(event);
        },
        onKeyDown: (event) => {
            switch (event.code) {
                case 'Escape':
                    closeRef.current?.(event);
                    break;
                case 'ArrowDown':
                    stepRef.current?.(event, 1);
                    break;
                case 'ArrowUp':
                    stepRef.current?.(event, -1);
                    break;
                case 'Enter':
                    changeRef.current?.(event);
                    break;
            }
        }
    });
    const itemsComponent = options
        ? options.map((v, i) => {
            const itemClass = i === optionIndex ? selectedClasses : i === focusIndex ? focusedClasses : classes?.items?.item;
            const itemStyle = i === optionIndex ? selectedStyles : i === focusIndex ? focusedStyles : styles?.items?.item;
            return (_jsx("div", { className: itemClass?._, style: itemStyle?._, onClick: handleItemClick(i), children: v?.name }, i));
        })
        : null;
    return (_jsx("div", { ref: initRefs(intRef, extRef), className: classes._, style: styles._, onClick: handleListClick, onKeyDown: handleListKeyDown, children: _jsx("div", { className: classes.items?._, style: styles.items?._, children: itemsComponent }) }));
});
List.displayName = 'List';
export default List;
//# sourceMappingURL=List.js.map