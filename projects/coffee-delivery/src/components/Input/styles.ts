import styled from "styled-components";

interface InputProps {
  width?: string;
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => (props.width ? props.width : "100%")};
  background-color: ${(props) => props.theme.colors.baseInput};
  border: 1px solid ${(props) => props.theme.colors.baseButton};
  border-radius: 4px;
  padding: 0 0.75rem;
  font-size: ${(props) => props.theme.text.s};
  line-height: 160%;
  color: ${(props) => props.theme.colors.baseLabel};

  input {
    flex: 1;
    padding: 0.75rem 0;
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.baseText};

    &::placeholder {
      color: ${(props) => props.theme.colors.baseLabel};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0;
    }

  }

  span {
    font-style: italic;
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors.yellowDark};
  }
`;
