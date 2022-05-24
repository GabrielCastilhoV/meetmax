import Image from 'next/image'

import { Search } from 'components/elements'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <Search />

      <S.User>
        <span className="username">Gabriel Castilho</span>

        <div className="image">
          <Image
            src="/images/profile.jpg"
            alt="User image"
            width="50px"
            height="50px"
          />
        </div>
      </S.User>
    </S.Wrapper>
  )
}
