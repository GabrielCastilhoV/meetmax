import { styled } from 'styles/stitches.config'

export const Wrapper = styled('main', {
  display: 'grid',
  p: 10,

  '@md': {
    gridTemplateColumns: '1fr 350px',
    p: '0 20px'
  }
})

export const NotificationContent = styled('div', {
  w: '100%',
  bg: '$gray50',

  p: '$4',
  br: '$xs'
})

export const NotificationHeader = styled('div', {
  display: 'flex',
  align: 'center',
  justify: 'space-between'
})

export const FixedContainer = styled('div', {
  display: 'none',

  '@md': {
    display: 'block',
    w: '350px',
    h: 'calc(100vh - 82px)',

    overflow: 'auto',
    position: 'fixed',
    right: 0
  }
})
