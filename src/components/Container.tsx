'use client'

interface ContainerProps {
    children: React.ReactNode
}
function Container( { children } : ContainerProps) {
  return (
    <div className="max-w-[2520px] flex-col h-screen flex items-center justify-between mx-auto">{children}</div>
  )
}

export default Container