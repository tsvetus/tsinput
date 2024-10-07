import { ReactNode } from 'react';
import { TsiMouseEventHandler } from '../../util/types';
import { LabelClass, LabelStyle } from '../Label';
import { GroupClass, GroupStyle } from '../../lib/Group';
export interface LabelGroupClass {
    _?: string;
    label?: string | LabelClass;
    group?: string | GroupClass;
}
export interface LabelGroupStyle {
    _?: object;
    label?: object | LabelStyle;
    group?: object | GroupStyle;
}
export interface LabelGroupProps {
    className?: string | LabelGroupClass;
    style?: object | LabelGroupStyle;
    name?: string;
    data?: unknown;
    layout?: string | string[];
    label?: string | ReactNode;
    icon?: string;
    children?: string | ReactNode;
    onLabelClick?: TsiMouseEventHandler<HTMLDivElement>;
    onIconClick?: TsiMouseEventHandler<HTMLElement>;
}
