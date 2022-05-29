import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

export const Logo = () => {
  return (
    <Link href="/" passHref>
      <S.Logo>
        <Image
          src="/icons/logo.svg"
          alt="Blue Meetmax logo with a phone in the middle"
          width="36px"
          height="36px"
        />
        <span>Meetmax</span>
      </S.Logo>
    </Link>
  )
}
