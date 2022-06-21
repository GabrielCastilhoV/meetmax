import { styled } from 'styles/stitches.config'

export const Wrapper = styled('main', {
  display: 'grid',
  gap: '$4',
  p: 20,

  '@xl': {
    gridTemplateColumns: '1fr 0.27fr',
    p: 0,
    pl: 20
  }
})

export const Content = styled('div', {
  display: 'grid',
  gap: '$4',
  gridTemplateColumns: '1fr',

  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },

  '@lg': {
    gridTemplateColumns: 'repeat(3, 1fr)'
  }
})

export const FixedContainer = styled('div', {
  display: 'none',

  '@xl': {
    display: 'block',
    h: 'calc(100vh - 82px)',
    overflow: 'auto',

    position: 'fixed',
    right: 0
  }
})

export const ButtonsHeader = styled('div', {
  display: 'flex',
  align: 'center',
  justify: 'center',
  flexWrap: 'wrap',
  gap: '$6',

  '@lg': {
    flexWrap: 'nowrap'
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
    w: 20,
    h: 20,
    cursor: 'pointer'
  }
})
