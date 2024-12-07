import { TsiClass, TsiStyle, TsiObject, TsiClassSource, TsiStyleSource } from './types';
type TsiLayoutCallback = (classes: TsiClass | undefined, styles: TsiStyle | undefined) => [TsiClass, TsiStyle];
declare const createLayout: (classes: TsiClassSource[], styles: TsiStyleSource[], schema?: TsiObject, callback?: TsiLayoutCallback) => [TsiClass, TsiStyle];
export { createLayout };
