import { NavigationBar } from 'components/elements'

import * as S from './styles'

type AppLayoutProps = {
  children: React.ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <NavigationBar />

      {children}
    </S.Wrapper>
  )
}
