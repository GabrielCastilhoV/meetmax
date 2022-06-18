import {
  FiMoreHorizontal,
  FiFacebook,
  FiInstagram,
  FiTwitter
} from 'react-icons/fi'
import { BiWorld } from 'react-icons/bi'

import {
  Box,
  Button,
  Column,
  CreatePublication,
  Event,
  Post,
  User
} from 'components/elements'
import { postsMock } from 'components/elements/post/mock'

import * as S from './styles'

export const FeedView = () => {
  return (
    <S.Wrapper>
      <Column>
        <CreatePublication />

        {postsMock?.length > 0 &&
          postsMock.map((data, index) => <Post key={index} {...data} />)}
      </Column>

      <Column>
        <Box headerName="You Might Like" buttonName="See all">
          <S.UserContent>
            <User
              name="Radovan SkillArena"
              bio="Founder & CEO at Trophy"
              avatar="/images/avatars/avatar7.jpg"
            />

            <S.ButtonsWrapper
              style={{ justifyContent: 'center', marginTop: '10px' }}
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

        <Box headerName="Recent Event" buttonIcon={<FiMoreHorizontal />}>
          <Event
            title="Graduation Ceremony"
            description="The graduation ceremony is also sometimes called..."
            image="/images/events/event.png"
            seen="11"
          />

          <Event
            title="Photography Ideas"
            description="Reflections, Reflections work because they can create..."
            image="/images/events/event2.png"
            seen="5"
          />
        </Box>

        <Box headerName="Birthdays" buttonName="See all">
          .
        </Box>
      </Column>

      <Column>
        <Box>
          <h1>.</h1>
        </Box>
      </Column>
    </S.Wrapper>
  )
}
