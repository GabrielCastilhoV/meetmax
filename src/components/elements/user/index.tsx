import { UserProps } from './types'

import * as S from './styles'

export const User = ({ name, bio, avatar }: UserProps) => {
  return (
    <S.Wrapper>
      <S.Avatar
        src={avatar}
        alt={`photo of user ${name}`}
        width="100%"
        height="100%"
        loading="lazy"
      />

      {!!name && <S.Name>John Doe</S.Name>}

      {!!bio && <S.Bio>{bio}</S.Bio>}
    </S.Wrapper>
  )
}
