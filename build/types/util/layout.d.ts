import { TsiClass, TsiStyle, TsiClassSource, TsiStyleSource, TsiSchema } from './types';
type TsiLayoutCallback = (classes: TsiClass | undefined, styles: TsiStyle | undefined) => [TsiClass, TsiStyle];
declare const createLayout: (classes: TsiClassSource[], styles: TsiStyleSource[], schema?: TsiSchema, callback?: TsiLayoutCallback) => [TsiClass, TsiStyle];
export { createLayout };
