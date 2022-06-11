import { FiMoreHorizontal } from 'react-icons/fi'
import { BiLike, BiComment } from 'react-icons/bi'
import { RiShareForwardLine, RiSendPlane2Line } from 'react-icons/ri'

import { User, Button, Box, TextField } from 'components/elements'

import { PostProps } from './types'
import * as S from './styles'

export const Post = ({ post, user }: PostProps) => {
  return (
    <S.Wrapper>
      <Box>
        <S.Header>
          <User {...user} />

          <Button layout="minimal" size="small" icon={<FiMoreHorizontal />} />
        </S.Header>

        <S.ContentContainer>
          <S.Content dangerouslySetInnerHTML={{ __html: post.content }} />
        </S.ContentContainer>

        <S.Footer>
          <S.Buttons>
            <Button layout="minimal" size="small" icon={<BiLike />}>
              Like
            </Button>

            <Button layout="minimal" size="small" icon={<BiComment />}>
              Comments
            </Button>

            <Button layout="minimal" size="small" icon={<RiShareForwardLine />}>
              Share
            </Button>
          </S.Buttons>

          <S.CommentContainer>
            <User avatar="/images/avatars/avatar9.jpg" size="tiny" />

            <TextField placeholder="Write a comment..." />

            <Button layout="minimal" size="small" icon={<RiSendPlane2Line />} />
          </S.CommentContainer>
        </S.Footer>
      </Box>
    </S.Wrapper>
  )
}
