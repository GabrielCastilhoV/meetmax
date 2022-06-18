import { styled, VariantProps } from 'styles/stitches.config'

export type BoxVariants = VariantProps<typeof Wrapper>

export const Wrapper = styled('div', {
  w: '100%',
  p: '$4 $3',

  bg: '$gray50',
  br: '$md',

  '@md': {
    p: '$5'
  },

  variants: {
    boxShadow: {
      true: {
        boxShadow: '$box'
      }
    }
  }
})

export const Header = styled('div', {
  display: 'flex',
  align: 'center',
  justify: 'space-between',

  borderBottom: '3px solid $gray100',

  h5: {
    fontSize: '$xs',
    fontWeight: '$bold'
  }
})
