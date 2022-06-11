import { styled } from 'styles/stitches.config'

export const Wrapper = styled('div', {
  w: '100%',

  '@lg': {
    display: 'grid',
    gridTemplateColumns: '250px 1fr'
  }
})

export const Content = styled('div', {})

export const Container = styled('div', {})
