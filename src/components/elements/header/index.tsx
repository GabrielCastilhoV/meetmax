import Image from 'next/image'

import { FiAlignRight } from 'react-icons/fi'

import { Button, Logo, Search } from 'components/elements'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.HeaderMobile>
        <Logo />

        <Button
          color="secondary"
          icon={<FiAlignRight />}
          layout="minimal"
          size="small"
          style={{ paddingRight: 0 }}
        />
      </S.HeaderMobile>

      <div className="search">
        <Search placeholder="Search for something here..." />
      </div>

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
