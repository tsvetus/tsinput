import { Ref, MutableRefObject } from 'react';
declare const findElement: <T extends Element>(className: string) => T;
declare const initRefs: <T extends HTMLElement>(...refs: (Ref<T> | MutableRefObject<T> | undefined)[]) => (element: T) => void;
export { findElement, initRefs };
