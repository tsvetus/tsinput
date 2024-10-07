import { ReactNode } from 'react';
import { TsiEventHandler, TsiTargetHandler } from '../../util/types';
export interface OverlayClass {
    _?: string;
}
export interface OverlayStyle {
    _?: object;
}
export interface OverlayProps {
    className?: string | OverlayClass;
    style?: object | OverlayClass;
    name?: string;
    data?: unknown;
    show?: boolean;
    timeout?: number;
    persistent?: unknown;
    children?: string | ReactNode;
    offset?: number;
    onEnter?: TsiEventHandler;
    onExit?: TsiEventHandler;
    onTarget?: TsiTargetHandler;
}
