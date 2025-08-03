import * as RadixToast from '@radix-ui/react-toast'
import { keyframes, styled } from '../styles'
import { Heading } from './Heading'
import { Text } from './Text'
import { X } from 'phosphor-react'

export interface ToastProps extends RadixToast.ToastProps {
  title?: string
  description?: string
}

const slideOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 32px))` },
  to: { transform: 'translateX(0)' },
})

export const ToastProvider = RadixToast.Provider

const ToastRoot = styled(RadixToast.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  backgroundColor: '$gray800',
  padding: '$3 $5',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 0.2s ease-out`,
  },
  '&[data-state="closed"]': {
    animation: `${slideOut} 0.2s ease-out`,
  },

  svg: {
    position: 'absolute',
    right: '$4',
    top: '$4',
    color: '$gray200',
  },
})

const ToastViewport = styled(RadixToast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$3 $5',
  gap: '10px',
  width: 360,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 9999,
  outline: 'none',
})

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <>
      <ToastRoot {...props}>
        <Heading size="sm">{title}</Heading>
        <Text size="sm" css={{ color: '$gray200' }}>
          {description}
        </Text>
        <RadixToast.Close asChild>
          <X size={20} />
        </RadixToast.Close>
      </ToastRoot>
      <ToastViewport />
    </>
  )
}

Toast.displayName = 'Toast'
