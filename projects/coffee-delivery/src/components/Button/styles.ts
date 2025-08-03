import styled from "styled-components";
interface ButtonProps {
  variant: "primary" | "secondary";
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.variant === "primary" &&
    `
    padding: 0.75rem 0.5rem;

    font-size: ${props.theme.button.g};
    font-weight: bold;
    line-height: 160%;
    
    color: ${props.theme.colors.white};
    text-transform: uppercase;
    
    border-radius: 6px;
    background-color: ${props.theme.colors.yellow};
    
    transition: background-color 0.2s;
    
    &:hover:not(:disabled) {
      background-color: ${props.theme.colors.yellowDark};
    }

    &:disabled {
      background-color: ${props.theme.colors.yellowDark};
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0;
    }

  `}

  ${(props) =>
    props.variant === "secondary" &&
    `
    padding: 0.5rem;
    gap: 4px;

    font-size: ${props.theme.button.m};
    line-height: 160%;
    
    color: ${props.theme.colors.baseText};
    text-transform: uppercase;
    
    border-radius: 6px;
    background-color: ${props.theme.colors.baseButton};
    
    transition: background-color 0.2s;

    svg {
      fill: ${props.theme.colors.purple};
    }
    
    &:hover {
      svg {
        fill: ${props.theme.colors.purpleDark};
      }
      color: ${props.theme.colors.baseSubtitle};
      background-color: ${props.theme.colors.baseHover};
    }

  `}
`;
