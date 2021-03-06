import { styled, VariantProps } from 'styles/stitches.config'

export type ButtonVariants = VariantProps<typeof Wrapper>

export const Wrapper = styled('button', {
  h: 48,
  px: '$4',

  br: '$xs',

  display: 'flex',
  align: 'center',
  justify: 'center',
  gap: '$2',

  cursor: 'pointer',
  color: '$text',

  span: {
    fontWeight: '$bold',
    fontSize: '14px'
  },

  svg: {
    w: 24,
    h: 24
  },

  variants: {
    layout: {
      normal: {
        transition: 'filter 0.2s ease-in-out',

        '&:hover': {
          filter: 'brightness(0.9)'
        }
      },

      minimal: {
        bg: 'transparent',
        border: 'none'
      }
    },

    size: {
      large: {
        w: '100%'
      },

      medium: {},
      small: {}
    },

    color: {
      primary: {
        bg: '$blue300',
        color: '#FFF'
      },

      secondary: {
        bg: 'transpararent'
      },

      tertiary: {
        bg: 'transpararent',
        color: '$blue300'
      },

      quaternary: {
        bg: 'transpararent',
        border: '1px solid $gray100'
      }
    }
  },

  compoundVariants: [
    {
      layout: 'minimal',
      size: 'small',
      css: {
        span: {
          display: 'none'
        },

        '@lg': {
          span: {
            display: 'block'
          }
        }
      }
    }
  ],

  defaultVariants: {
    size: 'large',
    layout: 'normal',
    color: 'secondary'
  }
})
