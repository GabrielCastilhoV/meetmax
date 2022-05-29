import { styled, VariantProps } from 'styles/stitches.config'

export type ButtonVariants = VariantProps<typeof Wrapper>

export const Wrapper = styled('button', {
  h: 48,
  px: '$4',

  br: '$xs',

  cursor: 'pointer',
  color: '$text',

  span: {
    fontWeight: '$bold',
    fontSize: '$xs'
  },

  svg: {
    w: 24,
    h: 24
  },

  variants: {
    layout: {
      normal: {},
      minimal: {
        bg: 'none',
        border: 'none'
      }
    },

    size: {
      large: {},
      medium: {},
      small: {}
    },

    color: {
      primary: {},
      secondary: {}
    }
  },

  defaultVariants: {
    size: 'large',
    layout: 'normal',
    color: 'primary'
  }
})
