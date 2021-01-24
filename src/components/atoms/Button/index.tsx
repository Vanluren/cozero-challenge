import React, { ButtonHTMLAttributes, ReactElement, useMemo } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonSize?: 'lg' | 'md' | 'sm'
  value: string
}
const Button = ({ buttonSize = 'lg', className, value, ...rest }: Props): ReactElement => {
  const classes = useMemo(() => `bg-indigo-900 text-white rounded-sm shadow-sm ${className}`, [
    className,
  ])

  if (buttonSize === 'sm') {
    return <button className={`${classes}`} {...rest} />
  } else if (buttonSize === 'md') {
    return <button className={`${classes}`} {...rest} />
  }
  return (
    <button className={`${classes} px-8 py-4 text-xl`} {...rest}>
      {value}
    </button>
  )
}

export default Button
