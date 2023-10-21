"use client";

interface ContainerProps {
  children: React.ReactNode;
}
function Container({ children }: ContainerProps) {
  return (
    <div className="flex-col h-screen flex items-center justify-between mx-auto relative">
      {children}
    </div>
  );
}

export default Container;
