import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
  margin-top: 4.5rem;
`

export const SearchFormHeader = styled.header`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }
  
  span {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`

export const SearchFormInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
  background-color: transparent;
  border: 1px solid transparent;
  
  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
  
  &:focus {
    box-shadow: none;
  }
  `

export const SearchFormInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-right: 1rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  background-color: ${(props) => props.theme['base-input']};

  &:focus-within {
    border: 1px solid ${(props) => props.theme['blue']};
  }
`
