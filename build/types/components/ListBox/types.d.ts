import { TsiMouseEventHandler, TsiKeyboardEventHandler } from '../../util/types';
import { EditClass, EditStyle } from '../Edit/types';
import { OverlayClass, OverlayStyle } from '../../lib/Overlay';
import { ListClass, ListStyle, ListItem, ListEventHandler } from '../../lib/List';
export interface ListBoxClass {
    _?: string;
    invalid?: string;
    wait?: string;
    disabled?: string;
    edit?: string | EditClass;
    overlay?: string | OverlayClass;
    list?: string | ListClass;
}
export interface ListBoxStyle {
    _?: object;
    invalid?: object;
    wait?: object;
    disabled?: object;
    edit?: string | EditStyle;
    overlay?: string | OverlayStyle;
    list?: string | ListStyle;
}
export interface ListBoxProps {
    className?: string | ListBoxClass;
    style?: object | ListBoxStyle;
    layout?: string | string[];
    name?: string;
    data?: unknown;
    wait?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    value?: string | number;
    readOnly?: boolean;
    placeholder?: string;
    valueField?: string | string[];
    nameField?: string | string[];
    options?: ListItem[];
    onClick?: TsiMouseEventHandler<HTMLDivElement>;
    onKeyDown?: TsiKeyboardEventHandler<HTMLDivElement>;
    onIconClick?: TsiMouseEventHandler<HTMLElement>;
    onInputClick?: TsiMouseEventHandler<HTMLInputElement>;
    onInputKeyDown?: TsiKeyboardEventHandler<HTMLInputElement>;
    onChange?: ListEventHandler;
    onSelect?: ListEventHandler;
    onClose?: ListEventHandler;
}
