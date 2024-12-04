import { LabelClass, LabelStyle, LabelProps } from '../Label';
import { IconClass, IconStyle, IconProps } from '../Icon';
/** LabelIcon component CSS class description */
export type LabelIconClass = {
    /** Default CSS class  */
    _?: string;
    /** Label component CSS class description */
    label: string | LabelClass;
    /** Icon component CSS class description */
    icon: string | IconClass;
};
/** LabelIcon component CSS style description */
export type LabelIconStyle = {
    /** Default CSS style  */
    _?: object;
    /** Label component CSS style description */
    label?: object | LabelStyle;
    /** Icon component CSS style description */
    icon?: object | IconStyle;
};
/** LabelIcon component props */
export type LabelIconProps = {
    /** Component CSS class description */
    className?: string | LabelIconClass;
    /** Component CSS style description */
    style?: object | LabelIconStyle;
    /** Component name */
    name?: string;
    /** Component data */
    data?: unknown;
    /** Component wait state */
    wait?: boolean;
    /** Component invalid state */
    invalid?: boolean;
    /** Component label props */
    label: LabelProps;
    /** Component icon props */
    icon: IconProps;
};
