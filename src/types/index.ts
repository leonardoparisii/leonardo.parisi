import { ReactNode } from "react";

export interface TextProps {
    text: string | any;
    secondaryText?: string | any;
    customStyle?: string;
}

export interface TitleProps {
    title: string;
    customStyle?: string;
}

export interface ButtonProps {
    title: string;
    customStyle?: string;
    onClick?: () => void;
}