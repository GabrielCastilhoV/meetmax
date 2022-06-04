import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  display: 'grid',
  gridGap: '$4',
  p: 20,

  '& .box': {
    bg: '$gray50',
    br: '$md'
  },

  '@md': {
    gridTemplateColumns: '1fr 0.7fr 0.5fr '
  }
})
