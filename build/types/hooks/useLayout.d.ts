import { TsiClass, TsiStyle } from '../util/types';
type TsiCheckFunc = (key: string) => unknown;
declare const useLayout: (baseClass: TsiClass | undefined, baseStyle: TsiStyle | undefined, check: TsiCheckFunc) => [TsiClass, TsiStyle];
export default useLayout;
