import styled, { keyframes } from "styled-components";

const slideInAnimation = keyframes`
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 32px;
    opacity: 1;
  }
`

export const GoToCartMiniStyled = styled.div`
  position: fixed;
  bottom: 32px;
  width: 70px;
  height: 70px;
  right: 16px;
  border-radius: 100%;
  background: #69FF66;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-size: 40px;
  font-weight: 600;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  animation: ${slideInAnimation} 0.3s ease forwards;
  z-index: 10000;
`;