import type { BoxProps } from './types'
import * as S from './styles'

export const Box = ({ children }: BoxProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}
