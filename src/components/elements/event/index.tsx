import Image from 'next/image'

import { EventProps } from './types'

import * as S from './styles'

export const Event = ({ title, description, image, seen }: EventProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          style={{ borderRadius: 8 }}
        />

        <S.Box>
          <S.Title>{title}</S.Title>

          <S.Description>{description}</S.Description>
        </S.Box>
      </S.Content>

      <S.Footer>
        <S.Seen>{seen} seen</S.Seen>
      </S.Footer>
    </S.Wrapper>
  )
}
