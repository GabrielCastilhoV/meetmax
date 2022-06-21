import { UserProps } from './types'

import * as S from './styles'

export const User = ({
  name,
  bio,
  avatar,
  lastTimeOnline,
  ...rest
}: UserProps) => {
  return (
    <S.Wrapper>
      <S.ImageContainer {...rest}>
        <S.Avatar
          src={avatar}
          alt={`photo of user ${!!name ? name : ''}`}
          width="100%"
          height="100%"
          loading="lazy"
        />
      </S.ImageContainer>

      <S.Content fullWidth={!!lastTimeOnline ? true : false}>
        <div>
          {!!name && <S.Name {...rest}>{name}</S.Name>}
          {!!bio && <S.Bio>{bio}</S.Bio>}
        </div>

        {!!lastTimeOnline && (
          <S.LastTime>
            {lastTimeOnline === 'online' ? <S.Circle /> : lastTimeOnline}
          </S.LastTime>
        )}
      </S.Content>
    </S.Wrapper>
  )
}
