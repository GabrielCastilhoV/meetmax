import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  w: '100%',

  p: '$5',

  bg: '$gray50',
  br: '$md'
})

export const Feed = styled('div', {
  w: '100%',
  mb: '$5',

  display: 'flex',
  align: 'center',
  gap: '$4'
})

export const Footer = styled('div', {
  display: 'flex',
  align: 'center',
  justify: 'space-between'
})

export const Options = styled('div', {
  display: 'flex'
})
