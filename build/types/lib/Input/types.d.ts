import { TsiMouseEventHandler, TsiKeyboardEventHandler, TsiChangeEventHandler } from '../../util/types';
export interface InputClass {
    _?: string;
}
export interface InputStyle {
    _?: object;
}
export interface InputProps {
    className?: string | InputClass;
    style?: object | InputStyle;
    name?: string;
    data?: unknown;
    value?: string;
    readOnly?: boolean;
    placeholder?: string;
    onChange?: TsiChangeEventHandler<HTMLInputElement>;
    onClick?: TsiMouseEventHandler<HTMLInputElement>;
    onKeyDown?: TsiKeyboardEventHandler<HTMLInputElement>;
}
