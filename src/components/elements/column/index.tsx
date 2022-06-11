import { ColumnProps } from './types'
import * as S from './styles'

export const Column = ({ children }: ColumnProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}
