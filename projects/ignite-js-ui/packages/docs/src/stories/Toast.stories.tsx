import type { Meta } from '@storybook/react'
import { Button, Toast, ToastProps, ToastProvider } from '@ignite-js-ui/react'
import { useArgs } from 'storybook/internal/preview-api'

const dateTime = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'full',
  timeStyle: 'short',
}).format(new Date())

export default {
  title: 'Overlay/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    open: false,
    title: 'Agendamento realizado',
    description: dateTime,
  },
} as Meta<ToastProps>

export const Primary = ({ ...args }: ToastProps) => {
  const [{ open }, updateArgs] = useArgs()

  const handleOpenChange = () => updateArgs({ open: !open })

  return (
    <>
      <Button
        onClick={() => {
          handleOpenChange()
          updateArgs({ open: true })
        }}
      >
        Add event
      </Button>
      <ToastProvider>
        <Toast onOpenChange={handleOpenChange} {...args} />
      </ToastProvider>
    </>
  )
}
