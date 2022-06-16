import { FiVideo, FiImage, FiSmile } from 'react-icons/fi'

import { Button, User, TextField } from 'components/elements'

import * as S from './styles'

export const CreatePublication = () => {
  return (
    <S.Wrapper>
      <S.Feed>
        <User avatar="/images/avatars/avatar9.jpg" />
        <TextField placeholder="What's happening?" />
      </S.Feed>

      <S.Footer>
        <S.Options>
          <Button layout="minimal" size="small" icon={<FiVideo />}>
            Live Video
          </Button>

          <Button layout="minimal" size="small" icon={<FiImage />}>
            Photo/Video
          </Button>

          <Button layout="minimal" size="small" icon={<FiSmile />}>
            Feeling
          </Button>
        </S.Options>

        <Button color="primary" size="small" style={{ padding: '0 30px' }}>
          Post
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}
