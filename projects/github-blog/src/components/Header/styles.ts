import styled from "styled-components";
import Image from '../../assets/header-img.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${Image}) no-repeat center center;
  background-size: cover;
 display: flex;
  align-items: center;
 justify-content: center;

 img {
   margin-top: -4rem;
 }
`