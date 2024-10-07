import { IconClass, IconStyle } from '../Icon';
import { TsiMouseEventHandler } from '../../util/types';
export interface TopBarClass {
    _?: string;
    icon?: string | IconClass;
    left?: string;
    center?: string;
    right?: string;
}
export interface TopBarStyle {
    _?: object;
    icon?: object | IconStyle;
    left?: object;
    center?: object;
    right?: object;
}
export interface TopBarProps {
    className?: string | TopBarClass;
    style?: object | TopBarStyle;
    name?: string;
    data?: unknown;
    icon?: string;
    onIconClick?: TsiMouseEventHandler<HTMLElement>;
}
