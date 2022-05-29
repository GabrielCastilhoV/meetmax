import { ButtonProps } from './types'

import * as S from './styles'

export const Button = ({ children, icon, ...rest }: ButtonProps) => {
  return (
    <S.Wrapper {...rest}>
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}
