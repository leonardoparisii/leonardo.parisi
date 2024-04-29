"use client";
import { ContainerProps } from "@/types";

function Container({ children }: ContainerProps) {
  return (
    <div className="flex-col h-screen flex items-center justify-between mx-auto relative">
      {children}
    </div>
  );
}

export default Container;
