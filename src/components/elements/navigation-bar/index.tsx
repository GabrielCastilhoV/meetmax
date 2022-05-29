import Link from 'next/link'
import { useRouter } from 'next/router'

import { Logo } from 'components/elements'

import { navigationRoutes } from 'utils/constants'

import * as S from './styles'

export const NavigationBar = () => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <Logo />

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
