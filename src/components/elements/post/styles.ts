import { styled } from 'styles/stitches.config'
import { Box } from 'components/elements'

export const Wrapper = styled('div')

export const Header = styled('div', {
  display: 'flex',
  align: 'center',
  justify: 'space-between',
  gap: '$4'
})

export const ContentContainer = styled('div', {
  my: '$6'
})

export const Content = styled('div', {
  '& p': {
    mb: '$4'
  },

  img: {
    w: '100%',
    maxH: '300px',
    br: '$xs'
  }
})

export const Footer = styled('div', {})

export const Buttons = styled('div', {
  display: 'flex',
  align: 'center',
  justify: 'space-between',
  gap: '$4',

  borderY: '1px solid $gray100'
})

export const CommentContainer = styled('div', {
  display: 'flex',
  align: 'center',
  mt: '$2'
})
