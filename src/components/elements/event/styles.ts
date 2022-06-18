import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  mb: '$4'
})

export const Content = styled('div', {
  p: '$4 $4 $6',

  display: 'flex',
  justify: 'center',
  gap: '$4',

  borderBottom: '1px solid $gray100',
  cursor: 'pointer'
})

export const Box = styled('div')

export const Title = styled('h6', {
  fontSize: '$xs'
})

export const Description = styled('p', {
  fontSize: '$xxs',
  mt: '$4'
})

export const Footer = styled('div', {
  mt: '$4',

  display: 'flex',
  justify: 'space-between',
  align: 'center'
})

export const Seen = styled('span', {
  fontSize: '$xxs'
})
