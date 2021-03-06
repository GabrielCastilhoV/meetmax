import { globalCss } from '../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 'none',
    boxSizing: 'border-box'
  },
  'body, button, input, select, textarea': {
    fontFamily: '$body'
  },
  body: {
    background: '$gray100',
    color: '$text'
  },
  'h1, h2, h3, h4, h5, h6': {
    color: '$text'
  },

  '@media (max-width: 1440px)': {
    html: {
      fontSize: '93.75%'
    }
  },

  '@media (max-width: 1024px)': {
    html: {
      fontSize: '87.5%'
    }
  },
  '::-webkit-scrollbar': {
    display: 'none'
  },

  '::-webkit-scrollbar-thumb': {
    display: 'none'
  }
})
