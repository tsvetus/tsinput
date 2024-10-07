declare const selectProps: (obj: object, props: string[]) => object;
declare const asArray: (source: string | string[]) => string[];
declare const selectItems: (source: string | string[], props?: string[], add?: string[]) => string[];
declare const stringify: (obj: object, props: string[]) => string;
export { selectProps, asArray, selectItems, stringify };
