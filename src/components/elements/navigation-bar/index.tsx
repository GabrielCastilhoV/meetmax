import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { navigationRoutes } from 'utils/constants'

import * as S from './styles'

export const NavigationBar = () => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <Link href="/" passHref>
        <S.Logo>
          <Image
            src="/icons/logo.svg"
            alt="Blue Meetmax logo with a phone in the middle"
            width="30px"
            height="30px"
          />
          <span>Meetmax</span>
        </S.Logo>
      </Link>

      <S.Menu>
        {navigationRoutes.map((item) => (
          <Link key={item.title} passHref href={item.url}>
            <S.MenuItem active={router.asPath === item.url}>
              {item.icon} {item.title}
            </S.MenuItem>
          </Link>
        ))}
      </S.Menu>
    </S.Wrapper>
  )
}
