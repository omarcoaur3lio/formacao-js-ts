import styled from "styled-components";

export const InputNumberContainer = styled.div`
  display: flex;
  height: 38px;
  border-radius: 6px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: ${(props) => props.theme.colors.baseButton};

  color: ${(props) => props.theme.colors.baseTitle};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 1rem;
    background-color: transparent;
    border: 0;
    outline: none;

    cursor: pointer;

    
    svg {
      fill: ${(props) => props.theme.colors.purple};
      transition: fill 0.2s;
    }
    
    &:hover {
      svg {
        fill: ${(props) => props.theme.colors.purpleDark};        
      }

    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }
  }
`;
