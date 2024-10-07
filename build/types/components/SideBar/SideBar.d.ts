import React, { ReactNode } from 'react';
import { TsiClass, TsiMouseEventHandler } from '../../util/types';
interface SideBarClass {
    _?: string | TsiClass;
    header?: string;
    title?: string;
    close?: string;
    content?: string;
    footer?: string;
}
interface SideBarStyle {
    _?: object;
    header?: object;
    title?: object;
    close?: object;
    content?: object;
    footer?: object;
}
interface SideBarProps {
    className?: string | SideBarClass;
    style?: object | SideBarStyle;
    name?: string;
    data?: unknown;
    show?: boolean;
    title?: string | ReactNode;
    children?: string | ReactNode;
    content?: string | ReactNode;
    footer?: string | ReactNode;
    transition?: number | string;
    width?: number | string;
    onClose?: TsiMouseEventHandler<HTMLElement>;
}
declare const SideBar: React.ForwardRefExoticComponent<SideBarProps & React.RefAttributes<HTMLDivElement>>;
export default SideBar;
