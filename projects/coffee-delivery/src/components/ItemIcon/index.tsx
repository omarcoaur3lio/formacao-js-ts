import { IconContainer } from "./styles";

interface ItemIconProps {
  color: string;
  description?: string;
  children: React.ReactNode;
}

export function ItemIcon({ color, description, children }: ItemIconProps) {
  return (
    <IconContainer color={color}>
      <div>
        {children}
      </div>
      <p>{description}</p>
    </IconContainer>
  );
}