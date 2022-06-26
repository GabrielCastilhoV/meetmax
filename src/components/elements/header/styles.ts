import { styled } from 'styles/stitches.config'

export const Wrapper = styled('nav', {
  w: '100%',
  h: 82,
  px: '$4',
  mr: '$20',

  display: 'flex',
  align: 'center',
  justify: 'space-between',

  position: 'fixed',
  zIndex: '$base',

  bg: '$gray50',

  '@lg': {
    w: 'calc(100% - 250px)',
    pl: 0
  },

  '& .search': {
    display: 'none',

    '@md': {
      w: 400,
      display: 'block'
    }
  }
})

export const User = styled('div', {
  display: 'none',

  '@md': {
    w: 200,
    display: 'flex',
    align: 'center',

    position: 'relative',

    '& .username': {
      display: 'none',

      '@md': {
        display: 'block',
        p: '$4',
        pr: '$10',

        fontWeight: '$medium',

        br: '$sm',
        bg: '$gray100'
      }
    },

    '& .image': {
      position: 'absolute',
      right: 0,

      img: {
        br: '$sm'
      }
    }
  }
})

export const HeaderMobile = styled('div', {
  w: '100%',
  px: '$4',
  display: 'flex',
  align: 'center',
  justify: 'space-between',

  '@md': {
    display: 'none'
  }
})
