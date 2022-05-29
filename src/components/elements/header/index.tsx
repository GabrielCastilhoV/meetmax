import Image from 'next/image'

import { FiAlignRight } from 'react-icons/fi'

import { Button, Logo, Search } from 'components/elements'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.HeaderMobile>
        <Logo />

        <Button color="secondary" icon={<FiAlignRight />} layout="minimal" />
      </S.HeaderMobile>

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
