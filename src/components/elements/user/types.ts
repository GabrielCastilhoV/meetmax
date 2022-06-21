import { UserVariants } from './styles'

export type UserProps = {
  name?: string
  bio?: string
  avatar: string
  lastTimeOnline?: string
} & UserVariants
