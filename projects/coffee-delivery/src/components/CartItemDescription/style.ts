import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;

  .itemContainer {
    display: flex;
    gap: 1.25rem;
  }

  .itemInfo {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      font-size: ${(props) => props.theme.text.m};
      color: ${(props) => props.theme.colors.baseSubtitle};
      line-height: 130%;
      text-transform: capitalize;
    }

    .itemQuantity {
      display: flex;
      gap: 0.5rem;
    }
  }

  .price {
    font-size: ${(props) => props.theme.text.m};
    line-height: 130%;
    font-weight: bold;
    color: ${(props) => props.theme.colors.baseText};
  }
`;
