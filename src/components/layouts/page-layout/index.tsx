import Head from 'next/head'

import * as S from './styles'

type PageLayouProps = {
  children: React.ReactNode
  title: string
}

export const PageLayout: React.FC<PageLayouProps> = ({ children, title }) => {
  return (
    <S.Wrapper>
      <Head>
        <title>{title} | Meetmax</title>
      </Head>

      {children}
    </S.Wrapper>
  )
}
