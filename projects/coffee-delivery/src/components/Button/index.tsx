import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  handleOnClick?: () => void;
  variant: "primary" | "secondary";
  children?: React.ReactNode;
}

export function Button({
  title,
  handleOnClick,
  variant,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} onClick={handleOnClick} {...props}>
      {variant === "secondary" && children}
      {title}
    </ButtonContainer>
  );
}
