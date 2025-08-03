import { ReactNode } from "react";
import styled from "styled-components";

export interface CardProps {
  type?: 'post' | 'profile';
  children: ReactNode
}
export const CardContainer = styled.div<CardProps>`
  border-radius: 10px;
  padding: 2rem;
  border: 2px solid transparent;
  background-color: ${(props) => props.type === 'profile' ? props.theme['base-profile'] : props.theme['base-post']};
  display: flex;
  flex-direction: column;   
  gap: 1.25rem;
  height: ${(props) => props.type === 'profile' ? 'auto' : '16.25rem'};
  overflow: hidden;
  transition: border 0.2s;
  box-shadow: ${(props) => props.type === 'profile' && '0 2px 28px ' + 'rgba(0, 0, 0, 0.2)'};

  &:hover {
    border: ${(props) => props.type !== 'profile' && '2px solid ' + props.theme['base-label']};
  }

  p {
    margin-bottom: ${(props) => props.type === 'profile' && '1.5rem'};
  }

`

export const CardHeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`

export const StyledTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-title']};
  line-height: 160%;
  margin-bottom: 0.5rem;
  `

export const StyledSubTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-title']};
  line-height: 160%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  `

export const CardSpan = styled.span`
  font-size: 0.875rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-span']};
  white-space: nowrap;
  `

export const StyledText = styled.p`
  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  `

export const StyledLink = styled.div`

  .link {
    font-size: 0.75rem;
    color: ${(props) => props.theme['blue']};
    font-weight: bold;
    line-height: 160%;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid transparent;
    padding: 0 0 0.25rem 0;
    cursor: pointer;
    transition: border-bottom 0.2s;
  
    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue']};
    }
  }

`

export const StyledImage = styled.div`
  overflow: hidden;
  
  img {
    border-radius: 8px;
    width: 9.25rem;
    height: 100%;
    object-fit: cover;
  }
`

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['base-subtitle']};
  gap: 1.5rem;

  svg {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const StyledFooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`