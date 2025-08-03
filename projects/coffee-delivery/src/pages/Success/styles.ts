import styled from "styled-components";

export const ContentContainer = styled.div`
  h2 {
    font-size: ${(props) => props.theme.title.l};
    color: ${(props) => props.theme.colors.yellowDark};
  }

  p {
    font-size: ${(props) => props.theme.text.l};
    color: ${(props) => props.theme.colors.baseSubtitle};
    line-height: 140%;
  }

  .content {
    display: flex;
    height: 100%;

    .mainContainer {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 9rem;

      .mainContentContainer {
        margin-top: 2.5rem;
        display: flex;
        flex-direction: row;
      }

      .informationContainer {
        width: 50%;
        display: flex;
        align-items: center;

        .informationCard {
          position: relative;
          border-radius: 6px 36px 6px 36px;
          background: linear-gradient(170deg, #dbac2c, #8047f8);
          padding: 3px;
        }

        .informationCardModule {
          background: ${(props) => props.theme.colors.background};
          color: white;
          padding: 2.5rem;
          border-radius: 6px 36px 6px 36px;
        }

        .infoItem {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
      }

      .image {
        width: 50%;
        display: flex;
        justify-content: center;
      }
    }
  }
`;
