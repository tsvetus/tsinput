import { useMemo } from 'react';
import { appendString } from '../util';
const collapseClass = (source, check, preffix = '') => {
    const result = { _: source?._ };
    for (const key in source) {
        if ('_' !== key) {
            const child = source[key];
            const node = preffix ? `${preffix}-${key}` : key;
            if (1 < Object.keys(child).length) {
                result[key] = collapseClass(child, check, node);
            }
            else if (check(node)) {
                result._ = appendString(result._, child._);
            }
        }
    }
    return result;
};
const collapseStyle = (source, check, preffix = '') => {
    const result = { _: source?._ };
    for (const key in source) {
        if ('_' !== key) {
            const child = source[key];
            const node = preffix ? `${preffix}-${key}` : key;
            if (1 < Object.keys(child).length) {
                result[key] = collapseStyle(child, check, node);
            }
            else if (check(node)) {
                result._ = { ...result._, ...child._ };
            }
        }
    }
    return result;
};
const useLayout = (baseClass, baseStyle, check) => {
    const classes = useMemo(() => collapseClass(baseClass, check), [baseClass, check]);
    const styles = useMemo(() => collapseStyle(baseStyle, check), [baseStyle, check]);
    return [classes, styles];
};
export default useLayout;
//# sourceMappingURL=useLayout.js.map