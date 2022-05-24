import { FiSearch } from 'react-icons/fi'

import * as S from './styles'

export const Search = () => {
  return (
    <S.Wrapper>
      <FiSearch />
      <S.Input placeholder="Search for something here..." />
    </S.Wrapper>
  )
}
