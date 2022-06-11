import { Box, Column, CreatePublication, Post } from 'components/elements'
import { postsMock } from 'components/elements/post/mock'

import * as S from './styles'

export const FeedView = () => {
  return (
    <S.Wrapper>
      <Column>
        <CreatePublication />

        {postsMock?.length > 0 &&
          postsMock.map((data, index) => <Post key={index} {...data} />)}
      </Column>

      <Column>
        <Box>
          <h1>.</h1>
        </Box>
      </Column>

      <Column>
        <Box>
          <h1>.</h1>
        </Box>
      </Column>
    </S.Wrapper>
  )
}
