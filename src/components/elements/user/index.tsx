import { UserProps } from './types'

import * as S from './styles'

export const User = ({ name, bio, avatar, ...rest }: UserProps) => {
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

      <div>
        {!!name && <S.Name>{name}</S.Name>}
        {!!bio && <S.Bio>{bio}</S.Bio>}
      </div>
    </S.Wrapper>
  )
}
