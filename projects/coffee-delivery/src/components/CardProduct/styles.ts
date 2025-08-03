import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.baseCard};
  width: 256px;
  padding: 0 1.5rem 1.5rem;

  border-radius: 6px 36px;

  img {
    margin-top: -1.25rem;
  }

  .tagContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px;
    margin: 1rem 0;

    span {
      border-radius: 999px;
      background-color: ${(props) => props.theme.colors.yellowLight};
      color: ${(props) => props.theme.colors.yellowDark};
      text-transform: uppercase;
      font-size: 10px;
      font-weight: bold;
      padding: 4px 8px;
    }
  }

  h3 {
    font-size: ${(props) => props.theme.title.s};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: ${(props) => props.theme.text.s};
    color: ${(props) => props.theme.colors.baseLabel};
    text-align: center;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 2rem;

    div > span:first-child {
      font-size: ${(props) => props.theme.text.s};
    }

    h4 {
      margin-left: 2px;
      display: initial;
      font-size: ${(props) => props.theme.title.m};
      color: ${(props) => props.theme.colors.baseText};
    }

    div:last-child {
      display: flex;
      align-items: center;
    }

    .cart {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 0.5rem;
      background-color: ${(props) => props.theme.colors.purpleDark};
    }

    div svg {
      color: ${(props) => props.theme.colors.baseCard};
    }
  }
`;
