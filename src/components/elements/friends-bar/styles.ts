import { styled } from 'styles/stitches.config'

export const Wrapper = styled('main', {
  '& .friends': {
    display: 'flex',
    align: 'center',
    justify: 'space-between',

    borderBottom: '3px solid $gray100',
    my: '$6',

    h6: {
      fontSize: '$sm'
    }
  }
})

export const AvatarsContainer = styled('div', {
  display: 'flex',
  align: 'center',
  justify: 'center',
  my: '$6'
})

export const FriendsContainer = styled('div', {
  display: 'flex',
  flexDir: 'column',
  gap: '$4'
})
