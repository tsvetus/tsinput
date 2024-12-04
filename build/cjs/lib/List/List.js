"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const hooks_1 = require("../../hooks");
const util_1 = require("../../util");
const useLayout_1 = __importDefault(require("../../hooks/useLayout"));
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
    var _a, _b, _c, _d, _e, _f;
    const intRef = (0, react_1.useRef)(null);
    const classes = (0, react_1.useMemo)(() => (0, util_1.mergeClasses)(CLASS, className), [className]);
    const styles = (0, react_1.useMemo)(() => (0, util_1.mergeStyles)(style), [style]);
    const mergeSelected = (0, react_1.useCallback)((key) => 'selected' === key, []);
    const mergeFocused = (0, react_1.useCallback)((key) => 'focused' === key, []);
    const [selectedClasses, selectedStyles] = (0, useLayout_1.default)((_a = classes === null || classes === void 0 ? void 0 : classes.items) === null || _a === void 0 ? void 0 : _a.item, (_b = styles === null || styles === void 0 ? void 0 : styles.items) === null || _b === void 0 ? void 0 : _b.item, mergeSelected);
    const [focusedClasses, focusedStyles] = (0, useLayout_1.default)((_c = classes === null || classes === void 0 ? void 0 : classes.items) === null || _c === void 0 ? void 0 : _c.item, (_d = styles === null || styles === void 0 ? void 0 : styles.items) === null || _d === void 0 ? void 0 : _d.item, mergeFocused);
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
    return ((0, jsx_runtime_1.jsx)("div", { ref: (0, util_1.initRefs)(intRef, extRef), className: classes._, style: styles._, onClick: handleListClick, onKeyDown: handleListKeyDown, children: (0, jsx_runtime_1.jsx)("div", { className: (_e = classes.items) === null || _e === void 0 ? void 0 : _e._, style: (_f = styles.items) === null || _f === void 0 ? void 0 : _f._, children: itemsComponent }) }));
});
List.displayName = 'List';
exports.default = List;
//# sourceMappingURL=List.js.map