import { styled } from 'styles/stitches.config'

export const Wrapper = styled('main', {
  display: 'grid',
  gap: '$4',

  '& .friends': {
    display: 'flex',
    align: 'center',
    justify: 'space-between',

    borderBottom: '3px solid $gray100',
    my: '$6',

    h6: {
      fontSize: '$sm'
    }
  },

  '@md': {
    gridTemplateColumns: '1fr 0.6fr 0.6fr',
    pl: 20
  }
})

export const UserContent = styled('div', {
  p: '$4'
})

export const ButtonsWrapper = styled('div', {
  display: 'flex',
  align: 'center',
  justify: 'space-between',
  gap: '$4',

  mt: '$6',

  svg: {
    cursor: 'pointer'
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

export const FixedContainer = styled('div', {
  h: 'calc(100vh - 82px)',
  overflow: 'auto',

  position: 'fixed',
  right: 0
})
