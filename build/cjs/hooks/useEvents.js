"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEvents = void 0;
const react_1 = require("react");
const useEvents = ({ ref, listen = true, onClick, onOuterClick, onKeyDown }) => {
    (0, react_1.useEffect)(() => {
        if (listen) {
            const click = (event) => {
                if (onClick) {
                    onClick(event);
                }
                const element = ref === null || ref === void 0 ? void 0 : ref.current;
                if (listen && element && onOuterClick) {
                    onOuterClick(event);
                }
            };
            const keyDown = (event) => {
                if (listen && onKeyDown) {
                    onKeyDown(event);
                }
            };
            if (onClick || onOuterClick)
                document.addEventListener('click', click);
            if (onKeyDown)
                document.addEventListener('keydown', keyDown, { passive: false });
            return () => {
                if (onClick || onOuterClick)
                    document.removeEventListener('click', click);
                if (onKeyDown)
                    document.removeEventListener('keydown', keyDown);
            };
        }
        else
            return () => { };
    }, [listen, ref, onOuterClick, onKeyDown, onClick]);
};
exports.useEvents = useEvents;
exports.default = exports.useEvents;
//# sourceMappingURL=useEvents.js.map