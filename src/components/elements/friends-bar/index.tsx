import { FiMoreHorizontal } from 'react-icons/fi'

import { Box, Search, Button, Column, User } from 'components/elements'

import { status, friends } from 'utils/constants'

import * as S from './styles'

export const FriendsBar = () => {
  return (
    <S.Wrapper>
      <Column>
        <Box hideRadii>
          <Search placeholder="Search Friends!" />

          <div className="friends">
            <h6>Status</h6>

            <Button layout="minimal" size="small" color="tertiary">
              See all
            </Button>
          </div>

          <S.AvatarsContainer>
            {status?.map((data, index) => (
              <User key={index} {...data} />
            ))}
          </S.AvatarsContainer>

          <div className="friends">
            <h6>Friends</h6>

            <Button layout="minimal" size="small" icon={<FiMoreHorizontal />} />
          </div>

          <S.FriendsContainer>
            {friends?.map((data, index) => (
              <User key={index} {...data} size="tiny" />
            ))}
          </S.FriendsContainer>
        </Box>
      </Column>
    </S.Wrapper>
  )
}
