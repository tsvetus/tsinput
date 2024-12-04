import React from 'react';
import { LabelProps } from './types';
/**
 * Label component
 * @typeParam HTMLDivElement - Label Ref type
 * @typeParam LabelProps - Label component properties @see LabelProps
 * @param {LabelProps} props - Label component properties
 * @param {string} [props.className] - Label component CSS class description
 */
declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLDivElement>>;
export default Label;
