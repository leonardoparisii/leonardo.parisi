'use client';

import { TitleProps } from "@/types/index";

export default function Title({ title, customStyle }: TitleProps) {
    return (
        <div className={`${customStyle ? customStyle : 'lg:text-7xl text-5xl font-semibold'} font-source `}>
            {title}
        </div>
    );
}