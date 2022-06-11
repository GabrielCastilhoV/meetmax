import { Header, NavigationBar } from 'components/elements'

import * as S from './styles'

type AppLayoutProps = {
  children: React.ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <NavigationBar />
      </S.Container>

      <S.Content>
        <S.Container style={{ height: 82 }}>
          <Header />
        </S.Container>

        {children}
      </S.Content>
    </S.Wrapper>
  )
}
