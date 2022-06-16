import { styled } from 'styles/stitches.config'

export const Wrapper = styled('main', {
  display: 'grid',
  gap: '$4',
  p: 10,

  '@md': {
    p: 20,
    pr: 0,
    gridTemplateColumns: '1fr 0.6fr 0.5fr'
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
