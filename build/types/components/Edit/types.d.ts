import { ReactNode } from 'react';
import { InputClass, InputStyle } from '../../lib/Input';
import { IconClass, IconStyle } from '../Icon';
import { TsiValue, TsiMouseEventHandler, TsiKeyboardEventHandler, TsiInputEventHandler, TsiFormat } from '../../util/types';
export interface EditClass {
    _?: string;
    invalid?: string;
    wait?: string;
    disabled?: string;
    input?: string | InputClass;
    icon?: string | IconClass;
}
export interface EditStyle {
    _?: object;
    invalid?: object;
    wait?: object;
    disabled?: object;
    input?: object | InputStyle;
    icon?: object | IconStyle;
}
export interface EditProps {
    className?: string | EditClass;
    style?: object | EditStyle;
    layout?: string | string[];
    name?: string;
    data?: unknown;
    wait?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    icon?: string;
    value?: TsiValue;
    readOnly?: boolean;
    placeholder?: string;
    children?: string | ReactNode;
    format?: TsiFormat;
    onClick?: TsiMouseEventHandler<HTMLDivElement>;
    onKeyDown?: TsiKeyboardEventHandler<HTMLDivElement>;
    onIconClick?: TsiMouseEventHandler<HTMLElement>;
    onInputClick?: TsiMouseEventHandler<HTMLInputElement>;
    onInputKeyDown?: TsiKeyboardEventHandler<HTMLInputElement>;
    onChange?: TsiInputEventHandler<HTMLInputElement>;
}
