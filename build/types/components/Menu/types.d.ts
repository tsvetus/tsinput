import { TsiMouseEventHandler, TsiKeyboardEventHandler } from '../../util/types';
import { MenuItemClass, MenuItemStyle } from '../MenuItem';
import { ListOption } from '../../lib/List';
export interface MenuClass {
    _?: string;
    item?: string | MenuItemClass;
}
export interface MenuStyle {
    _?: object;
    item?: object | MenuItemStyle;
}
export interface MenuProps {
    className?: string | MenuClass;
    style?: object | MenuStyle;
    name: string;
    data: unknown;
    options: ListOption[];
    onItemClick: TsiMouseEventHandler<HTMLDivElement>;
    onItemKeyDown: TsiKeyboardEventHandler<HTMLDivElement>;
}
