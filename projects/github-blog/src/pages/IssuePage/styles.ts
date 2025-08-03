import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .markdown {
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem;
    overflow: hidden;

    h1, h2, h3, h4 {
      margin: 1rem 0;
    }

    p {
      margin-bottom: 0.5rem;
    }

    a {
      color: ${(props) => props.theme['blue']};
    }

    img {
      max-width: 100%;
      margin: 1rem 0;
    }

    ul, li {
      margin: 0.5rem 1.5rem;
    }

    code {
      background-color: #112131;
      font-size: 0.875rem;
      border-radius: 0.25rem;
    }
  }
`