import { styled } from 'styles/stitches.config'

export const Wrapper = styled('main', {
  display: 'grid',
  gap: '$4',
  p: 10,

  '@md': {
    p: 20,
    gridTemplateColumns: '1fr 0.7fr 0.5fr '
  }
})
