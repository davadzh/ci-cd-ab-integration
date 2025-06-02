import styled from "styled-components";

export const FoodGroupBarShadowStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100px;
  width: 100%;
  background: linear-gradient(90deg, #141414 0%, transparent 5%, transparent 95%, #141414 100%);
  pointer-events: none;
  z-index: 1000;
`;