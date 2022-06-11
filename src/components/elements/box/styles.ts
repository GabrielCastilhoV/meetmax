import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  w: '100%',
  h: '100%',
  p: '$4 $3',

  bg: '$gray50',
  br: '$md',

  '@md': {
    p: '$5'
  }
})
