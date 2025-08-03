import styled from "styled-components";

export const EmptySearchContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  padding: 4rem;

  svg {
    font-size: 3rem;
  }

  color: ${(props) => props.theme['base-label']};

`