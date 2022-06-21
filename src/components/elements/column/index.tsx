import { ColumnProps } from './types'
import * as S from './styles'

export const Column = ({ children, ...rest }: ColumnProps) => {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>
}
