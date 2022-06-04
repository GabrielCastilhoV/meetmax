import Image from 'next/image'

import { styled, VariantProps } from 'styles/stitches.config'

export type UserVariants = VariantProps<typeof Wrapper>

export const Wrapper = styled('div', {
  br: '$half',

  variants: {
    size: {
      normal: {
        w: '100px'
      },

      small: {
        w: '60px'
      }
    }
  },

  defaultVariants: {
    size: 'small'
  }
})

export const Name = styled('p', {})

export const Bio = styled('span', {})

export const Avatar = styled(Image, {
  br: '$half'
})
