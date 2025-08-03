import styled from "styled-components";

export const PaymentMethodsFormContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  input {
    display: none;
  }

  .paymentMethodCard {
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.baseButton};
    font-size: ${(props) => props.theme.button.m};
    color: ${(props) => props.theme.colors.baseText};
    text-transform: uppercase;
    padding-left: 1rem;
    display: flex;
    width: 100%;

    border: 1px solid transparent;

    align-items: center;
    gap: 0.75rem;
    transition: background-color 0.2s;

    svg {
      color: ${(props) => props.theme.colors.purple};
    }

    label {
      padding: 1rem;
      width: 100%;
    }

    &:hover {
      color: ${(props) => props.theme.colors.baseSubtitle};
      background-color: ${(props) => props.theme.colors.baseHover};
    }
  }

  input:checked + .paymentMethodCard {
    background-color: ${(props) => props.theme.colors.purpleLight};
    border: 1px solid ${(props) => props.theme.colors.purple}; /* substitua "red" pela cor da borda desejada */
  }
`;
