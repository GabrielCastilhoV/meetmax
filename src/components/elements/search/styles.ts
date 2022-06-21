import { styled } from 'styles/stitches.config'

export const Wrapper = styled('label', {
  w: 400,
  h: 40,
  px: '$3',

  borderRadius: '$sm',
  border: '1px solid $gray150',

  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    w: 22,
    h: 22
  }
})

export const Input = styled('input', {
  w: '100%',
  h: '100%',

  bg: 'none',
  border: 'none',
  outline: 'none',

  color: '$text',
  fontWeight: '$light',

  '&::placeholder': {
    color: '$text'
  }
})
