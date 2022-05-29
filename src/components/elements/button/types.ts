import type { ButtonHTMLAttributes, ReactNode } from 'react'

import type { ButtonVariants } from './styles'

export type ButtonProps = {
  children?: ReactNode
  icon?: ReactNode
} & ButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement>
