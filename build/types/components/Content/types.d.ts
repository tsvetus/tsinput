import { ReactNode } from 'react';
export interface ContentClass {
    _?: string;
}
export interface ContentStyle {
    _?: object;
}
export interface ContentProps {
    className?: string | ContentClass;
    style?: object | ContentStyle;
    children?: string | ReactNode;
}
