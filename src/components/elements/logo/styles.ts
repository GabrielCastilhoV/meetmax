import { styled } from 'styles/stitches.config'

export const Logo = styled('div', {
  display: 'flex',
  align: 'center',
  justify: 'center',
  gap: '$4',

  cursor: 'pointer',

  span: {
    display: 'none',
    fontSize: '$md',
    fontWeight: '$bold',

    '@md': {
      display: 'block'
    }
  }
})
