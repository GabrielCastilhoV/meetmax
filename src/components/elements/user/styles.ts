import Image from 'next/image'

import { styled, VariantProps } from 'styles/stitches.config'

export type UserVariants = VariantProps<typeof ImageContainer>

export const Wrapper = styled('div', {
  display: 'flex',
  gap: '$4',

  cursor: 'pointer',
  br: '$half'
})

export const ImageContainer = styled('div', {
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
    }
  },

  defaultVariants: {
    size: 'small'
  }
})

export const Name = styled('p', {
  fontSize: '$sm',
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
