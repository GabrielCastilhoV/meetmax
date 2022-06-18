import { RiSendPlane2Line } from 'react-icons/ri'

import { User, TextField, Button } from 'components/elements'

import * as S from './styles'

export const Birthday = () => {
  return (
    <S.Wrapper>
      <User
        name="Edilson De Carvalho"
        bio="Birthday today"
        avatar="/images/avatars/avatar8.jpg"
      />

      <S.CommentContainer>
        <TextField placeholder="Write on his inbox..." />

        <Button layout="minimal" size="small" icon={<RiSendPlane2Line />} />
      </S.CommentContainer>
    </S.Wrapper>
  )
}
