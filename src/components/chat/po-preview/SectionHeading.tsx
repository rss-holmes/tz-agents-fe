import type { ReactNode } from 'react'

export interface SectionHeadingProps {
  children: ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-4 mb-1">
      {children}
    </h3>
  )
}
