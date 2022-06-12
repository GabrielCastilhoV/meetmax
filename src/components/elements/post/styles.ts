import { styled } from 'styles/stitches.config'
import * as DialogPrimitive from '@radix-ui/react-dialog'

export const Wrapper = styled('div')

export const Header = styled('div', {
  display: 'flex',
  align: 'center',
  justify: 'space-between',
  gap: '$4',

  position: 'relative'
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

export const DialogContent = styled(DialogPrimitive.Content, {
  position: 'absolute',
  top: 50,
  right: -10,

  br: 6,
  bg: '$gray50',
  padding: '$4',

  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px'
})
