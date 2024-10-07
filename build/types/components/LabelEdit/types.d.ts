import { ReactNode } from 'react';
import { TsiMouseEventHandler, TsiKeyboardEventHandler, TsiInputEventHandler } from '../../util/types';
import { LabelClass, LabelStyle } from '../Label';
import { EditClass, EditStyle } from '../Edit';
export interface LabelEditClass {
    _?: string;
    labe?: string | LabelClass;
    edit?: string | EditClass;
}
export interface LabelEditStyle {
    _?: object;
    label?: object | LabelStyle;
    edit?: object | EditStyle;
}
export interface LabelEditProps {
    className?: string | LabelEditClass;
    style?: object | LabelEditStyle;
    labelLayout?: string | string[];
    editLayout?: string | string[];
    name?: string;
    data?: unknown;
    wait?: boolean;
    invalid?: boolean;
    label?: string | ReactNode;
    labelIcon?: string;
    editIcon?: string;
    placeholder?: string;
    children?: string | ReactNode;
    value?: string | number;
    onLabelClick?: TsiMouseEventHandler<HTMLDivElement>;
    onLabelIconClick?: TsiMouseEventHandler<HTMLElement>;
    onEditClick?: TsiMouseEventHandler<HTMLDivElement>;
    onEditIconClick?: TsiMouseEventHandler<HTMLElement>;
    onInputClick?: TsiMouseEventHandler<HTMLInputElement>;
    onInputKeyDown?: TsiKeyboardEventHandler<HTMLInputElement>;
    onChange?: TsiInputEventHandler<HTMLInputElement>;
}
