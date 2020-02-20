import React, { Children } from "react"
import cx from "classnames"

export interface PillProps {
  children: React.ReactNode
  overlayed?: boolean
  className?: string
}

export const Pill = ({
  children,
  overlayed,
  className,
}: PillProps) => {
  const iconMarkup = null

  return (
    <div
      className={cx(className, "Pill", {
        "Pill--overlayed": overlayed,
      })}
    >
      {iconMarkup} {children}
    </div>
  )
}

export interface PillGroupProps {
  children: React.ReactNode
}

export const PillGroup = ({ children }: PillGroupProps) => {
  return (
    <div className="PillGroup">
      {Children.toArray(children).map((child, index) => (
        <div className="PillGroup__Item" key={index}>
          {child}
        </div>
      ))}
    </div>
  )
}

export default Pill
