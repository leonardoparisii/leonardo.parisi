'use client';

import { TextProps } from "@/types/index";

export default function Text({ text, secondaryText, customStyle }: TextProps) {
    return (
        <div className={`${customStyle ? customStyle : 'font-bold text-lg text-slate-500'} font-mulish`}>
            {text} <br />
            {secondaryText}
        </div>
    );
}