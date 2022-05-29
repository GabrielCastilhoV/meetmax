import { styled } from 'styles/stitches.config'

export const Wrapper = styled('nav', {
  display: 'none',

  '@lg': {
    w: 250,
    h: '100vh',

    display: 'block',
    p: '$6',

    bg: '$gray50'
  }
})

export const Menu = styled('menu', {
  display: 'grid',
  gridGap: '$5',
  mt: '$15'
})

export const MenuItem = styled('a', {
  display: 'flex',
  align: 'center',
  gap: '$4',
  p: '$3 $4',

  br: '$xs',
  cursor: 'pointer',
  textDecoration: 'none',

  fontSize: '$sm',
  color: '$text',

  variants: {
    active: {
      true: {
        color: '#F9FAFB',
        bg: '$gray300'
      }
    }
  }
})
