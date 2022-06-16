import { BoxVariants } from './styles'

export type BoxProps = {
  children: React.ReactNode
  headerName?: string
  buttonName?: string
  buttonIcon?: React.ReactNode
} & BoxVariants
