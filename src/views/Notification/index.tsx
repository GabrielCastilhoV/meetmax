import { FiSettings } from 'react-icons/fi'

import { FriendsBar } from 'components/elements'

import * as S from './styles'

export const NotificationView = () => {
  return (
    <S.Wrapper>
      <S.NotificationContent>
        <S.NotificationHeader>
          <h5>Notification</h5>

          <FiSettings />
        </S.NotificationHeader>
      </S.NotificationContent>

      <S.FixedContainer>
        <FriendsBar />
      </S.FixedContainer>
    </S.Wrapper>
  )
}
