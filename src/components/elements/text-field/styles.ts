import { styled, VariantProps } from 'styles/stitches.config'

export type TextFieldVariants = VariantProps<typeof Wrapper>

export const Wrapper = styled('div', {
  w: '100%',
  h: 48,
  px: '$4',

  bg: '$gray100',
  br: '$xs',

  '&:focus-within': {
    border: '1px solid $gray150'
  }
})

export const InputWrapper = styled('div', {
  h: '100%',
  display: 'flex',
  align: 'center'
})

export const Input = styled('input', {
  w: '100%',
  h: '100%',
  ml: '$2',

  color: '$text',
  fontSize: '14px',

  bg: '$gray100',
  border: 0,
  outline: 0,

  '&::placeholder': {
    color: '$text'
  }
})

export const Icon = styled('div', {
  display: 'flex',
  fontSize: '$md'
})

export const Error = styled('p', {
  color: '$orange300'
})
