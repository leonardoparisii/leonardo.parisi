import { ReactNode } from "react";

export interface TextProps {
  text: string | any;
  secondaryText?: string | any;
  className?: string;
}

export interface TitleProps {
  title: string;
  className?: string;
}

export interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}
