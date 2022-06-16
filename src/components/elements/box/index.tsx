import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '../button'

import type { BoxProps } from './types'

import * as S from './styles'

export const Box = ({
  children,
  headerName,
  buttonIcon,
  buttonName,
  ...rest
}: BoxProps) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <S.Wrapper
      boxShadow={resolvedTheme === 'light' ? true : undefined}
      {...rest}
    >
      {!!headerName && (
        <S.Header>
          <h5>{headerName}</h5>

          <Button
            size="small"
            color={!!buttonIcon ? 'secondary' : 'tertiary'}
            layout="minimal"
            icon={!!buttonIcon && buttonIcon}
          >
            {!!buttonName && buttonName}
          </Button>
        </S.Header>
      )}

      {children}
    </S.Wrapper>
  )
}
