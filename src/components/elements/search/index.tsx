import { FiSearch } from 'react-icons/fi'

import { SearchProps } from './types'

import * as S from './styles'

export const Search = ({ ...rest }: SearchProps) => {
  return (
    <S.Wrapper>
      <FiSearch />
      <S.Input {...rest} />
    </S.Wrapper>
  )
}
