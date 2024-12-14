import { ReactNode, MouseEvent, KeyboardEvent, ChangeEvent, CSSProperties } from 'react';
export type TsiValue = string | number | undefined | null;
export type TsiObject = {
    [key: string]: object | TsiObject[] | string | number | boolean | undefined;
};
export interface TsiEvent {
    name?: string | ReactNode;
    data?: unknown;
    value?: unknown;
}
export type TsiEventHandler = (event: TsiEvent) => void;
export interface TsiMouseEvent<T> extends MouseEvent<T>, TsiEvent {
}
export type TsiMouseEventHandler<T> = (event: TsiMouseEvent<T>) => void;
export interface TsiKeyboardEvent<T> extends KeyboardEvent<T>, TsiEvent {
}
export type TsiKeyboardEventHandler<T> = (event: TsiKeyboardEvent<T>) => void;
export interface TsiChangeEvent<T> extends ChangeEvent<T> {
    value?: string;
}
export type TsiChangeEventHandler<T> = (event: TsiChangeEvent<T>) => void;
export interface TsiInputEvent<T> extends ChangeEvent<T> {
    text?: string;
    value?: TsiValue;
    invalid?: boolean;
}
export type TsiInputEventHandler<T> = (event: TsiInputEvent<T>) => void;
export type TsiTargetHandler = () => HTMLElement | null | undefined;
export type TsiStyle = {
    _?: CSSProperties;
} & {
    [key: string]: TsiStyle | undefined;
};
export type TsiStyleSource = object | undefined | null;
export type TsiClass = {
    _?: string;
} & {
    [key: string]: TsiClass | undefined;
};
export type TsiClassSource = string | object | undefined | null;
export type TsiFormat = {
    required?: boolean;
    emptyValue?: TsiValue;
    invalidValue?: TsiValue;
    regexp?: RegExp;
};
export type TsiFormatterState = {
    text: string;
    value: TsiValue;
    invalid: boolean;
    changed?: boolean;
    offline?: boolean;
};
export type TsiFormatter = {
    processText: (text?: string) => TsiFormatterState;
    processValue: (value?: TsiValue) => TsiFormatterState;
    state: TsiFormatterState;
};
