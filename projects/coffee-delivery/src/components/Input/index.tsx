import { InputContainer } from "./styles";

interface InputProps {
  placeholder?: string;
  isOpcional?: boolean;
  width?: string;
}

export function Input({ placeholder, isOpcional, width }: InputProps) {
  return (
    <InputContainer width={width}>
      <input placeholder={placeholder} />
      {isOpcional && <span>Opcional</span>}
    </InputContainer>
  );
}
