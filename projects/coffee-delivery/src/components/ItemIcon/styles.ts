import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  div {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.color};
  }

  p {
    font-size: ${(props) => props.theme.text.m};
  }
`;
