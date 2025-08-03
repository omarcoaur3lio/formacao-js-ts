import styled from "styled-components";
import Background from "../../assets/background.png";

export const LandingContainer = styled.div`
  background: url(${Background}) no-repeat center;
  background-size: cover;
  min-width: 1366px;
  padding-top: 5.875rem;
  padding-bottom: 6.75rem;

  .contentContainer {
    margin: 0 15rem;
    margin-top: 8rem;

    display: grid;
    grid-template-columns: 66% 1fr;

    h1 {
      font-size: ${(props) => props.theme.title.xl};
      color: ${(props) => props.theme.colors.baseTitle};
      max-width: 588px;
      line-height: 130%;
    }

    .subtitle {
      color: ${(props) => props.theme.colors.baseSubtitle};
      font-size: ${(props) => props.theme.text.l};
      margin-top: 1rem;
      line-height: 130%;
      max-width: 588px;
    }

    .itemsContainer {
      margin-top: 4.125rem;
      display: flex;
      gap: 2.5rem;

      .infoItemsContainer {
        display: flex;
        align-items: start;

        flex-direction: column;
        gap: 1.25rem;
      }
    }
  }
`;

export const ProductsContainer = styled.div`
  margin: auto 15rem;
  min-width: 1366px;
  margin-bottom: 8rem;

  h2 {
    margin: 2.5rem 0 3.375rem;
    font-size: ${(props) => props.theme.title.l};
  }

  .productsListContainer {
    display: flex;
    justify-content: space-start;
    flex-wrap: wrap;
    gap: 40px;
  }
`;
