import { styled } from 'styles/stitches.config'

export const Wrapper = styled('nav', {
  w: '100%',
  h: 82,
  py: '$4',
  mr: '$20',

  display: 'flex',
  align: 'center',
  justify: 'space-between',

  bg: '$gray50'
})

export const User = styled('div', {
  w: 200,
  mr: 20,
  display: 'flex',
  align: 'center',
  position: 'relative',

  '& .username': {
    p: '$4',
    pr: '$10',

    fontWeight: '$medium',

    br: '$sm',
    bg: '$gray100'
  },

  '& .image': {
    position: 'absolute',
    right: 0,

    img: {
      br: '$sm'
    }
  }
})
