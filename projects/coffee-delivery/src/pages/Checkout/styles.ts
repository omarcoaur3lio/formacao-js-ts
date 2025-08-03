import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;

  h3 {
    color: ${(props) => props.theme.colors.baseSubtitle};
    font-size: ${(props) => props.theme.title.xs};
  }

  .formContainer {
    margin-top: 9rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .formCard {
      background-color: ${(props) => props.theme.colors.baseCard};
      border-radius: 6px;
      padding: 2.5rem;

      .formCardHeader {
        display: flex;
        gap: 0.5rem;

        span {
          font-size: ${(props) => props.theme.text.m};
          color: ${(props) => props.theme.colors.baseSubtitle};
          line-height: 130%;
        }

        p {
          margin-top: 4px;
          font-size: ${(props) => props.theme.text.s};
        }
      }

      .paymentMethodsForm {
        margin-top: 2rem;
      }

      .inputsContainer {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .input {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          background-color: ${(props) => props.theme.colors.baseInput};
          border: 1px solid ${(props) => props.theme.colors.baseButton};
          border-radius: 4px;
          padding: 0.75rem;
          font-size: ${(props) => props.theme.text.m};
          line-height: 160%;
          color: ${(props) => props.theme.colors.baseText};

          span {
            font-style: italic;
            color: ${(props) => props.theme.colors.baseLabel};
            font-size: ${(props) => props.theme.text.xs};
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          &::placeholder {
            color: ${(props) => props.theme.colors.baseLabel};
          }

          &:focus {
            outline: none;
            box-shadow: 0 0 0 0;
          }

          &:focus-within {
            border: 1px solid ${(props) => props.theme.colors.yellowDark};
          }
        }

        .inputShort {
          width: 12.5rem;
        }

        .inputExtraShort {
          width: 3.5rem;
          text-transform: uppercase;
        }

        .inputOptional {
          background-color: transparent;
          border: 0;
          font-size: ${(props) => props.theme.text.m};
          line-height: 160%;
          color: ${(props) => props.theme.colors.baseText};
          width: 100%;

          &::placeholder {
            color: ${(props) => props.theme.colors.baseLabel};
          }

          &:focus {
            outline: none;
            box-shadow: 0 0 0 0;
          }
        }

        div {
          display: flex;
          gap: 0.75rem;
        }
      }
    }
  }

  .cartContentContainer {
    margin-top: 9rem;
    width: 40%;

    .emptyCartContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        margin-top: 1rem;
        font-size: ${(props) => props.theme.text.m};
        color: ${(props) => props.theme.colors.baseLabel};

        &:last-child {
          margin-top: 0.25rem;
        }

        .link {
          text-decoration: none;
          color: ${(props) => props.theme.colors.yellowDark};
          font-weight: bold;
        }
      }
    }

    .cartContentCard {
      margin-top: 0.75rem;
      background-color: ${(props) => props.theme.colors.baseCard};
      border-radius: 6px 44px;
      padding: 2.5rem;

      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .separator {
        height: 1px;
        width: 100%;
        background-color: ${(props) => props.theme.colors.baseButton};
      }

      .totalContainer {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        div {
          display: flex;
          justify-content: space-between;

          p {
            font-size: ${(props) => props.theme.text.s};
            line-height: 130%;
            color: ${(props) => props.theme.colors.baseText};
          }

          span {
            font-size: ${(props) => props.theme.text.l};
            line-height: 130%;
            font-weight: bold;
            color: ${(props) => props.theme.colors.baseSubtitle};
          }
        }
      }
    }
  }
`;
