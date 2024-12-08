import { TsiClass, TsiMouseEventHandler, TsiKeyboardEventHandler, TsiInputEventHandler } from '../../util/types';
export interface MemoClass {
    _?: string | TsiClass;
    invalid?: string | TsiClass;
    wait?: string;
    disabled?: string;
}
export interface MemoStyle {
    _?: object;
    invalid?: object;
    wait?: object;
    disabled?: object;
}
export interface MemoProps {
    className?: string | MemoClass;
    style?: object | MemoStyle;
    name?: string;
    data?: unknown;
    wait?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    value?: string;
    readOnly?: boolean;
    placeholder?: string;
    onChange?: TsiInputEventHandler<HTMLTextAreaElement>;
    onClick?: TsiMouseEventHandler<HTMLTextAreaElement>;
    onKeyDown?: TsiKeyboardEventHandler<HTMLTextAreaElement>;
}
