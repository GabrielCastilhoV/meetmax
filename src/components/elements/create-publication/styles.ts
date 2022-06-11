import { styled } from 'styles/stitches.config'
import { Box } from '../box'

export const Wrapper = styled(Box)

export const Feed = styled('div', {
  w: '100%',
  mb: '$5',

  display: 'flex',
  align: 'center'
})

export const Footer = styled('div', {
  display: 'flex',
  align: 'center',
  justify: 'space-between'
})

export const Options = styled('div', {
  display: 'flex'
})
