import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  position: fixed;
  background-color: ${(props) => props.theme.colors.background};
  align-items: center;
  justify-content: space-between;
  padding: 2rem 15rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 8px;
  }

  .location {
    background-color: ${(props) => props.theme.colors.purpleLight};
    font-size: ${(props) => props.theme.text.s};
    color: ${(props) => props.theme.colors.purpleDark};
    margin-right: 0.75rem;
    gap: 4px;
  }

  .location svg {
    color: ${(props) => props.theme.colors.purple};
  }

  .cart {
    color: ${(props) => props.theme.colors.yellowDark};
    background-color: ${(props) => props.theme.colors.yellowLight};
    position: relative;
  }

  .cart span {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    background-color: ${(props) => props.theme.colors.yellowDark};

    font-size: ${(props) => props.theme.text.s};
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};

    position: absolute;
    top: -8px;
    right: -8px;
  }
`;
