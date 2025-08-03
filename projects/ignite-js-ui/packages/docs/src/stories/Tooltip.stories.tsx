import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Text,
  ToastProps,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@ignite-js-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    content: '26 de Outubro - Disponível',
    children: (
      <Box as="button">
        <Text size="md">23</Text>
      </Box>
    ),
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      return <TooltipProvider>{Story()}</TooltipProvider>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<TooltipProps> = {}
