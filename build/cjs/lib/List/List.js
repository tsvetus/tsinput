"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const hooks_1 = require("../../hooks");
const util_1 = require("../../util");
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
const List = (0, react_1.forwardRef)(({ className, style, name, data, options = [], optionIndex, onChange, onClose, onClick, onKeyDown }, extRef) => {
    var _a, _b;
    const intRef = (0, react_1.useRef)(null);
    const [classes, styles] = (0, react_1.useMemo)(() => (0, util_1.createLayout)([CLASS, className], [style]), [className, style]);
    const [selectedClasses, selectedStyles] = (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (0, util_1.createLayout)([(_b = (_a = classes === null || classes === void 0 ? void 0 : classes.items) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b._, (_d = (_c = classes === null || classes === void 0 ? void 0 : classes.items) === null || _c === void 0 ? void 0 : _c.item) === null || _d === void 0 ? void 0 : _d.selected], [(_f = (_e = styles === null || styles === void 0 ? void 0 : styles.items) === null || _e === void 0 ? void 0 : _e.item) === null || _f === void 0 ? void 0 : _f._, (_h = (_g = styles === null || styles === void 0 ? void 0 : styles.items) === null || _g === void 0 ? void 0 : _g.item) === null || _h === void 0 ? void 0 : _h.selected]);
    }, [classes, styles]);
    const [focusedClasses, focusedStyles] = (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (0, util_1.createLayout)([(_b = (_a = classes === null || classes === void 0 ? void 0 : classes.items) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b._, (_d = (_c = classes === null || classes === void 0 ? void 0 : classes.items) === null || _c === void 0 ? void 0 : _c.item) === null || _d === void 0 ? void 0 : _d.focused], [(_f = (_e = styles === null || styles === void 0 ? void 0 : styles.items) === null || _e === void 0 ? void 0 : _e.item) === null || _f === void 0 ? void 0 : _f._, (_h = (_g = styles === null || styles === void 0 ? void 0 : styles.items) === null || _g === void 0 ? void 0 : _g.item) === null || _h === void 0 ? void 0 : _h.focused]);
    }, [classes, styles]);
    const params = (0, react_1.useMemo)(() => ({ name, data }), [data, name]);
    const itemsCount = (0, react_1.useMemo)(() => (options === null || options === void 0 ? void 0 : options.length) || 0, [options]);
    const [focusIndex, setFocusIndex] = (0, react_1.useState)(optionIndex !== null && optionIndex !== void 0 ? optionIndex : -1);
    const stepRef = (0, react_1.useRef)();
    stepRef.current = (event, step) => {
        event.preventDefault();
        event.stopPropagation();
        const newIndex = focusIndex + step;
        if (newIndex >= 0 && newIndex < itemsCount)
            setFocusIndex(newIndex);
    };
    const changeRef = (0, react_1.useRef)();
    changeRef.current = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (options && focusIndex >= 0 && focusIndex < itemsCount && onChange) {
            onChange(Object.assign(Object.assign(Object.assign({}, event), params), { optionIndex: focusIndex, option: options[focusIndex] }));
        }
    };
    const closeRef = (0, react_1.useRef)();
    closeRef.current = event => {
        event.preventDefault();
        event.stopPropagation();
        onClose === null || onClose === void 0 ? void 0 : onClose(Object.assign(Object.assign({}, event), params));
    };
    const handleItemClick = (index) => (event) => {
        event.nativeEvent.preventDefault();
        event.nativeEvent.stopPropagation();
        onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign(Object.assign(Object.assign({}, event), params), { optionIndex: index, option: options[index] }));
    };
    const handleListClick = onClick
        ? (event) => {
            onClick(Object.assign(Object.assign({}, event), params));
        }
        : undefined;
    const handleListKeyDown = onKeyDown
        ? (event) => {
            onKeyDown(Object.assign(Object.assign({}, event), params));
        }
        : undefined;
    (0, hooks_1.useEvents)({
        ref: intRef,
        listen: true,
        onOuterClick: event => {
            var _a;
            (_a = closeRef.current) === null || _a === void 0 ? void 0 : _a.call(closeRef, event);
        },
        onKeyDown: (event) => {
            var _a, _b, _c, _d;
            switch (event.code) {
                case 'Escape':
                    (_a = closeRef.current) === null || _a === void 0 ? void 0 : _a.call(closeRef, event);
                    break;
                case 'ArrowDown':
                    (_b = stepRef.current) === null || _b === void 0 ? void 0 : _b.call(stepRef, event, 1);
                    break;
                case 'ArrowUp':
                    (_c = stepRef.current) === null || _c === void 0 ? void 0 : _c.call(stepRef, event, -1);
                    break;
                case 'Enter':
                    (_d = changeRef.current) === null || _d === void 0 ? void 0 : _d.call(changeRef, event);
                    break;
            }
        }
    });
    const itemsComponent = options
        ? options.map((v, i) => {
            var _a, _b;
            const itemClass = i === optionIndex ? selectedClasses : i === focusIndex ? focusedClasses : (_a = classes === null || classes === void 0 ? void 0 : classes.items) === null || _a === void 0 ? void 0 : _a.item;
            const itemStyle = i === optionIndex ? selectedStyles : i === focusIndex ? focusedStyles : (_b = styles === null || styles === void 0 ? void 0 : styles.items) === null || _b === void 0 ? void 0 : _b.item;
            return ((0, jsx_runtime_1.jsx)("div", { className: itemClass === null || itemClass === void 0 ? void 0 : itemClass._, style: itemStyle === null || itemStyle === void 0 ? void 0 : itemStyle._, onClick: handleItemClick(i), children: v === null || v === void 0 ? void 0 : v.name }, i));
        })
        : null;
    return ((0, jsx_runtime_1.jsx)("div", { ref: (0, util_1.initRefs)(intRef, extRef), className: classes._, style: styles._, onClick: handleListClick, onKeyDown: handleListKeyDown, children: (0, jsx_runtime_1.jsx)("div", { className: (_a = classes.items) === null || _a === void 0 ? void 0 : _a._, style: (_b = styles.items) === null || _b === void 0 ? void 0 : _b._, children: itemsComponent }) }));
});
List.displayName = 'List';
exports.default = List;
//# sourceMappingURL=List.js.map