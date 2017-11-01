/// <reference types="react" />
import * as React from "react";
export interface IProps {
    css?: any;
    color?: string;
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
    symbol?: string;
}
declare const Chip: React.SFC<IProps>;
export default Chip;