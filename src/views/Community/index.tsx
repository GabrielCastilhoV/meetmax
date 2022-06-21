import {
  FiMoreHorizontal,
  FiFacebook,
  FiInstagram,
  FiTwitter
} from 'react-icons/fi'
import { BiWorld } from 'react-icons/bi'

import { FriendsBar, Column, Box, Button, User } from 'components/elements'

import * as S from './styles'
import { community } from 'utils/constants'

export const CommunityView = () => {
  return (
    <S.Wrapper>
      <Column style={{ margin: '20px 0' }}>
        <Box>
          <S.ButtonsHeader>
            <Button color="primary">52,844 Followers</Button>
            <Button color="quaternary" layout="minimal">
              2,564 Following
            </Button>
            <Button color="quaternary" layout="minimal">
              People You Might Like
            </Button>
          </S.ButtonsHeader>
        </Box>

        <S.Content>
          {community?.map((item, index) => (
            <Box key={index}>
              <S.UserContent>
                <User {...item} />

                <S.ButtonsWrapper
                  style={{
                    justifyContent: 'center',
                    marginTop: '10px'
                  }}
                >
                  <BiWorld />
                  <FiFacebook />
                  <FiTwitter />
                  <FiInstagram />
                </S.ButtonsWrapper>

                <S.ButtonsWrapper>
                  <Button color="quaternary" layout="minimal">
                    Ignore
                  </Button>

                  <Button color="primary">Follow</Button>
                </S.ButtonsWrapper>
              </S.UserContent>
            </Box>
          ))}
        </S.Content>
      </Column>

      <S.FixedContainer>
        <FriendsBar />
      </S.FixedContainer>
    </S.Wrapper>
  )
}
