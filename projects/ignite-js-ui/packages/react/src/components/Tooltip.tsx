import * as RadixTooltip from '@radix-ui/react-tooltip'
import { styled } from '../styles'
import { ReactNode } from 'react'
import { Text } from './Text'

export interface TooltipProps extends RadixTooltip.TooltipContentProps {
  children: ReactNode
  content: string
}

export const TooltipProvider = RadixTooltip.Provider

export const TooltipContent = styled(RadixTooltip.Content, {
  padding: '$3 $4',
  borderRadius: '$sm',
  backgroundColor: '$gray900',
  color: '$gray100',
  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)',
})

const Description = styled(Text, {
  fontWeight: '$medium',
})

export const TooltipArrow = styled(RadixTooltip.Arrow, {
  fill: '$gray900',
})
export function Tooltip({ children, content }: TooltipProps) {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <TooltipContent sideOffset={-20}>
          <Description size="sm">{content}</Description>
          <TooltipArrow width={16} height={8} />
        </TooltipContent>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  )
}
