import Image from 'next/image'

import { styled, VariantProps } from 'styles/stitches.config'

export type UserVariants = VariantProps<typeof ImageContainer>

export const Wrapper = styled('div', {
  display: 'flex',
  align: 'center',
  gap: '$4',

  br: '$half'
})

export const ImageContainer = styled('div', {
  cursor: 'pointer',

  variants: {
    size: {
      normal: {
        w: '100px'
      },

      small: {
        w: '60px'
      },

      tiny: {
        w: '50px'
      }
    },

    isStatus: {
      true: {
        border: '2px solid $blue300',
        br: '$half'
      }
    }
  },

  defaultVariants: {
    size: 'small'
  }
})

export const Content = styled('div', {
  display: 'flex',
  align: 'center',
  justify: 'space-between',

  variants: {
    fullWidth: {
      true: {
        w: '100%'
      }
    }
  }
})

export const Circle = styled('div', {
  w: 10,
  h: 10,
  br: '$half',
  bg: '$green300'
})

export const LastTime = styled('div')

export const Name = styled('p', {
  cursor: 'pointer',

  fontSize: '$xs',
  fontWeight: '$bold'
})

export const Bio = styled('span', {
  display: 'block',

  fontSize: '12px',
  mt: '$1'
})

export const Avatar = styled(Image, {
  w: '100%',
  br: '$half'
})
